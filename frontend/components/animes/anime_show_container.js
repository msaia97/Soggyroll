import { connect } from 'react-redux';
import { getAnime, receiveAnime } from '../../actions/anime_actions';
import { getEpisodes } from "../../actions/episode_actions";

import AnimeShow from './anime_show';

const mSTP = (state, ownProps) => {
    return {
        anime: state.entities.animes[ownProps.match.params.animeId]
    };
}

const mDTP = dispatch => {
    return {
      getAnime: (animeId) => dispatch(getAnime(animeId)),
      getAnimes: () => dispatch(getAnimes()),
      getEpisodes: (animeId) => dispatch(getEpisodes(animeId)),
    };
}

export default connect(mSTP, mDTP)(AnimeShow);