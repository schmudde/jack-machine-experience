(ns jack-machine-experience.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(println "Hello world!!!! core.cljs")

(defui HelloWorld
  Object
  (render [this]
          (dom/div nil "Hello World!!! core.cljs")))

(def hello (om/factory HelloWorld))

(js/ReactDOM.render (hello) (gdom/getElement "cljs-content"))
