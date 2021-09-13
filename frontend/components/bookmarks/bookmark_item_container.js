import { connect } from 'react-redux';
import { getAnimes, getAnime } from '../../actions/anime_actions';
import { getEpisode } from '../../actions/episode_actions';
import BookmarkItem from './bookmark_item';

const mSTP = (state, ownProps) => {
    // console.log(Object.values(state.entities.animes));
    return {
      user: state.entities.users,
      animes: Object.values(state.entities.animes),
      bookmark: ownProps.bookmark,
    //   episodes: 
    };
}

const mDTP = dispatch => {
    return {
        getAnimes: () => dispatch(getAnimes()),
        getAnime: (animeId) => dispatch(getAnime(animeId)),
        getEpisode: (episodeId) => dispatch(getEpisode(episodeId))
    }
}

export default connect(mSTP, mDTP)(BookmarkItem);