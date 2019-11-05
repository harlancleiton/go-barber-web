import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { singInSuccess, singFailure } from './actions';
import history from '~/services/history';

export function* singIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token, user } = response.data;

    if (!user.provider) {
      toast.error('Usuario não é prestador de serviço');
      return;
    }

    yield put(singInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Fala na autenticação, verifique suas credencias');
    yield put(singFailure());
  }
}

export default all([takeLatest('@auth/SING_IN_REQUEST', singIn)]);
