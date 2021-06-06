import * as APIUtil from '../util/show_api_util';

export const RECEIVE_SHOW = 'RECEIVE_SHOW';
export const RECEIVE_ALL_SHOWS = 'RECEIVE_ALL_SHOWS';
// actions
export const receiveShow = (showId) => ({
    type: RECEIVE_SHOW,
    showId
});

export const receiveAllShows = (shows) => ({
    type: RECEIVE_ALL_SHOWS,
    shows
})
//thunk action creators idk if i need them
export const getShow = (showId) => dispatch => {
    return (APIUtil.getShow(showId)
        .then((showId) => dispatch(receiveShow(showId))))
};

export const getShows = (shows) => dispatch => {
    return(APIUtil.getShows(shows)
        .then((shows) => dispatch(receiveShows(shows))))
};