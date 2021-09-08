import {
    RECEIVE_BOOKMARK,
    RECEIVE_ALL_BOOKMARKS,
    REMOVE_BOOKMARK
} from '../../actions/bookmark_actions';
// import RECEIVE_ALL_BOOKMARKS from '../../util/bookmark_api_util';

const bookmarksReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    const nextState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_BOOKMARK:
            // console.log(action.bookmarks)
            // debugger
            nextState[action.bookmark.id] = action.bookmark
            return nextState;
        case RECEIVE_ALL_BOOKMARKS:
            // debugger
            // console.log(action.bookmarks)
            return Object.assign({}, state, action.bookmarks.bookmarks);
        case REMOVE_BOOKMARK:
            // debugger
            
            // console.log("WEEEEE", state);
            // let bmk = Object.values(state);
            // console.log("here", bmk)
            // return  Object.assign({}, state, bmk.filter((bookmark) => {
            //     bookmark !== action.data.bookmark
            // }));
            
            delete nextState[action.data.bookmark.id];
            // console.log("WOOOOOWW", state.entities.bookmarks)
            return nextState;
        default:
            return state;
    }
}

export default bookmarksReducer;