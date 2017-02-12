import { combineReducers } from 'redux';

import auth from './auth';
import busMessages from './docs';
import log from './log';

export default combineReducers({
    auth,
    busMessages,
    log
});