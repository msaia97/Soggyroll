import {
    RECEIVE_BOOKMARK,
    RECEIVE_ALL_BOOKMARKS,
    REMOVE_BOOKMARK
} from '../../actions/bookmark_actions';

const boookmarksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_BOOKMARK:
            return Object.assign({}, state, action.bookmark)
        case RECEIVE_ALL_BOOKMARKS:
            return Object.assign({}, state, action.bookmarks);
        case REMOVE_BOOKMARK:
            const nextState = Object.assign({}, state);
            delete nextState[action.bookmark.id];
            return nextState;
        default:
            return state;
    }
}

export default boookmarksReducer;