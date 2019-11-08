import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { updateProfileFailure, updateProfileSuccess } from './actions';

function* updateProfile({ payload }) {
  const { name, email, ...rest } = payload.data;

  const profile = { name, email, ...(rest.oldPassword ? rest : {}) };

  const response = yield call(api.put, 'users', profile);

  if (response.data.id) {
    toast.success('Perfil atualizado com sucesso');
    yield put(updateProfileSuccess(response.data));
  } else if (response.data.errors) {
    toast.error(response.data.errors);
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
