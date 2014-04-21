(ns mandel
  (:require [cljs.reader :as reader]
            [gui] [mandelset]))

(def version "0.1")
(def unsupported 
  (str "<h1>Unsupported Browser</h1>" 
       "<p>Please consider upgrading to the latest version of Chrome, Firefox, "
       "Opera, Safari or IE9.</p>"))

(def default-params {:realorigin -2.0, :imaginaryorigin -1.25, :size 2})


(defn ^:export set-param [param]
  (let [param-key (keyword param)
        param-value (gui/get-value param)]
    (mandelset/set-param param-key param-value)))

(defn coll-to-vec [c]
  (vec (map vec c)))

(defn display []
  (let [ms (mandelset/compute-set -2.0 -1.25 2.5 400)
        is (map (fn [row] (map #(if (= % 1000) 0 (* % 23)) row)) ms)]
    (gui/display-matrix (coll-to-vec is) 400 400)))

(defn ^:export setup []
  (if (not (gui/canvas-available))
    (.write js/document unsupported)
    (do
      (gui/set-value :version (str "v" version))
      (doseq [p (keys default-params)] 
        (gui/set-value p (p default-params)))
      (gui/set-event))))
