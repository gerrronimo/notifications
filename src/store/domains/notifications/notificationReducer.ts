export type Notification = {
  text: String,
  date: Date
}

export const NotificationReducer = (
  state: [Notification] | [] = [],
  action: any
) => {
  switch (action.type) {
    case "CHECK_NOTIFICATIONS": {
      return action.payload;
    }

    case "NEW_NOTIFICATION": {
      return action.payload.concat(state);
    }

    case "DELETE_NOTIFICATION": {
      return state?.filter((el, index) => index !== action.payload);
    }

    case "DELETE_NOTIFICATIONS": {
      return [];
    }

    default:
      return state;
  }
}

export const NotificationCountReducer = (
  state: number = 0,
  action: any
) => {
  switch (action.type) {
    case "VIEW_NOTIFICATIONS": {
      return 0;
    }

    case "NEW_NOTIFICATION": {
      return state + 1;
    }

    default:
      return state;
  }
}
