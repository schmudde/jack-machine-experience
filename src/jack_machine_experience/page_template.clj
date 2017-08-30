(ns jack-machine-experience.page-template
  (:require [hiccup.page :as hiccup]
            [jack-machine-experience.page :as page]))

(defn render-page []
  (let [page (page/render-page)]
    (hiccup/html5
     [:head
      [:title "Jack and the Machine"]]
     [:body
      [:section#server-side page]
      [:div#cljs-content]
      (hiccup/include-js "/js/main.js")
      [:div [:a "Jack"]]
      [:div [:a "Machine"]]
      ])))
