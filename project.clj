(defproject mandeel "0.1.0-SNAPSHOT"
  :description "Clojurescript Mandelbrot generator."
  :url "http://github.com/mpwillson/mandel"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-cljsbuild "1.0.2"]]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/tools.nrepl "0.2.3"]]
  :source-paths ["src/clj"]
  :cljsbuild {:builds [{:source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/mandel.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}]})
