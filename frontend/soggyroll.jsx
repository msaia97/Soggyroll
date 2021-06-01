import React from 'react';
import ReactDOM from 'react-dom';
//components
import Root from './components/root';
// import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // const store = configureStore();
    ReactDOM.render(<Root />, root)
});