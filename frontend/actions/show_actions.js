import * as APIUtil from '../util/show_api_util';

export const RECEIVE_SHOW = 'RECEIVE_SHOW';
export const RECEIVE_ALL_SHOWS = 'RECEIVE_ALL_SHOWS';
// actions
export const receiveShow = (show) => ({
    type: RECEIVE_SHOW,
    show
});

export const receiveAllShows = (shows) => ({
    type: RECEIVE_ALL_SHOWS,
    shows
})
//thunk action creators idk if i need them
export const getShow = (showId) => dispatch => {
    return (APIUtil.getShow(showId)
        .then((show) => dispatch(receiveShow(show))))
};

export const getShows = () => dispatch => {
    return(APIUtil.getShows()
        .then((shows) => dispatch(receiveAllShows(shows))))
};