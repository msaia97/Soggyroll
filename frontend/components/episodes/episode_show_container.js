import { connect } from 'react-redux';
import { getEpisode, getEpisodes } from "../../actions/episode_actions";
import { getAnime} from '../../actions/anime_actions';
import EpisodeShow from './episode_show';

const mSTP = (state, ownProps) => {
  // console.log(ownProps)
  // console.log(state.entities.episodes);
    return {
      episodes: state.entities.episodes,
      episode: state.entities.episodes[ownProps.match.params.episodeId],
      anime: state.entities.animes[ownProps.match.params.animeId],
      user: state.entities.users,
      bookmarks: state.entities.bookmarks
    };
}

const mDTP = dispatch => {
    return {
      getEpisode: (episodeId) => dispatch(getEpisode(episodeId)),
      getAnime: (animeId) => dispatch(getAnime(animeId)),
      getAnimes: () => dispatch(getAnimes()),
      getEpisodes: (animeId) => dispatch(getEpisodes(animeId)),
    };
}

export default connect(mSTP, mDTP)(EpisodeShow);