import React, {useState} from "react";
import {ReactComponent as NotificationIcon} from "./notification.svg"
import "./NotificationCenter.css";
import SimpleNotification from "./SimpleNotification";
import {connect} from "react-redux";
import {StoreType} from "../../store/store";
import type {Notification} from "../../store/domains/notifications/notificationReducer";
import {viewNotifications} from "../../store/domains/notifications/notificationAction";

interface StateProps {
  notifications: [Notification],
  notificationCount: number
}

interface DispatchProps {
  viewNotifications: () => void
}

type Props = StateProps & DispatchProps;

function NotificationCenter(props: Props) {
  const [showNotificationCenter, toggleNotificationCenter] = useState(false)

  const openNotificationsPopup = () => {
    if (!showNotificationCenter) {
      toggleNotificationCenter(true)
      props.viewNotifications()
    } else {
      toggleNotificationCenter(false)
    }
  }

  return (
    <div id="notificationCenter">
      <div className="notificationCount" onClick={openNotificationsPopup}>
        {props.notificationCount > 0 && <p className="score">{props.notificationCount}</p>}
        <NotificationIcon className="icon"/>
      </div>

      <div style={{display: showNotificationCenter ? "block" : "none"}} className="notificationCenter">
        {props.notifications && props.notifications.slice(0, 6).map((notification, index) => (
          <SimpleNotification text={notification.text} date={notification.date} key={index} index={index}/>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state: StoreType) => ({
  notifications: state.user.notifications,
  notificationCount: state.user.newNotificationsCount
})

export default connect(mapStateToProps, {viewNotifications})(NotificationCenter);