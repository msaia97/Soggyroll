import {connect} from 'react-redux';
import { getAnimes } from '../../actions/anime_actions';

import AnimeLibrary from './anime_library';

const mSTP = state => {
    return({
        animes: Object.values(state.entities.animes),
        bookmarks: Object.values(state.entities.bookmarks),
        user: state.entities.users
    })
}

const mDTP = dispatch => {
    return {
        getAnimes: animes => dispatch(getAnimes(animes)),
    }
}

export default connect(mSTP, mDTP)(AnimeLibrary);