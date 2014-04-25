;;;; Handle gui interaction for MandelZoom

(ns mandel.gui
  (:require [cljs.reader :as reader]
            [goog.dom :as dom]
            [goog.events :as events]
            [goog.ui.ProgressBar]
            [goog.ui.ProgressBar.Orientation]
            [goog.string :as gstring] ; both this and next line required for
            [goog.string.format]))    ; goog.string.format

(def zoom "Holds zoom box coordinates." 
  (atom {}))

(def image "Mandelbrot display image prior to zoom."
  (atom nil))

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

(defn zoom-width [[x y] [nx ny]]
  (js/Math.abs (- x nx)))

(defn zoom-height [[x y] [nx ny]]
  (js/Math.abs (- y ny)))

(defn canvas-size [canvas]
  (.-width (-> canvas get-element)))

(defn get-zoom []
  (let [zoom-params @zoom]
    (if (seq zoom-params)
      zoom-params
      nil)))

(defn clear-zoom []
  (reset! zoom {}))

(defn set-text [id txt]
  (dom/setTextContent (get-element id) txt))

;; Progress bar handling; note that CSS styles are required to support
;; the rendering of goog.ui.ProgressBar.  Assume div with name of "pb" exists.
(let [pb (goog.ui.ProgressBar.)]
  (defn pb-init [max-count]
    (doto pb
      (.setMaximum max-count)
      (.setOrientation goog.ui.ProgressBar.Orientation/HORIZONTAL)
      (.render (get-element :pb))))
  (defn pb-update [count]
    (.setValue pb count)))

;; works for Chrome - needs testing for other browsers.
(defn event-coords 
  "Return [x y] of event location."
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
        width (zoom-width origin coord)
        height (zoom-height origin coord)
        side (max width height)
        [x y] norigin
        ctx (get-context w)]
    (swap! zoom assoc :width side :height side)
    (.putImageData ctx @image 0 0)
    (set! (.-fillStyle ctx) "rgba(200,200,200,0.5)")
    (.fillRect ctx x y side side)))

(defn mouse-down [e]
  (let [coord (event-coords e)
        w (.-target e)
        ctx (get-context w)]
    ;; on mouse down, set drag handler and save coords as origin of 
    ;; rubber-band box
    (swap! zoom assoc :origin coord)
    (when-not @image 
      (reset! image (.getImageData ctx 0 0 (.-width w) (.-height w))))
    (events/listen w (.-MOUSEMOVE events/EventType) mouse-drag)))    

(defn mouse-up [e]
  (let [w (.-target e)
        coord (event-coords e)]
    ;; on mouse-up; store dragged box coords and unset drag handler
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
    (let [r (mod (* value 33) 255)
          g (/ r 5)
          b 200 ] ;(mod (* r 11) 255)]
      (format "rgb(%d,%d,%d)" r g b))))

(defn draw-symbol [ctx x y size color]
  (set! (.-fillStyle ctx) (map-color color))
  (.fillRect ctx x y size size))

(defn display-matrix 
  "Display matrix on canvas.  Image state is no longer valid."
  [canvas matrix width height]
  (let [c (get-element canvas)
        ctx (get-context c)]
    (reset! image nil)
    (doseq [x (range width) y (range height)]
      (let [value (get-in matrix [x y])]
        (draw-symbol ctx x y 1 value)))))

(defn display-image 
  "Display image i to canvas.  Set image var."
  [canvas i]
  (let [c (get-element canvas)
        ctx (get-context c)]
    (reset! image i)
    (.putImageData ctx i 0 0)))
