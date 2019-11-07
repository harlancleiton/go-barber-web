import produce from 'immer';

const INITIAL_STATE = {
  notifications: [],
  loading: false,
};

export default function notifications(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@notifications/FIND_ALL_REQUEST':
      case '@notifications/TOGGLE_REQUEST':
        draft.loading = true;
        break;
      case '@notifications/FIND_ALL_SUCCESS':
        draft.notifications = action.payload.notifications;
        draft.loading = false;
        break;
      case '@notifications/TOGGLE_SUCCESS':
        const data = draft.notifications;
        draft.notifications = data.map(notification =>
          notification._id === action.payload.id
            ? { ...notification, read: !notification.read }
            : notification
        );
        break;
      default:
    }
  });
}
