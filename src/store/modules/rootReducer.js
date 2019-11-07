import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import notifications from './notifications/reducer';

export default combineReducers({ auth, user, notifications });
