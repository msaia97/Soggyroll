import { RECEIVE_SHOW, RECEIVE_ALL_SHOWS} from '../actions/show_actions';

const showReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_SHOW:
            return newState[action.shows.id] = action.shows
        case RECEIVE_ALL_SHOWS:
            return action.shows
        default:
            return state;
    }
}

export default showReducer;