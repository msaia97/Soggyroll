import { RECEIVE_CURRENT_USER} from '../actions/session_actions';

const usersReducer = (state = {}. action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch(action.type){
        default:
            return state;
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser;
            return newState;
    }
};

export default usersReducer;
