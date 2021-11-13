import React, {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import {
  checkNotifications,
  newNotification,
  deleteAllNotification,
  viewNotifications
} from "./store/domains/notifications/notificationAction";
import {connect} from "react-redux";
import 'moment/locale/ru';
import moment from "moment";


type Props = {
  checkNotifications: () => void,
  newNotification: (text: string) => void,
  deleteAllNotification: () => void,
  viewNotifications: () => void
}

function App(props: Props) {
  const [newNotificationName, updateNewNotificationName] = useState("")

  useEffect(() => {
    moment.locale("RU")
    props.checkNotifications()

    const loopNotification = () => {
      setTimeout(() => {
        const number = Math.floor(Math.random() * (100 - 2 + 1) + 2)
        props.newNotification(`notification_${number}`)
        loopNotification()
      }, 20000)
    }

    loopNotification()
  }, [props])

  const sendNotification = () => {
    if (newNotificationName.trim() !== "") {
      props.newNotification(newNotificationName)
      updateNewNotificationName("")
    }
  }

  return (
    <div className="App">
      <Header/>

      <main>
        <div>
          <input
            type="text"
            value={newNotificationName}
            onChange={e => updateNewNotificationName(e.target.value)}
            placeholder="Введите название события"
          />

          <button id="sendNotification" onClick={sendNotification}>Отправить</button>
        </div>

        <button id="sendNotification" onClick={props.deleteAllNotification}>Удалить все уведомления</button>
        <button id="sendNotification" onClick={props.viewNotifications}>Пометить все уведомления как прочитанные</button>
      </main>
    </div>
  );
}

const mapDispatchToProps = {
  checkNotifications,
  newNotification,
  deleteAllNotification,
  viewNotifications
}

export default connect(null, mapDispatchToProps)(App);
