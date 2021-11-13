import React from "react";
import moment from "moment";
import "./SimpleNotification.css";
import {connect} from "react-redux";
import {deleteNotification} from "../../store/domains/notifications/notificationAction";

type Props = {
  text: String,
  date: Date,
  index: number,
  deleteNotification: (index: number) => void
}

function SimpleNotification(props: Props) {
  return (
    <div className="simpleNotification">
      <div>
        <h5>{props.text}</h5>
        <p>{moment(props.date).fromNow()}</p>
      </div>

      <button onClick={() => props.deleteNotification(props.index)}>
        Delete
      </button>
    </div>
  )
}

export default connect(null, {deleteNotification})(SimpleNotification);