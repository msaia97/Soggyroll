import { connect } from 'react-redux';
import { getAnimes , getAnime } from '../../actions/anime_actions';
import Featured from './featured';

const mSTP = (state) => {
  // console.log(Object.values(state.entities.animes));
    return {
      animes: Object.values(state.entities.animes),
      user: state.entities.users,
    };
}

const mDTP = dispatch => {
    return {
      getAnime: (animeId) => dispatch(getAnime(animeId)),
      getAnimes: () => dispatch(getAnimes()),
    };
}

export default connect(mSTP, mDTP)(Featured)