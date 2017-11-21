(ns jack-machine-experience.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]))

(enable-console-print!)

;; [[Animation] Mainframes: Missile Defense, Missile Guidance, Financial Transactions, Flight Scheduling, Atomic Research, Surveillance] Dominated by multinational corporations with deep corporate and government contacts: IBM, Sperry Rand, Burroughs, General Electric, and Honeywell, their flagship mainframes sold in the thousands and tens-of-thousands. These prestige products were accompanied by a range of number crunching, time keeping, and word processing products to outfit the rest of the office. Smaller business equipment suppliers, like Jack Tramiel's Commodore Business Machines, were tremendously disadvantaged. They built products that went direct to consumer, competing on price with the post-war global order their marketplace. Commodore ran lean and these handicaps became attributes as Tramiel's business philosophy began to align with the forthcoming technological revolution.

(def welcome {:locale "Welcome" :cardinality :east :locale-content "" :locale-bg "commodore"})
(def cold-war {:locale "NYC Mainframe" :cardinality :north :locale-content "" :locale-bg "ibm"})
(def pc {:locale "Global PC" :cardinality :south  :locale-content "" :locale-bg "pet"})
(def ww2 {:locale "Lodz Tabulator" :cardinality :west  :locale-content "" :locale-bg "dehomag" :locale-puzzle {:box-1 true :box-2 false :box-3 false}})
(def direction (atom {:north nil :west ww2 :south nil :east welcome}))
(def checkboxes (atom {:box-1 false :box-2 false :box-3 false}))

;; 1 - Create the broad dispatch, which is not the data iself

(defn dispatch-screen-locale [section]
  (rf/dispatch [:screen section]))

;; 2 - Handle the dispatch by updating the data:
    ;; 1) On the initial load - initalize the data
    ;; 2) Any time the user requests a screen change - update the data

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:locale "Jack and the Machine" :cardinality nil :locale-content "" :locale-bg "jatm"
    :locale-puzzle nil :buttons {:up (:north @direction) :down (:south @direction)}}))

(rf/reg-event-db
 :screen-change
 (fn [db [_ current-screen]]
   (let [{:keys [locale cardinality locale-content locale-bg locale-puzzle]} current-screen]
     (assoc db :locale locale :cardinality cardinality :locale-content locale-content :locale-bg locale-bg
               :locale-puzzle locale-puzzle :buttons {:up (:north @direction) :down (:south @direction)}))))

(rf/reg-event-db
 :code-change
 (fn [db [_ current-code]]
   (let [{:keys [box-1 box-2 box-3]} current-code]
     (println "Current code: " current-code)
     (assoc db :box-1 box-1 :box-2 box-2 :box-3 box-3))))

;; 4 - Query the data to see if it has changed.

(rf/reg-sub
 :locale
 (fn [db _]
   (:locale db)))

(rf/reg-sub
 :cardinality
 (fn [db _]
   (:cardinality db)))

(rf/reg-sub
 :locale-content
 (fn [db _]
   (:locale-content db)))

(rf/reg-sub
 :locale-bg
 (fn [db _]
   (:locale-bg db)))

(rf/reg-sub
 :locale-puzzle
 (fn [db _]
   (:locale-puzzle db)))

(rf/reg-sub
 :buttons
 (fn [db _]
   (:buttons db)))

(rf/reg-sub
 :checkboxes
 (fn [db _]
   (:checkboxes db)))

;; 5 - Subscribe to the query of the data and create the view, that way if it is updated, we update it.

(defn update-available-state! [cardinality]
  (case cardinality
    :west (reset! direction (assoc @direction :north cold-war))
    :north (reset! direction (assoc @direction :south pc))
    nil))


(defn update-checked-state! [box-number content puzzle-solution]
  (fn [event]
    (let [user-value (-> event .-target .-checked)]
      (if user-value
        (reset! checkboxes (assoc @checkboxes box-number true))
        (reset! checkboxes (assoc @checkboxes box-number false)))
      (when (= puzzle-solution @checkboxes) (update-available-state! (:cardinality content)))
      (rf/dispatch [:code-change @checkboxes])
      (rf/dispatch [:screen-change content])

      )))

(defn check-box [cardinality]
  (let [puzzle-solution @(rf/subscribe [:locale-puzzle])
        content (cardinality @direction)]
    [:div.bg-white.flex.items-center.w-50.center.pt1
     [:div.center
     [:input {:type "checkbox" :id "box-1" :on-change (update-checked-state! :box-1 content puzzle-solution) }]
     [:input {:type "checkbox" :id "box-2" :on-change (update-checked-state! :box-2 content puzzle-solution) }]
     [:input {:type "checkbox" :id "box-3" :on-change (update-checked-state! :box-3 content puzzle-solution) }]]]))


(defn screen-locale []
  (let [current-cardinality @(rf/subscribe [:cardinality])
        current-puzzle @(rf/subscribe [:locale-puzzle])]
  [:div
   [:div.container
    [:video.videoPlayer {:src (str "vid/" @(rf/subscribe [:locale-bg]) ".webm") :type "video/webm;codecs='vp8, vorbis'"
                         :poster "TODO" :id "bgvid" :auto-play "autoplay" :loop true}
     [:source {:src (str "vid/" @(rf/subscribe [:locale-bg]) ".ogg") :type "video/ogg"}]]]
   [:div.f-headline.lh-solid.tc
    @(rf/subscribe [:locale])]
   [:p @(rf/subscribe [:locale-content])]
   (when current-puzzle
     [:div.tc.pa3.mt4.bg-black-70.mw6 {:style {:margin-left "auto" :margin-right "auto"}}
      (check-box current-cardinality)
      [:p (str current-puzzle)]])
   ]))

(defn update-screen-state! [cardinal]
  (fn []
    (when-let [content (cardinal @direction)]
      (case cardinal
        ;;:west (reset! direction (assoc @direction :north cold-war))
        :north (reset! direction (assoc @direction :south pc)) ;; THIS IS ONLY USED FOR NORTH!
        nil)
      (rf/dispatch [:screen-change content]))))

(defn screen-changer []
    [:div.w-100
     [:div.flex.justify-center
      [:div.pt2.flex.items-center
       [:div {:style {:float "left"}}
        [:button {:on-click (update-screen-state! :west)} "←"]]
       [:div {:style {:float "left"}}
        [:button
         {:on-click (update-screen-state! :north)
          :style (if (:up @(rf/subscribe [:buttons])) {:display "block"} {:display "none"})} "↑"]
        [:button
         {:on-click (update-screen-state! :south)
          :style (if (:down @(rf/subscribe [:buttons])) {:display "block"} {:display "none"})}"↓"]]
       [:div {:style {:float "left"}}
        [:button {:on-click (update-screen-state! :east)} "→"]]]]])

(defn ui []
  [:div.pt4
   [:div.vh-50
    [screen-locale]]
   [screen-changer]])

(defn ^:export run []
  (rf/dispatch-sync [:initialize])
  (reagent/render [ui]
                  (js/document.getElementById "app")))
