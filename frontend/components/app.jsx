import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, Hashrouter } from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import Homepage from './homepage/homepage_container';
import NotFoundPage from './not_found_page';
import AnimeLibrary from './animes/anime_library_container';
import AnimeShow from './animes/anime_show_container';

const App = () => (
    <div>
        <header>
            <Link to="/animes" className="header-link">
                <h1>Soggyroll</h1>
            </Link>
            {/* <Homepage /> */}
        </header>
        <br />
        <Switch>
            <Route exact path = "/" component ={Homepage}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path ="/animes/:animeId" component={AnimeShow}/>
            <Route path ="/animes" component={AnimeLibrary}/>
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />    
        </Switch>
        
    </div>
);

export default App;