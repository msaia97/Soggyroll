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
    console.log(state.entities.bookmarks)
  return {
      animes: Object.values(state.entities.animes),
      user: state.entities.users,
      bookmarks: state.entities.bookmarks,
  }
}

const mDTP = dispatch => {
    // console.log(createAnimeBookmark)
    // debugger
    return{
        getAnime: animeId => dispatch(getAnime(animeId)),
        getAnimes: () => dispatch(getAnimes()),
        getBookmarks: (userId) => dispatch(getBookmarks(userId)),
        getAnimeBookmark: (userId, animeId) => dispatch(getAnimeBookmark(userId, animeId)),
        createAnimeBookmark: (userId, animeId) => dispatch(createAnimeBookmark(userId, animeId)),
        deleteBookmark: (userId, bookmarkId) => dispatch(deleteBookmark(userId, bookmarkId)),
    };
}

export default connect(mSTP, mDTP)(Animes);