(ns mandel.core
  (:require [cljs.reader :as reader]
            [mandel.gui :as gui] [mandel.set :as set]))

(def version "0.1")

;; default imaginary plane coordinates
(def iplane (atom {:realorigin -2.0, :imaginaryorigin -1.25, :side 2.5}))

;; Stack for saving images on zoom operations; restore on back
(let [stack (atom (list))]
  (defn push [elt]
    (swap! stack conj elt))
  (defn vpop []
    (let [elt (first @stack)]
      (swap! stack rest)
      elt)))

(defn set-params [params]
  (doseq [p (keys @params)] (gui/set-value p (p @params))))

(defn get-params [params]
  (let [param-keys (keys @params)
        values (flatten (for [k param-keys] (list k (gui/get-value k))))]
    (swap! params (partial apply assoc) values)))

(defn zoomed-iplane 
  "Calculate new coordinates for imaginary plane based on zoom area."
  [{:keys [realorigin imaginaryorigin side]}
   {:keys [origin width height]} image-width]
  (let [[x y] origin
        new-ro (+ (/ (* side x) image-width) realorigin)
        new-io (+ (/ (* side y) image-width) imaginaryorigin)
        new-side (* (/ width image-width) side)]
    {:realorigin new-ro :imaginaryorigin new-io :side new-side}))

(defn progress [count]
  (js/console.log count))

(defn display [iplane]
  (let [image-width (gui/canvas-size :mandelCanvas)
        ms (set/compute-set iplane image-width nil)]
    (gui/display-matrix :mandelCanvas ms image-width image-width)))

(defn ^:export display-params []
  (display (get-params iplane)))

(defn ^:export zoom 
  "Recompute and display Mandelbrot set image based on zoom
  parameters. Previous image is saved on stack."
  []
  (when-let [zoom-params (gui/get-zoom)]
    (let [image-width (gui/canvas-size :mandelCanvas)
          new-iplane (zoomed-iplane @iplane zoom-params image-width)]
      (doseq [p (keys new-iplane)] (gui/set-value p (p new-iplane)))
      (push {:iplane @iplane, :image @gui/image})
      (reset! iplane new-iplane)
      (display new-iplane))))

(defn ^:export back 
  "Restore previous Mandelbrot image, undoing zoom."
  []
  (when-let [previous (vpop)]
      (reset! iplane (:iplane previous))
      (set-params iplane)
      (gui/display-image :mandelCanvas (:image previous))))

(defn ^:export setup []
  (gui/set-value :version (str "v" version))
  (set-params iplane)
  (gui/set-canvas-events :mandelCanvas))
