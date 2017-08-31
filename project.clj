(defproject jack-machine-experience "0.1.0-SNAPSHOT"
  :description "Jack and the Machine: An Interactive Documentary"
  :url "http://"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.293"]
                 [org.omcljs/om "1.0.0-alpha48"]
                 [racehub/om-bootstrap "0.6.1"]
                 ;;[lein-figwheel "0.5.8"]
                 [figwheel-sidecar "0.5.8"]
                 [ring "1.5.0"]
                 [metosin/ring-http-response "0.6.5"]
                 [compojure "1.5.1"]
                 [hiccup "1.0.5"]]
  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-figwheel "0.5.13"]]
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.2"]
                                  [figwheel-sidecar "0.5.8"]
                                  [org.clojure/tools.nrepl "0.2.10"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}

  :clean-targets ^{:protect false} ["resources/public/js/out"
                                    "resources/public/js/flappy_bird_demo.js"
                                    :target-path]
  :source-paths ["src"]
  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        ;;:figwheel {:websocket-host :js-client-host }
                        :figwheel true
                        :compiler {
                                   :main "jack-machine-experience.core"
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/out"
                                   :asset-path "cljs"
                                   :optimizations :none
                                   :source-map true
                                   }}
                       {:id "release"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "resources/public/main.js"
                                   :optimizations :advanced
                                   :pretty-print false}}
                       ]}
  :figwheel {
             ;; :http-server-root "public"
             ;; :server-port 3449
             ;; :server-ip "127.0.0.1" ;; "172.16.61.133"
             :css-dirs ["resources/public/css"]
            }
  :main jack-machine-experience.core)
