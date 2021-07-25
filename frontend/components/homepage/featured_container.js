import { connect } from 'react-redux';

// import { getAnimes , getAnimes } from '../../actions/anime_actions';
import Featured from './featured';

const mSTP = (state) => {
    return {
      animes: Object.values(state.entities.animes),
    };
}

const mDTP = dispatch => {
    return {
      getAnime: (animeId) => dispatch(getAnime(animeId)),
      getAnimes: () => dispatch(getAnimes()),
    };
}

export default connect(mSTP, mDTP)(Featured)