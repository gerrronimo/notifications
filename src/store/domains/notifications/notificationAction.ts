export function checkNotifications() {
  return async function (dispatch: any) {
    dispatch({type: "CHECK_NOTIFICATIONS", payload: [{text: "notification_1", date: Date()}]})
  }
}

export function newNotification(text: string) {
  return {type: "NEW_NOTIFICATION", payload: [{text, date: Date()}]}
}

export function viewNotifications() {
  return {type: "VIEW_NOTIFICATIONS"}
}

export function deleteNotification(index: number) {
  return {type: "DELETE_NOTIFICATION", payload: index}
}

export function deleteAllNotification() {
  return {type: "DELETE_NOTIFICATIONS"}

}
