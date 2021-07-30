import { connect } from 'react-redux';
import { getEpisode } from '../../actions/episode_actions';
import { getAnime} from '../../actions/anime_actions';
import EpisodeShow from './episode_show';

const mSTP = (state, ownProps) => {
    return {
      episodes: Object.values(state.entities.episodes),
      anime: state.entities.animes[ownProps.match.params.animeId],
    };
}

const mDTP = dispatch => {
    return {
        getEpisode: episodeId => dispatch(getEpisode(episodeId)),
        getAnime: animeId => dispatch(getAnime(animeId))
    }
}

export default connect(mSTP, mDTP)(EpisodeShow);