import * as APIUtil from '../util/anime_api_util';

export const RECEIVE_ANIME = 'RECEIVE_ANIME';
export const RECEIVE_ALL_ANIMES = 'RECEIVE_ALL_ANIMES';
// actions
export const receiveAnime = (anime) => ({
    type: RECEIVE_ANIME,
    anime
});

export const receiveAllAnimes = (animes) => ({
    type: RECEIVE_ALL_ANIMES,
    animes
})
//thunk action creators idk if i need them
export const getAnime = (animeId) => dispatch => {
    return (APIUtil.getAnime(animeId)
        .then((anime) => dispatch(receiveAnime(anime))))
};

export const getAnimes = () => dispatch => {
    return(APIUtil.getAnimes()
        .then((animes) => dispatch(receiveAllAnimes(animes))))
};