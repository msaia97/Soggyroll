import { connect } from 'react-redux';
// import { getAnimeBookmark, getBookmarks, createAnimeBookmark, deleteBookmark } from '../../actions/bookmark_actions';
import { getEpisode, getEpisodes, fetchEpisodes } from "../../actions/episode_actions";
import BookmarkList from './bookmark_list';

const mSTP = (state) => {
    return {
      bookmarks: state.entities.bookmarks,
      user: state.entities.users,
      animes: Object.values(state.entities.animes),
    };
}

const mDTP = dispatch => {
    return {
        // getAnimeBookmark: (userId, animeId) => dispatch(getAnimeBookmark(userId, animeId)),
        // getBookmarks: userId => dispatch(getBookmarks(userId)),
        // createAnimeBookmark: (userId, animeId) => dispatch(createAnimeBookmark(userId, animeId)),
        // deleteBookmark: userId => dispatch(deleteBookmark(userId))
        getEpisodes: (animeId) => dispatch(getEpisodes(animeId)),
        fetchEpisodes: () => dispatch()
    }
}

export default connect(mSTP, mDTP)(BookmarkList);