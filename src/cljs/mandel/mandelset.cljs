(ns mandelset)

(defn compute-set [{:keys [realorigin imaginaryorigin side]}  pixel-side]
  (let [gap (/ side pixel-side)
        max-iterations 1000]
    (vec (for [a (range pixel-side)]
      (let [ac (+ realorigin (* a gap))]
        (vec (for [b (range pixel-side)]
            (let [bc (+ imaginaryorigin (* b gap))]
                (loop [count 0 az 0 bz 0 limit max-iterations]
                  (let [at (+ ac (- (* az az) (* bz bz)))
                        bz (+ bc (* 2 bz az))
                        az at
                        ;;size (Math/sqrt (+ (* bz bz) (* az az)))
                        size (js/Math.sqrt (+ (* bz bz) (* az az)))
                        ]
                    (if (or (> size 2) (zero? limit))
                      (if (= count max-iterations) 0 count)
                      (recur (inc count) az bz (dec limit)))))))))))))