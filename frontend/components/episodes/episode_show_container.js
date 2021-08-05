import { connect } from 'react-redux';
import { getEpisode } from '../../actions/episode_actions';
import { getAnime} from '../../actions/anime_actions';
import EpisodeShow from './episode_show';

const mSTP = (state, ownProps) => {
  // console.log(ownProps)
  // console.log(Object.values(state.entities.episodes[ownProps.match.params.episodeId]));
    return {
      episode: state.entities.episodes[ownProps.match.params.episodeId],
      anime: state.entities.animes[ownProps.match.params.animeId],
    };
}

const mDTP = dispatch => {
    return {
      getEpisode: (episodeId) => dispatch(getEpisode(episodeId)),
      getAnime: (animeId) => dispatch(getAnime(animeId)),
      getAnimes: () => dispatch(getAnimes()),
    };
}

export default connect(mSTP, mDTP)(EpisodeShow);