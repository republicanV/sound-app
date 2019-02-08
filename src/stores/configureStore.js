import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers/index';

export const history = createBrowserHistory();

const logger = createLogger();

export default function configureStore(initialState) {
    return createStore(
        rootReducer(history),
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                logger,
                thunk
            )
        )
    );
}
