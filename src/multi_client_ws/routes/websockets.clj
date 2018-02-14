(ns multi-client-ws.routes.websockets
  (:require [compojure.core :refer [GET defroutes]]
            [org.httpkit.server :refer [send! with-channel on-close on-receive]]
            [taoensso.timbre :as timbre]))

(defonce channels (atom #{}))

(defonce nameToChannel {"default" (atom #{})})

(defn notify-clients [msg chatroomName]

  (timbre/info "notify, chatroom: " chatroomName)
  (timbre/info "notify, chatroom: " (nameToChannel chatroomName))
  (doseq [channel @(nameToChannel chatroomName)]
      (send! channel msg)))

(defn connect! [channel chatroomName]
  (timbre/info "channel open, chatroom: " chatroomName)
  (if (contains? nameToChannel chatroomName)
  () ; true
  (assoc nameToChannel chatroomName (atom #{})) ; false
  )
  (assoc nameToChannel chatroomName (conj (nameToChannel chatroomName) channel))
  )
  ; (swap! channels conj channel))


(defn disconnect! [channel status chatroomName]
  (timbre/info "channel closed:" status)
  (swap! (nameToChannel chatroomName) #(remove #{channel} %)))
  ; (swap! channels #(remove #{channel} %)))

(defn ws-handler [request]
  (with-channel request channel
                (connect! channel (-> request :params :chatroomName))
                (on-close channel (partial disconnect! channel (-> request :params :chatroomName)))
                (on-receive channel #(notify-clients % (-> request :params :chatroomName)))))

(defroutes websocket-routes
  (GET "/ws/:chatroomName" request (ws-handler request)))
