import {
  RECEIVE_BOOKMARK,
  RECEIVE_ALL_BOOKMARKS,
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
            return Object.assign({}, state, action.bookmark)
        case RECEIVE_ALL_BOOKMARKS: 
            debugger
            // console.log(action.bookmarks)
            return Object.assign({}, state, action.bookmarks)
        case REMOVE_BOOKMARK:
            debugger
            const nextState = Object.assign({}, state);
            delete nextState[action.bookmark.id]
            return nextState
        default:
            return state;
    }
}

export default bookmarkReducer;