import { connect } from 'react-redux';
import { getAnimes, getAnime } from '../../actions/anime_actions';
import { getEpisode, getEpisodes } from '../../actions/episode_actions';
import BookmarkItem from './bookmark_item';

const mSTP = (state, ownProps) => {
    return {
      user: state.entities.users,
      animes: Object.values(state.entities.animes),
      bookmark: ownProps.bookmark,
      episodes: Object.values(state.entities.episodes)
    };
}

const mDTP = dispatch => {
    return {
        getAnimes: () => dispatch(getAnimes()),
        getAnime: (animeId) => dispatch(getAnime(animeId)),
        getEpisode: (episodeId) => dispatch(getEpisode(episodeId)),
        getEpisodes: (animeId) => dispatch(getEpisodes(animeId)),
    }
}

export default connect(mSTP, mDTP)(BookmarkItem);