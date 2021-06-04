import * as APIUtil from '../util/show_api_util';

export const RECEIVE_SHOW = 'RECEIVE_SHOW';
export const RECEIVE_ALL_SHOWS = 'RECEIVE_ALL_SHOWS';
// actions
const receiveShow = (show) => ({
    type: RECEIVE_SHOW,
    show
});

const receiveAllShows = (shows) => ({
    type: RECEIVE_ALL_SHOWS,
    shows
})
//thunk action creators idk if i need them
export const getShow = (show) => dispatch => {
    return (APIUtil.getShow(show)
        .then((show) => dispatch(receiveShow(show))))
};

export const getShows = (shows) => {
    return(APIUtil.getShows(shows)
        .then((shows) => dispatch(receiveShows(shows))))
};