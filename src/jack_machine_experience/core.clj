(ns jack-machine-experience.core
  (:require [compojure.core :as compojure]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [ring.util.http-response :as response]
            [ring.middleware.reload :refer [wrap-reload]]
            [jack-machine-experience.page :as page]))

(defn response-handler [request]
  (response/ok
   (str (:remote-addr request) " !!! " (:headers request))))

(compojure/defroutes handler
  (compojure/GET "/" request (page/render-page))
                 ;(slurp (clojure.java.io/reader (str (System/getProperty "user.dir") "/resources/public/index.html"))))
   (compojure/GET "/jack" request (str "<p>the id is: "))
   (compojure/GET "/machine" request (str "<p>the id is: "))
   (compojure/GET "/interactive" request (str "<p>the id is: "))
   (compojure/GET "/team" request (str "<p>the id is: " ))
   (route/resources "/")
   (route/not-found "Not Found!")
   )

(defn testers []

  "yo"
  (page/render-page))

;; (compojure/defroutes app-routes
;;   (route/resources "/")
;;  (route/not-found "Not Found!"))

;(compojure/routes handler app-routes)

(defn -main []
  (jetty/run-jetty
   (-> #'handler wrap-reload)
   {:port 3000
    :join? false}))
