(ns jack-machine-experience.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]))

;;(enable-console-print!)

(def welcome {:locale "Welcome" :locale-content "" :locale-bg ""})
(def cold-war {:locale "NYC Mainframe" :locale-content "[[Animation] Mainframes: Missile Defense, Missile Guidance, Financial Transactions, Flight Scheduling, Atomic Research, Surveillance] Dominated by multinational corporations with deep corporate and government contacts: IBM, Sperry Rand, Burroughs, General Electric, and Honeywell, their flagship mainframes sold in the thousands and tens-of-thousands. These prestige products were accompanied by a range of number crunching, time keeping, and word processing products to outfit the rest of the office. Smaller business equipment suppliers, like Jack Tramiel's Commodore Business Machines, were tremendously disadvantaged. They built products that went direct to consumer, competing on price with the post-war global order their marketplace. Commodore ran lean and these handicaps became attributes as Tramiel's business philosophy began to align with the forthcoming technological revolution." :locale-bg "borderlessBG"})
(def pc {:locale "Global PC" :locale-content "" :local-bg ""})
(def ww2 {:locale "Lodz Tabulator" :locale-content "" :local-bg ""})
(def direction (atom {:north nil :west welcome :south nil :east ww2}))

;; 1 - Create the broad dispatch, which is not the data iself

(defn dispatch-screen-locale [section]
  (rf/dispatch [:screen section]))

;; 2 - Handle the dispatch by updating the data:
    ;; 1) On the initial load - initalize the data
    ;; 2) Any time the user requests a screen change - update the data

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:locale "Jack and the Machine" :locale-content "" :locale-bg ""}))

(rf/reg-event-db
 :screen-change
 (fn [db [_ current-screen]]
   (let [{:keys [locale locale-content locale-bg]} current-screen]
     (assoc db :locale locale :locale-content locale-content :locale-bg locale-bg))))

;; 4 - Query the data to see if it has changed. In this case, data = locale

(rf/reg-sub
 :locale
 (fn [db _]
   (:locale db)))

(rf/reg-sub
 :locale-content
 (fn [db _]
   (:locale-content db)))

(rf/reg-sub
 :locale-bg
 (fn [db _]
    (:locale-bg db)))

;; 5 - Subscribe to the query of the data and create the view, that way if it is updated, we update it.

;; TODO: I want the bgvid video componenet to rerender when there is an update to :locale-bg

(defn screen-locale []
  [:div
   [:video {:poster "TODO" :id "bgvid" :auto-play true :loop true}
    [:source {:src (str "vid/" @(rf/subscribe [:locale-bg]) ".ogg") :type "video/ogg"}]
     ;; [:source {:src "vid/borderlessBG.webm" :type "video/webm"}]
     ]
   [:div.f-headline.lh-solid.tc
    @(rf/subscribe [:locale])]
   [:p.sans-serif @(rf/subscribe [:locale-content])]])

(defn update-state! [cardinal]
  (fn []
    (when-let [content (cardinal @direction)]
      (case cardinal
        :east (reset! direction (assoc @direction :north cold-war))
        :north (reset! direction (assoc @direction :south pc))
        nil)
      (rf/dispatch [:screen-change content]))))

(defn screen-changer
  []
  [:div.w-100
   [:div.flex.justify-center
   [:div.pt6.flex.items-center
    [:div {:style {:float "left"}}
     [:button {:on-click (update-state! :west)} "←"]]
    [:div {:style {:float "left"}}
     [:button {:on-click (update-state! :north)
               :style {:display "block"}} "↑"]
     [:button {:on-click (update-state! :south)
               :style {:display "block"}}"↓"]]
    [:div {:style {:float "left"}}
     [:button {:on-click (update-state! :east)} "→"]]]]])

(defn ui []
  [:div.pa4
   [:div.vh-50
    [screen-locale]]
   [screen-changer]])

(defn ^:export run []
  (rf/dispatch-sync [:initialize])
  (reagent/render [ui]
                  (js/document.getElementById "app")))
