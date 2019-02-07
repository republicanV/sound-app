import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux/src";
import track from './track';

export default combineReducers({
   track,
   routing: routerReducer
});
