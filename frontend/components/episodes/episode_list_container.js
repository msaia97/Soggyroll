import { connect } from "react-redux";
import { getEpisode, getEpisodes } from "../../actions/episode_actions";
import { getAnime, getAnimes } from '../../actions/anime_actions';
import EpisodeList from "./episode_list";

const mSTP = (state, ownProps) => {
  // console.log(ownProps)
  return {
    episodes: Object.values(state.entities.episodes),
    anime: state.entities.animes[ownProps.animeId],
  };
};

const mDTP = (dispatch) => {
  return {
    getAnime: (animeId) => dispatch(getAnime(animeId)),
    getEpisode: (episodeId) => dispatch(getEpisode(episodeId)),
    getEpisodes: (animeId) => dispatch(getEpisodes(animeId)),
    getAnimes: () => dispatch(getAnimes()),
  };
};

export default connect(mSTP, mDTP)(EpisodeList);
