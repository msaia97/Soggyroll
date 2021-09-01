import {
    RECEIVE_BOOKMARK,
    RECEIVE_ALL_BOOKMARKS,
    REMOVE_BOOKMARK
} from '../../actions/bookmark_actions';
// import RECEIVE_ALL_BOOKMARKS from '../../util/bookmark_api_util';

const bookmarksReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch(action.type){
        case RECEIVE_BOOKMARK:
            console.log(action.bookmarks)
            // debugger
            return Object.assign({}, state, action.bookmarks)
        case RECEIVE_ALL_BOOKMARKS:
            // debugger
            // console.log(action.bookmarks)
            return Object.assign({}, state, action.bookmarks.bookmarks);
        case REMOVE_BOOKMARK:
            debugger
            const nextState = Object.assign({}, state);
            delete nextState[action.bookmarks.id];
            return nextState;
        default:
            return state;
    }
}

export default bookmarksReducer;