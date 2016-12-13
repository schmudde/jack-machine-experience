(ns jack-machine-experience.server
  (:require
   [ring.middleware.resource :refer (wrap-resource)]
   [ring.util.response :refer (redirect)]
   [jack-machine-experience.page-template :as page-template]))

(defn handler [request]
  (case (:uri request)
    "/"
    {:status 200
     :headers {"Content-Type" "text/html"}
     :body (page-template/render-page)}
    "/welcome-message"
    {:status 200
     :headers {"Content-Type" "text/html"}
     :body "Hello World From Server!"}
    {:status 404
     :headers {"Content-Type" "text/html"}
     :body (str "Cannot find:" (:uri request))}))

(def app
  (-> handler
      ;; static resources in resources/public
      (wrap-resource "public")
      ;; static resources from webjars dependencies
      (wrap-resource "/META-INF/resources")))
