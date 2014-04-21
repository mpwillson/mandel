(ns mandelset)

(defn compute-set [acorner bcorner side pixel-side]
  (let [gap (/ side pixel-side)]
    (for [b (range (dec pixel-side) -1 -1)]
      (let [bc (+ bcorner (* b gap))]
        (for [a (range pixel-side)]
            (let [ac (+ acorner (* a gap))]
                (loop [count 0 az 0 bz 0 limit 1000]
                  (let [at (+ ac (- (* az az) (* bz bz)))
                        bz (+ bc (* 2 bz az))
                        az at
                        ;;size (Math/sqrt (+ (* bz bz) (* az az)))
                        size (js/Math.sqrt (+ (* bz bz) (* az az)))
                        ]
                    (if (or (> size 2) (zero? limit))
                      count
                      (recur (inc count) az bz (dec limit)))))))))))