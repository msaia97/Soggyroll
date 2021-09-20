import *  as APIUtil from '../util/episode_api_util';

export const RECEIVE_EPISODE = 'RECEIVE_EPISODE';
export const RECEIVE_ALL_EPISODES = 'RECEIVE_ALL_EPISODES';
export const FETCH_ALL_EPISODES = 'FETCH_ALL_EPISODES';

// actions
export const receiveEpisode = (episode) => {
    // console.log(episode)
    // debugger
    return({
        type: RECEIVE_EPISODE,
        episode
    })
}

export const receiveAllEpisodes = (episodes) => {
    // console.log(episodes)
    return({
        type: RECEIVE_ALL_EPISODES,
        episodes
    })
}

export const fetchAllEpisodes = (episodes) => {
    // debugger
    return({
        type: FETCH_ALL_EPISODES,
        episodes
    })
}

// thunk action creators 
export const getEpisode = (episodeId) => dispatch => {
    // debugger
    return (APIUtil.getEpisode(episodeId)
        .then((episode) => dispatch(receiveEpisode(episode))))
}

export const getEpisodes = (animeId) => dispatch => {
    return (APIUtil.getEpisodes(animeId)
        .then((episodes) => dispatch(receiveAllEpisodes(episodes))))
}

export const fetchEpisodes = (animeId)  => {
    // debugger
    return $.ajax({
      method: "GET",
      url: `/api/animes/${animeId}/episodes`,
      data: { animeId },
      success: function (episodes){
          return dispatch(fetchAllEpisodes(episodes));
      }
    });
}
