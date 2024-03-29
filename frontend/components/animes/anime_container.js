import { connect } from 'react-redux';
import { getAnime, getAnimes } from '../../actions/anime_actions';
import {
  createAnimeBookmark,
  deleteBookmark,
  getBookmarks,
  getAnimeBookmark,
} from "../../actions/bookmark_actions";

import Animes from './animes';

const mSTP = (state) => {
  return {
    animes: Object.values(state.entities.animes),
    user: state.entities.users,
    bookmarks: Object.values(state.entities.bookmarks),
  };
}

const mDTP = dispatch => {

    return{
        getAnime: animeId => dispatch(getAnime(animeId)),
        getAnimes: () => dispatch(getAnimes()),
        getBookmarks: (userId) => dispatch(getBookmarks(userId)),
        getAnimeBookmark: (userId, animeId) => dispatch(getAnimeBookmark(userId, animeId)),
        createAnimeBookmark: (userId, animeId) => dispatch(createAnimeBookmark(userId, animeId)),
        deleteBookmark: (bookmark) => dispatch(deleteBookmark(bookmark)),
    };
}

export default connect(mSTP, mDTP)(Animes);