import { connect } from 'react-redux';
import { getAnimes, getAnime } from '../../actions/anime_actions';

import BookmarkItem from './bookmark_item';

const mSTP = (state, ownProps) => {
    // console.log(Object.values(state.entities.animes));
    return {
      animes: Object.values(state.entities.animes),
      bookmark: ownProps.bookmark,
    };
}

const mDTP = dispatch => {
    return {
        getAnimes: () => dispatch(getAnimes()),
        getAnime: (animeId) => dispatch(getAnime(animeId))
    }
}

export default connect(mSTP, mDTP)(BookmarkItem);