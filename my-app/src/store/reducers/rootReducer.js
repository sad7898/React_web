import {combineReducers} from 'redux';
import {counter} from './counter.js';
import {authReducer} from './authReducer.js';

const rootReducer = combineReducers({
    counter : counter,
    auth : authReducer
})
export default rootReducer;