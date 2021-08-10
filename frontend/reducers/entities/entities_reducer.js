import {combineReducers} from 'redux';

import usersReducer from './users_reducer';
import animesReducer from './animes_reducer';
import episodesReducer from './episodes_reducer';
import queuesReducer from "./queues_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    animes: animesReducer,
    episodes: episodesReducer,
    queues: queuesReducer
});

export default entitiesReducer;