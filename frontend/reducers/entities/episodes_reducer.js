import { RECEIVE_EPISODE, 
    RECEIVE_ALL_EPISODES, 
    FETCH_ALL_EPISODES
} from '../../actions/episode_actions';

const episodeReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_EPISODE:
            return Object.assign({}, state, {
                [action.episode.id]: action.episode.id
            })
        case RECEIVE_ALL_EPISODES:
            return nextState[Object.values(action.episodes)[0].id] = action.episodes.episodes
        case FETCH_ALL_EPISODES:
            return nextState[episodes] = action.episodes
        default:
            return state;
    }
}

export default episodeReducer;