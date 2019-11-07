import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { notificationsSuccess, notificationsToggleSuccess } from './actions';
import history from '~/services/history';

export function* findAll() {
  try {
    const response = yield call(api.get, 'notifications');
    const { data: notifications } = response.data;

    yield put(notificationsSuccess(notifications));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha ao buscar por notificações');
  }
}

export function* toggle({ payload }) {
  try {
    const { id } = payload;

    yield call(api.put, `notifications/${id}`);

    yield put(notificationsToggleSuccess(id));
  } catch (error) {
    toast.error('Falha ao mudar status da notificação');
  }
}

export default all([
  takeLatest('@notifications/FIND_ALL_REQUEST', findAll),
  takeLatest('@notifications/TOGGLE_REQUEST', toggle),
]);
