import { RECEIVE_EPISODE, RECEIVE_ALL_EPISODES } from '../../actions/episode_actions';

const episodeReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type){
        case RECEIVE_EPISODE:
            debugger
            return Object.assign({}, state, {
                [action.episode.id]: action.episode.id
            })
        case RECEIVE_ALL_EPISODES:
            // debugger
            // console.log(action.episodes)
            return action.episodes.episodes
        default:
            return state;
    }
}

export default episodeReducer;