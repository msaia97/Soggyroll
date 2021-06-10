import { connect } from 'react-redux';
import { getAnime } from '../../actions/anime_actions';

import AnimeHover from './anime_hover';

const mSTP = (state, ownProps) => {
    console.log(ownProps);
    console.log(state);
    return ({
      anime: state.entities.animes[ownProps.match.params],
    //   hovering: 
    });
}

const mDTP = dispatch => {
    return({
        getAnime: animeId => dispatch(getAnime(animeId))
    })
}

export default connect(mSTP, mDTP)(AnimeHover);