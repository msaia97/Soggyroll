import { connect } from 'react-redux';
import { getEpisode, getEpisodes, fetchEpisodes } from "../../actions/episode_actions";
import BookmarkList from './bookmark_list';

const mSTP = (state) => {
    return {
      bookmarks: state.entities.bookmarks,
      user: state.entities.users,
      animes: Object.values(state.entities.animes),
    };
}

const mDTP = dispatch => {
    return {
        getEpisodes: (animeId) => dispatch(getEpisodes(animeId)),
        fetchEpisodes: (animeId) => dispatch(fetchEpisodes(animeId))
    }
}

export default connect(mSTP, mDTP)(BookmarkList);