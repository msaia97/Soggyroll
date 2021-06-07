import {combineReducers} from 'redux';

import usersReducer from './users_reducer';
import animesReducer from './animes_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    animes: animesReducer
});

export default entitiesReducer;