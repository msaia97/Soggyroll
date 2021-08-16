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
            // debugger
            const bmk = Object.values(action.bookmark);
            return Object.assign({}, state, bmk)
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