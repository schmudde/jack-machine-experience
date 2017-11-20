(ns jack-machine-experience.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]))

;;(enable-console-print!)

(def welcome {:locale "Welcome" :locale-content "" :locale-bg "commodore"})
(def cold-war {:locale "NYC Mainframe" :locale-content "[[Animation] Mainframes: Missile Defense, Missile Guidance, Financial Transactions, Flight Scheduling, Atomic Research, Surveillance] Dominated by multinational corporations with deep corporate and government contacts: IBM, Sperry Rand, Burroughs, General Electric, and Honeywell, their flagship mainframes sold in the thousands and tens-of-thousands. These prestige products were accompanied by a range of number crunching, time keeping, and word processing products to outfit the rest of the office. Smaller business equipment suppliers, like Jack Tramiel's Commodore Business Machines, were tremendously disadvantaged. They built products that went direct to consumer, competing on price with the post-war global order their marketplace. Commodore ran lean and these handicaps became attributes as Tramiel's business philosophy began to align with the forthcoming technological revolution." :locale-bg "ibm"})
(def pc {:locale "Global PC" :locale-content "" :locale-bg "pet"})
(def ww2 {:locale "Lodz Tabulator" :locale-content "" :locale-bg "dehomag" :locale-puzzle 1})
(def direction (atom {:north nil :west ww2 :south nil :east welcome}))

;; 1 - Create the broad dispatch, which is not the data iself

(defn dispatch-screen-locale [section]
  (rf/dispatch [:screen section]))

;; 2 - Handle the dispatch by updating the data:
    ;; 1) On the initial load - initalize the data
    ;; 2) Any time the user requests a screen change - update the data

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:locale "Jack and the Machine" :locale-content "" :locale-bg "jatm"
    :buttons {:up (:north @direction) :down (:south @direction)}}))

(rf/reg-event-db
 :screen-change
 (fn [db [_ current-screen]]
   (let [{:keys [locale locale-content locale-bg]} current-screen]
     (assoc db :locale locale :locale-content locale-content :locale-bg locale-bg
               :buttons {:up (:north @direction) :down (:south @direction)}))))

;; 4 - Query the data to see if it has changed.

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

(rf/reg-sub
 :buttons
 (fn [db _]
   (:buttons db)))

;; 5 - Subscribe to the query of the data and create the view, that way if it is updated, we update it.

(defn check-box []
  [:div
   ;;[:input {:type "check-box" :id "box-one" :name "box-two" :value @(rf/subscribe [:locale-puzzle])}]
   ])


(defn screen-locale []
  [:div
   [:div.container
    [:video.videoPlayer {:src (str "vid/" @(rf/subscribe [:locale-bg]) ".webm") :type "video/webm;codecs='vp8, vorbis'"
                         :poster "TODO" :id "bgvid" :auto-play "autoplay" :loop true}
     [:source {:src (str "vid/" @(rf/subscribe [:locale-bg]) ".ogg") :type "video/ogg"}]]]
   [:div.f-headline.lh-solid.tc
    @(rf/subscribe [:locale])]
   (check-box)
   [:p @(rf/subscribe [:locale-content])]])

(defn update-state! [cardinal]
  (fn []
    (when-let [content (cardinal @direction)]
      (case cardinal
        :west (reset! direction (assoc @direction :north cold-war))
        :north (reset! direction (assoc @direction :south pc))
        nil)
      (rf/dispatch [:screen-change content]))))

(defn screen-changer []
    [:div.w-100
     [:div.flex.justify-center
      [:div.pt6.flex.items-center
       [:div {:style {:float "left"}}
        [:button {:on-click (update-state! :west)} "←"]]
       [:div {:style {:float "left"}}
        [:button
         {:on-click (update-state! :north)
          :style (if (:up @(rf/subscribe [:buttons])) {:display "block"} {:display "none"})} "↑"]
        [:button
         {:on-click (update-state! :south)
          :style (if (:down @(rf/subscribe [:buttons])) {:display "block"} {:display "none"})}"↓"]]
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
