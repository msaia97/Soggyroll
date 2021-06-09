import { connect } from 'react-redux';
import { getAnime } from '../../actions/anime_actions';

import AnimeShow from './anime_show';

const mSTP = (state, ownProps) => {
    return {
        // animes: Object.values(state.entities.animes)
        anime: state.entities.animes[ownProps.match.params.id]
    };
}

const mDTP = dispatch => {
    return {
        getAnime: animeId => dispatch(getAnime(animeId))
    };
}

export default connect(mSTP, mDTP)(AnimeShow);