import { connect } from 'react-redux';
import { getAnime } from '../../actions/anime_actions';

import BookmarkItem from './bookmark_item';

const mSTP = (state, ownProps) => {
    return {
      anime: Object.values(state.entities.animes),
      bookmarks: Object.values(state.entities.bookmarks),
    };
}