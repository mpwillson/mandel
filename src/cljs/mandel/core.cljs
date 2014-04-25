;;;; Mandelzoom - as described by A, K, Dewdney.

(ns mandel.core
  (:require [cljs.reader :as reader]
            [goog.Timer :as timer]
            [mandel.gui :as gui] 
            [mandel.set :as set]))

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

(defn set-params 
  "Set values from map param atom in gui elements where element ids match keys."
  [params]
  (doseq [p (keys @params)] (gui/set-value p (p @params))))

(defn get-params 
  "Return and update values in param map atom from gui elements where 
  element ids match keys."
  [params]
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

(def current-col "Holds Mandelbrot set column to be computed."
  (atom 0))

(defn display-progress 
  "Compute and display Mandelbrot set on a column by column basis, 
  using values in global Vars.  Displays progress via gui/pb-update.
  Use of global state and timers required due to single-threading model."
  []
  (let [image-width (gui/canvas-size :mandelCanvas)]
    (set/compute-column-for-matrix @current-col @iplane image-width)
    (let [next-count (swap! current-col inc)]
      (if (= next-count image-width)
        (do
          (gui/set-text :message "Processing ... done")
          (gui/display-matrix :mandelCanvas @set/matrix 
                              image-width image-width))
        (do
          (gui/pb-update next-count)
          (timer/callOnce display-progress 5))))))

(defn display 
  "Compute and display Mandebrot set using values from iplane."
  [iplane]
  (let [image-width (gui/canvas-size :mandelCanvas)
        ms (set/compute iplane image-width)]
    (gui/display-matrix :mandelCanvas ms image-width image-width)))

(defn display-progress-setup 
  "Initialise state (yuck) for calculation and display of Mandelbrot set with
  progress bar."
  []
  (gui/set-text :message "Processing ...")
  (reset! current-col 0)
  (gui/pb-update 0)
  (set/init)
  (display-progress))
  
(defn ^:export display-params 
  "Callback to calculate and display the Mandelbrot set with the parameters
  defined by the user."
  []
  (get-params iplane)
  (display-progress-setup))

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
      (display-progress-setup))))

(defn ^:export back 
  "Restore previous Mandelbrot image, undoing zoom."
  []
  (when-let [previous (vpop)]
    (gui/clear-zoom)
    (reset! iplane (:iplane previous))
    (set-params iplane)
    (gui/display-image :mandelCanvas (:image previous))))

(defn ^:export setup []
  (gui/set-value :version (str "v" version))
  (set-params iplane)
  (gui/pb-init (gui/canvas-size :mandelCanvas))
  (gui/set-canvas-events :mandelCanvas))
