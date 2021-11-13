import {combineReducers} from "redux";
import {NotificationReducer, NotificationCountReducer} from "./domains/notifications/notificationReducer";

export const rootReducer = combineReducers({
  user: combineReducers({
    notifications: NotificationReducer,
    newNotificationsCount: NotificationCountReducer
  })
})