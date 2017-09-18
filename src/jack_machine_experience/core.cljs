(ns jack-machine-experience.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]))

(enable-console-print!)

;; 1 - Create the broad dispatch, which is not the data iself

(defn dispatch-screen-locale [section]
  (rf/dispatch [:screen section]))

;; 2 - Handle the dispatch by updating the data:
    ;; 1) On the initial load - initalize the data (in this case, data = locale)
    ;; 2) Any time the user requests a screen change - update the data (in this case, data = locale)

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:locale "Jack and the Machine"}))

(rf/reg-event-db
 :screen-change
 (fn [db [_ new-screen]]
   (assoc db :locale new-screen)))

;; 4 - Query the data to see if it has changed. In this case, data = locale

(rf/reg-sub
 :locale
 (fn [db _]
   (:locale db)))

;; 5 - Subscribe to the query of the data and create the view, that way if it is updated, we update it.

(defn screen-locale []
  [:h1
    @(rf/subscribe [:locale])])

(defn screen-changer
  []
  [:div
   [:button {:on-click #(rf/dispatch [:screen-change "Top Screen"])} "Switch Screens"]])

(defn ui []
  [:div
   [screen-locale]
   [screen-changer]])

(defn ^:export run []
  (rf/dispatch-sync [:initialize])
  (reagent/render [ui]
                  (js/document.getElementById "app")))
