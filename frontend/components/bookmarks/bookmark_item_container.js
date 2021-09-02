import { connect } from 'react-redux';
import { getAnime } from '../../actions/anime_actions';

import BookmarkItem from './bookmark_item';

const mSTP = (state, ownProps) => {
    console.log(ownProps)
    return {
      anime: Object.values(state.entities.animes),
      bookmarks: Object.values(state.entities.bookmarks),
    };
}

const mDTP = dispatch => {
    return {
        getAnime: animeId => dispatch(getAnime(animeId))
    }
}

export default connect(mSTP, mDTP)(BookmarkItem);