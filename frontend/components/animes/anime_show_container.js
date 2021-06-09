import { connect } from 'react-redux';
import { getAnime, receiveAnime } from '../../actions/anime_actions';

import AnimeShow from './anime_show';

const mSTP = (state, ownProps) => {
    // console.log(ownProps);
    return {
        anime: state.entities.animes[ownProps.match.params.animeId]
    };
}

const mDTP = dispatch => {
    return {
        getAnime: animeId => dispatch(getAnime(animeId)),
        getAnimes: () => dispatch(getAnimes()),
    };
}

export default connect(mSTP, mDTP)(AnimeShow);