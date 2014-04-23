(ns gui
  (:require [cljs.reader :as reader]
            [goog.dom :as dom]
            [goog.events :as events]
            [goog.string :as gstring] ; both this and next line required for
            [goog.string.format]))    ; goog.string.format


(def zoom (atom {}))
(def image (atom nil))

(defn format 
  "Emulate clojure format via goog.string.format."
  [fmt & args]
  (apply gstring/format fmt args))

(defn canvas-available 
  []
  (.-CanvasRenderingContext2D js/window))

(defn get-element [id]
  (.getElementById js/document (name id)))

(defn get-value [id]
  (reader/read-string (.-value (get-element id))))

(defn set-value [id value]
  (set! (.-value (get-element id)) value))

(defn get-checked [id]
  (.-checked (get-element id)))

(defn set-checked [id value]
  (set! (.-checked (get-element id)) value))

(defn get-context [canvas]
  (.getContext canvas "2d"))

(defn new-origin [[x y] [nx ny]]
  [(min x nx) (min y ny)])

(defn zwidth [[x y] [nx ny]]
  (js/Math.abs (- x nx)))

(defn zheight [[x y] [nx ny]]
  (js/Math.abs (- y ny)))

(defn canvas-size [canvas]
  (.-width (-> canvas get-element)))

;; works for Chrome - needs testing for other browsers.
(defn event-coords 
  [event]
  (let [x (.-offsetX event)
        y (.-offsetY event)]
    (if (and x y)
      [x y]
      [(.-layerX event) (.-layerY event)])))

(defn mouse-drag [e]
  (let [w (.-target e)
        coord (event-coords e)
        origin (:origin @zoom)
        norigin (new-origin origin coord)
        width (zwidth origin coord)
        height (zheight origin coord)
        side (max width height)
        [x y] norigin
        ctx (get-context w)]
    (swap! zoom assoc :width side :height side)
    (.clearRect ctx 0 0 (.-width w) (.-height w))
    (.putImageData ctx @image 0 0)
    ;; use createLinearGradient for rubber-band line style?
    (.strokeRect ctx x y side side)))

(defn mouse-down [e]
  (let [coord (event-coords e)
        w (.-target e)
        ctx (get-context w)]
    ;; on mouse down, set drag handler and save coords as origin of 
    ;; rubber-band box
    (swap! zoom assoc :origin coord)
    (reset! image (.getImageData ctx 0 0 (.-width w) (.-height w)))
    (events/listen w (.-MOUSEMOVE events/EventType) mouse-drag)))    

(defn mouse-up [e]
  (let [w (.-target e)
        coord (event-coords e)]
    ;; on mouse-up; set no-drag handler and store dragged box coords
    (swap! zoom assoc :origin (new-origin (:origin @zoom) coord))
    (events/removeAll w (.-MOUSEMOVE events/EventType))))

(defn set-canvas-events [canvas]
  (let [w (get-element canvas)]
    (events/listen w (.-MOUSEUP   events/EventType)
                   mouse-up)
    (events/listen w (.-MOUSEDOWN events/EventType)
                   mouse-down)))

(defn map-color
  "Convert integer to RGB color."
  [value]
  (if (zero? value) 
    "#000000"
    (let [r (mod (* value 137) 255)
          g (/ r 2)
          b (mod (* r 3) 255)]
      (format "rgb(%d,%d,%d)" r g b))))

(defn draw-symbol [ctx x y size color]
  (set! (.-fillStyle ctx) (map-color color))
  (.fillRect ctx x y size size))

(defn display-matrix [canvas matrix width height]
  (let [c (get-element canvas)
        ctx (get-context c)]
    (doseq [x (range width) y (range height)]
      (let [value (get-in matrix [x y])]
        (draw-symbol ctx x y 1 value)))))

(defn display-image [canvas i]
  (let [c (get-element canvas)
        ctx (get-context c)]
    (reset! image i)
    (.clearRect ctx 0 0 (.-width c) (.-height c))
    (.putImageData ctx i 0 0)))
