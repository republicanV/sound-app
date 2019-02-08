import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import track from './track';
import auth from './auth';

export default (history) => combineReducers({
   auth,
   track,
   router: connectRouter(history)
});
