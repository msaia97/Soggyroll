import React from 'react';
import ReactDOM from 'react-dom';
//components
import Root from './components/root';
import configureStore from './store/store';
import { getEpisode } from './actions/episode_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.getEpisode = getEpisode;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root)
});