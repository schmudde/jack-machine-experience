(ns jack-machine-experience.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [jack-machine-experience.page :as page]))

(enable-console-print!)

(println "yeeessss")

;; TODO - Check this very simple state updater with a browser REPL. Is @state updated? If so, try it with IQuery, parsing, reads, and mutation (comment this and uncomment the code below)

(def reconciler
  (om/reconciler {:state page/state
                 }))

(om/add-root! reconciler
  page/Input
  (gdom/getElement "cljs-content"))

;; (def reconciler
;;   (om/reconciler {:state page/state
;;                   :parser (om/parser {:read page/reader :mutate page/mutater})}))

;; (om/add-root! reconciler
;;   page/EmailForm
;;   (gdom/getElement "cljs-content"))
