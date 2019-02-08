import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import track from './track';

export default (history) => combineReducers({
   router: connectRouter(history),
   track
});
