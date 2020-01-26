import authReducer from './authReducer';
import employeerReducer from './employeerReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    auth : authReducer,
    employeer : employeerReducer
})

export default allReducers;