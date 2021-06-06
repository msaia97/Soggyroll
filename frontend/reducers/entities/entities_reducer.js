import {combineReducers} from 'redux';

import usersReducer from './users_reducer';
import showsReducer from './shows_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    shows: showsReducer
});

export default entitiesReducer;