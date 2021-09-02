import { connect } from 'react-redux';
// import { getAnimeBookmark, getBookmarks, createAnimeBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import BookmarkList from './bookmark_list';

const mSTP = (state) => {
    return {
        bookmarks: state.entities.bookmarks,
        user: state.entities.users
    }
}

const mDTP = dispatch => {
    return {
        // getAnimeBookmark: (userId, animeId) => dispatch(getAnimeBookmark(userId, animeId)),
        // getBookmarks: userId => dispatch(getBookmarks(userId)),
        // createAnimeBookmark: (userId, animeId) => dispatch(createAnimeBookmark(userId, animeId)),
        // deleteBookmark: userId => dispatch(deleteBookmark(userId))
    }
}

export default connect(mSTP, mDTP)(BookmarkList);