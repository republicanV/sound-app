import SpotifyWebApi from 'spotify-web-api-node';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './stores/configureStore';
import * as actions from './actions';
import Callback from './components/Callback';
import Stream from './components/Stream';
import { CLIENT_ID, REDIRECT_URI } from "./constants/auth";

window.spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI
});

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={Stream} />
                <Route path="/callback" component={Callback} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
