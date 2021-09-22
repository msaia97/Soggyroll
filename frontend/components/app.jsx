import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, Hashrouter } from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Homepage from './homepage/homepage_container';
import NotFoundPage from './not_found_page';
import AnimeLibrary from './animes/anime_library_container';
import AnimeShow from './animes/anime_show_container';
import Navbar from './navbar/navbar_container';
import EpisodeShow from './episodes/episode_show_container';
import BookmarkList from './bookmarks/bookmark_list_container';

const App = () => (
    <div>
        <header>
            <Navbar />
        </header>
        <br />
        <Switch>
            {/* <ProtectedRoute path="/" component={Navbar} /> */}
            <ProtectedRoute exact path = "/" component ={Homepage}/>
            <ProtectedRoute exact path ="/animes" component={AnimeLibrary}/>
            <ProtectedRoute exact path ="/animes/:animeId" component={AnimeShow}/>
            <ProtectedRoute exact path ="/animes/:animeId/:episodeId" component={EpisodeShow}/>
            <ProtectedRoute exact path="/bookmark/:userId" component={BookmarkList} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/404" component={NotFoundPage} />
            <Redirect to="/404" />    
        </Switch>
        
    </div>
);

export default App;