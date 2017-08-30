(ns jack-machine-experience.page
  (:require [om.next :as om :refer [defui]]
            [om.dom :as dom]))

(def state (atom {:fname "" :lname "" :email ""}))

(defn reader [{:keys [state] :as env} key params]
  (let [st @state]
    (if-let [[_ v] (find st key)]
      {:value v}
      {:value :not-found})))

(defn mutater [{:keys [state] :as env} key params]
  (if (= 'set-lname key)
    {:value {:keys [:lname]}
     :action #(swap! state assoc :lname (:value params))}
    {:value :not-found}))

(defui EmailForm
  static om/IQuery
  (query [this]
         [:fname :lname :email])
  Object
  (render [this]
          (let [{:keys [count]} (om/props this)]
            (dom/footer {:id "front-page-footer"}
                        (dom/span nil (dom/strong nil "Want to know more? Sign up!"))
                        (dom/span nil (get (om/props this) :source))
                        (dom/form {:action "http://google.com"
                                   :method "POST"
                                   :class "form-inline"}
                                  (dom/label nil "First Name")
                                  (dom/input #js {:data-toggle "tooltip"
                                                  :type "text"
                                                  :name "fname"
                                                  :placeholder "First Name"
                                                  :value ""
                                                  :onChange #(om/transact! this `[(set-field {:value ~(.. % -target -value)
                                                                                              :field :fname})])}
                                                  nil ;;"required"
                                                  )
                                  (dom/label nil "Last Name")
                                  (dom/input #js {:data-toggle "tooltip"
                                                  :type "text"
                                                  :name "lname"
                                                  :placeholder "Last Name"
                                                  :value ""
                                                  :onChange #(om/transact! this `[(set-field {:value ~(.. % -target -value)
                                                                                              :field :lname})])}
                                                  nil ;;"required"
                                                  )
                                  (dom/button
                                   nil ;;{:type "submit"}
                                   "Submit Form"))
                        (dom/hr nil nil)))))


;;;;;;;;;;;
;; state tied to component
;;;;;;;;;;

(defn set-value [e] (swap! state assoc :email (.. e -target -value)))

(defui Input
  Object
  (render [this]
          (dom/div nil
                   (dom/input #js {:value (:value (om/props this))
                                   :onChange set-value})
                   (dom/button #js {:onClick (fn [e] (println state))} "Atom Show-er")
                   )))


;;;;;;;;;;;;;;;;;

(def email-getter (om/factory EmailForm))

(defn render-page []
  (let [rendered-page (dom/render-to-str (email-getter {:source "Server Side"}))]
    rendered-page))
