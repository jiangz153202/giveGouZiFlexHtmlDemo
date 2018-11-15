import { combineReducers } from 'redux';
import counter from './counter';
import palette from './palette';

export default combineReducers({
    counter,palette
})