import { connect } from 'react-redux';
import { getAnimes, getAnime  } from '../../actions/anime_actions';
import { getEpisodes, getEpisode } from '../../actions/episode_actions';

import SearchBar from './searchbar';

const mSTP = (state) => {
    // console.log(state.entities.animes);
    // console.log(state.entities.episodes);
    return {
      animes: state.entities.animes,
      episodes: state.entities.episodes,
    };
}

const mDTP = dispatch => {
    return {
      getAnimes: () => dispatch(getAnimes()),
      getAnime: (animeId) => dispatch(getAnime(animeId)),
      getEpisode: (episodeId) => dispatch(getEpisode(episodeId)),
      getEpisodes: (animeId) => dispatch(getEpisodes(animeId)),
    };
}

export default connect(mSTP, mDTP)(SearchBar);