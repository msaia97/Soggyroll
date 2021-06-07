import {connect} from 'react-redux';
import { getAnimes } from '../../actions/anime_actions';
import AnimeLibrary from './anime_library';

const mSTP = state => ({
    animes: Object.values(state.entities.animes)
})

const mDTP = dispatch => {
    return {
        getAnimes: animes => dispatch(getAnimes(animes))
    }
}

export default connect(mSTP, mDTP)(AnimeLibrary);