import { connect } from 'react-redux';
import { getBookmark, getBookmarks, createBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import Bookmark from './bookmarks';

const mSTP = (state) => {
    return {
        bookmarks: [],
        user: state.entities.users
    }
}

const mDTP = dispatch => {
    return {
        getAnimeBookmark: (userId, animeId) => dispatch(getBookmark(userId, animeId)),
        getBookmarks: userId => dispatch(getBookmarks(userId)),
        createAnimeBookmark: (userId, animeId) => dispatch(createBookmark(userId, animeId)),
        deleteBookmark: userId => dispatch(deleteBookmark(userId))
    }
}

export default connect(mSTP, mDTP)(Bookmark);