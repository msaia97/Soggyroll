import { RECEIVE_ANIME, RECEIVE_ALL_ANIMES} from '../../actions/anime_actions';

const animeReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_ANIME:
            return Object.assign({}, state, {
                [action.anime.id]: action.anime.id
            })
        case RECEIVE_ALL_ANIMES:
            return action.animes
        default:
            return state;
    }
}

export default animeReducer;