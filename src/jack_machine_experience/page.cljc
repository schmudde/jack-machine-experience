(ns jack-machine-experience.page
  (:require #?@(:cljs [[goog.dom :as gdom]]) ;; probably don't need this interop
                      [om.next :as om :refer [defui]]
                      [om.dom :as dom]))

(defui HelloWorld
  Object
  (render [this]
          (dom/div nil "Hello World!")))

(def hello (om/factory HelloWorld))

(defn render-page []
  (let [rendered-page (dom/render-to-str (hello))]
   rendered-page))
