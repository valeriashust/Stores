import {combineReducers} from "redux";
import stores from './stores';
import error from './error';
import success from './success';

export default reducer = combineReducers({stores, error, success});