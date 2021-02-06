import { combineReducers } from 'redux';
import auth from './auth';
import flights from './flights';

export default combineReducers({ auth, flights });
