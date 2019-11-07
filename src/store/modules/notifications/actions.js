export function notificationsRequest() {
  return {
    type: '@notifications/FIND_ALL_REQUEST',
  };
}

export function notificationsSuccess(notifications) {
  return {
    type: '@notifications/FIND_ALL_SUCCESS',
    payload: { notifications },
  };
}

export function notificationsToggleRequest(id) {
  return {
    type: '@notifications/TOGGLE_REQUEST',
    payload: { id },
  };
}

export function notificationsToggleSuccess(id) {
  return {
    type: '@notifications/TOGGLE_SUCCESS',
    payload: { id },
  };
}
