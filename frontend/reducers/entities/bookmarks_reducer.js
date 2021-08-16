import {
  RECEIVE_BOOKMARK,
  RECEIVE_BOOKMARKS,
  REMOVE_BOOKMARK,
} from "../../actions/bookmark_actions";

const bookmarkReducer = (state = {}, action ) => {
    Object.freeze(state);
    // console.log('LOGGER',action);
    // debugger
    switch(action.type){
        case RECEIVE_BOOKMARK:
            debugger
            return Object.assign({}, state, {
                [action.user.id]: action.bookmarks.id
            })
        case RECEIVE_BOOKMARKS: 
            return action.bookmarks
        case REMOVE_BOOKMARK:
            nextState = Object.assign({}, state);
            delete nextState[action.bookmark.id]
            return nextState
        default:
            return state;
    }
}

export default bookmarkReducer;