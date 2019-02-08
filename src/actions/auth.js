import { setTracks } from '../actions/track';
import * as actionTypes from '../constants/actionTypes';

function setMe(user) {
    return {
        type: actionTypes.ME_SET,
        user
    };
}

export function auth() {

    return function (dispatch) {
        dispatch(fetchMe(window.spotifyApi));
    };

}

function fetchMe(spotifyApi) {
    return function (dispatch) {
        spotifyApi.getMe()
            .then(function (data) {
                dispatch(setMe(data.body))
            }, function (error) {
                console.error(error);
            });
    }
}