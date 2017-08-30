(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel!
 {:figwheel-options {
                     :http-server-root "public"
                     :server-port 3449
                     :server-ip "127.0.0.1"
                     :css-dirs ["resources/public/css"]
                     :ring-handler 'jack-machine-experience.server/handler
                     }
  :build-ids ["dev"]
  :all-builds
  [{:id "dev"
    :figwheel {:websocket-host :js-client-host}
    :source-paths ["src"]
    :compiler {:main 'jack-machine-experience.core
               :asset-path "js"
               :output-to "resources/public/js/main.js"
               :output-dir "resources/public/js"
               :verbose true}}]})

(ra/cljs-repl)

;; lein run -m clojure.main script/figwheel.clj
