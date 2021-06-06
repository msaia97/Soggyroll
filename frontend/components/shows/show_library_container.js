import {connect} from 'react-redux';

import ShowLibrary from './show_library';

const mSTP = state => ({
    shows: state.entities.shows
})

export default connect(mSTP)(ShowLibrary);