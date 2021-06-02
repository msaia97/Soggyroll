import {LOGOUT_CURRENT_USER} from '../actions/session_actions';

const sessionReducer = (state = nullUser, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
      default:
        return state;
      case RECEIVE_CURRENT_USER:
        return { id: action.currentUser.id };
      case LOGOUT_CURRENT_USER:
        return nullUser;
    }
};

export default sessionReducer;