import {connect} from 'react-redux';
import { getAnimes } from '../../actions/anime_actions';
// import { getBookmarks } from '../../util/bookmark_api_util';
// import { getBookmarks } from '../../actions/bookmark_actions';

import AnimeLibrary from './anime_library';

const mSTP = state => {
    // console.log(state);
    return({
        animes: Object.values(state.entities.animes),
        bookmarks: Object.values(state.entities.bookmarks),
        user: state.entities.users
    })
}

const mDTP = dispatch => {
    // debugger
    return {
        getAnimes: animes => dispatch(getAnimes(animes)),
        // getBookmarks: (userId)  => dispatch(getBookmarks(userId)),
    }
}

export default connect(mSTP, mDTP)(AnimeLibrary);