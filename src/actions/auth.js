import { setTracks } from '../actions/track';
import * as actionTypes from '../constants/actionTypes';

export function auth() {

    function setMe(user) {
        return {
            type: actionTypes.ME_SET,
            user
        };
    }

    return function (dispatch) {
        dispatch(fetchMe(window.spotifyApi));
        dispatch(fetchStream(window.spotifyApi));
    };

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

}