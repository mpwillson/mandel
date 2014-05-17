;;;; Calculate the Mandelbrot set as a vector of vectors
;;;; sub-vectors are columns

(ns mandel.set)

(defn compute-column
  "Returns computed column a in the Mandelbrot set in the defined 
  imaginary plane."
  [a {:keys [realorigin imaginaryorigin side]}  pixel-side]
  (let [gap (/ side pixel-side)
        max-iterations 1000]
    (let [ac (+ realorigin (* a gap))]
      (vec (for [b (range pixel-side)]
             (let [bc (+ imaginaryorigin (* b gap))]
               (loop [count 0 az 0 bz 0 limit max-iterations]
                 (let [az2 (* az az)
                       bz2 (* bz bz)
                       at (+ ac (- az2 bz2))
                       bz (+ bc (* 2 bz az))
                       az at
                       size (js/Math.sqrt (+ bz2 az2))
                       ]
                   (if (or (> size 2) (zero? limit))
                     (if (= count max-iterations) 0 count)
                     (recur (inc count) az bz (dec limit)))))))))))

(defn compute
  "Compute Mandelbrot set in the defined imaginary plane."
  [iplane pixel-side]
  (vec (for [a (range pixel-side)] (compute-column a iplane pixel-side))))

(def matrix (atom []))

(defn compute-column-for-matrix
  "Compute column a in the Mandelbrot set in the defined imaginary plane.
  As columns are computed, they are appended to the matrix Var."
  [a iplane pixel-side]
  (let [row (compute-column a iplane pixel-side)]
    (swap! matrix conj row)))

(defn init 
  "Reset matrix var to empty vector before compute-column processing."
  []
  (reset! matrix []))
