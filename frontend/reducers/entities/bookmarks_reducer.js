import {
    RECEIVE_BOOKMARK,
    RECEIVE_ALL_BOOKMARKS,
    REMOVE_BOOKMARK
} from '../../actions/bookmark_actions';

const bookmarksReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_BOOKMARK:
            nextState[action.bookmark.id] = action.bookmark
            return nextState;
        case RECEIVE_ALL_BOOKMARKS:
            return Object.assign({}, state, action.bookmarks.bookmarks);
        case REMOVE_BOOKMARK:
            delete nextState[action.data.bookmark.id];
            return nextState;
        default:
            return state;
    }
}

export default bookmarksReducer;