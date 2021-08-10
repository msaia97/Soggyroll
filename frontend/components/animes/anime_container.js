import { connect } from 'react-redux';
import { getAnime, getAnimes } from '../../actions/anime_actions';
import { createQueue } from "../../actions/queue_actions";

import Animes from './animes';

const mSTP = (state) => {
  return {
      animes: Object.values(state.entities.animes),
      user: state.entities.user
  }
}

const mDTP = dispatch => {
    return{
        getAnime: animeId => dispatch(getAnime(animeId)),
        getAnimes: () => dispatch(getAnimes()),
        createQueue: userId => dispatch(createQueue(userId)),
    };
}

export default connect(mSTP, mDTP)(Animes);