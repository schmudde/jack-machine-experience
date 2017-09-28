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
   {:locale "Jack and the Machine" :locale-content ""}))

(rf/reg-event-db
 :screen-change
 (fn [db [_ new-title new-content]]
   (assoc db :locale new-title :locale-content new-content)))

;; 4 - Query the data to see if it has changed. In this case, data = locale

(rf/reg-sub
 :locale
 (fn [db _]
   (:locale db)))

(rf/reg-sub
 :locale-content
 (fn [db _]
   (:locale-content db)))

;; 5 - Subscribe to the query of the data and create the view, that way if it is updated, we update it.

(defn screen-locale []
  [:div
   [:div.f-headline.lh-solid.tc
    @(rf/subscribe [:locale])]
   [:p.sans-serif @(rf/subscribe [:locale-content])]])

(defn screen-changer
  []
  [:div.w-100
   [:div.flex.justify-center
   [:div.pt6.flex.items-center
    [:div {:style {:float "left"}}
     [:button {:on-click #(rf/dispatch [:screen-change "Welcome" ""])} "←"]]
    [:div {:style {:float "left"}}
     [:button {:on-click #(rf/dispatch [:screen-change "NYC Mainframe"
                                        "[[Animation] Mainframes: Missile Defense, Missile Guidance, Financial Transactions, Flight Scheduling, Atomic Research, Surveillance] Dominated by multinational corporations with deep corporate and government contacts: IBM, Sperry Rand, Burroughs, General Electric, and Honeywell, their flagship mainframes sold in the thousands and tens-of-thousands. These prestige products were accompanied by a range of number crunching, time keeping, and word processing products to outfit the rest of the office. Smaller business equipment suppliers, like Jack Tramiel's Commodore Business Machines, were tremendously disadvantaged. They built products that went direct to consumer, competing on price with the post-war global order their marketplace. Commodore ran lean and these handicaps became attributes as Tramiel's business philosophy began to align with the forthcoming technological revolution."])
               :style {:display "block"}} "↑"]
     [:button {:on-click #(rf/dispatch [:screen-change "Global PC"])
               :style {:display "block"}}"↓"]]
    [:div {:style {:float "left"}}
     [:button {:on-click #(rf/dispatch [:screen-change "Lodz Tabulator"])} "→"]]]]])


(defn ui []
  [:div.pa4
   [:div.vh-50
    [screen-locale]]
   [screen-changer]])

(defn ^:export run []
  (rf/dispatch-sync [:initialize])
  (reagent/render [ui]
                  (js/document.getElementById "app")))
