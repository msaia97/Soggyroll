import { connect } from 'react-redux';
import { getAnime, getAnimes } from '../../actions/anime_actions';
import { createBookmark } from "../../actions/bookmark_actions";

import Animes from './animes';

const mSTP = (state) => {
    // console.log(state.entities)
  return {
      animes: Object.values(state.entities.animes),
      user: state.entities.users
  }
}

const mDTP = dispatch => {
    return{
        getAnime: animeId => dispatch(getAnime(animeId)),
        getAnimes: () => dispatch(getAnimes()),
        createBookmark: userId => dispatch(createBookmark(userId)),
    };
}

export default connect(mSTP, mDTP)(Animes);