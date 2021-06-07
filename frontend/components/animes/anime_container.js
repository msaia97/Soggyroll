import { connect } from 'react-redux';
import { getAnime, getAnimes } from '../../actions/anime_actions';

import Animes from './animes';

const mSTP = (state) => {
  return {
      animes: Object.values(state.entities.animes),
  }
}

const mDTP = dispatch => {
    return{
        getAnime: animeId => dispatch(getAnime(animeId)),
        getAnimes: () => dispatch(getAnimes())
    };
}

export default connect(mSTP, mDTP)(Animes);