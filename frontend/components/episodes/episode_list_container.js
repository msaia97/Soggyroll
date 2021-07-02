import { connect } from "react-redux";
import { getEpisode, getEpisodes } from "../../actions/episode_actions";
import EpisodeList from "./episode_list";

const mSTP = (state) => {
  return {
    episodes: Object.values(state.entities.episodes),
  };
};

const mDTP = (dispatch) => {
  return {
    getAnime: (animeId) => dispatch(getAnime(animeId)),
    getEpisode: (episodeId) => dispatch(getEpisode(episodeId)),
    getEpisodes: (animeId) => dispatch(getEpisodes(animeId)),
  };
};

export default connect(mSTP, mDTP)(EpisodeList);
