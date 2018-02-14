(ns multi-client-ws.core
  (:require [reagent.core :as reagent :refer [atom]]
            [multi-client-ws.websockets :as ws]))

(defonce messages (atom []))

(def chatroomName (str "default"))

(defn message-list []
  [:ul
   (for [[i message] (map-indexed vector @messages)]
     ^{:key i}
     [:li message])])

(defn message-input []
  (let [value (atom nil)]
    (fn []
      [:input.form-control
       {:type :text
        :placeholder "type in a message and press enter"
        :value @value
        :on-change #(reset! value (-> % .-target .-value))
        :on-key-down
        #(when (= (.-keyCode %) 13)
           (ws/send-transit-msg!
            {:message @value})
           (reset! value nil))}])))

           (defn chatroomName-input []
             (let [value (atom nil)]
               (fn []
                 [:input.form-control
                  {:type :text
                   :placeholder "Enter a chatroom name:"
                   :value @value
                   :on-change #(reset! value (-> % .-target .-value))
                   :on-key-down
                   #(when (= (.-keyCode %) 13)

                      (ws/make-websocket! (str "ws://" (.-host js/location) (str "/ws/" @value)) update-messages!)
                      )}])))



(defn home-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [:h2 (str "Welcome to chatroom: " chatroomName)]]]
   [:div.row
    [:div.col-sm-6
     [message-list]]]
   [:div.row
    [:div.col-sm-6
     [message-input]]]
     [:div.row
      [:div.col-sm-6
       [chatroomName-input]]]])

(defn update-messages! [{:keys [message]}]
  (swap! messages #(vec (take 10 (conj % message)))))

(defn mount-components []
  (reagent/render-component [#'home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-components))
