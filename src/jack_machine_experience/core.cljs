(ns jack-machine-experience.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(println "Hello world!!")

(defui HelloWorld
  Object
  (render [this]
          (dom/div nil "Hello World! Figwheel!!!!!!")))

(def hello (om/factory HelloWorld))

(js/ReactDOM.render (hello) (gdom/getElement "app"))
