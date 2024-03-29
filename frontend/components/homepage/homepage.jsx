import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel';
import Article from './articles';
import Featured from './featured_container';


const Homepage = ({ currentUser, logout }) => {
  if(currentUser.id !== undefined){
    return(
      <div className="homepage">
        <div className="home-left">
          <Carousel />
          <Article />
        </div>
        <div className="home-right">
          <Featured />
        </div>
      </div>
    )
  
  }else{
    return(
      <nav className="login-signup">
   <Link to="/login">Please Login</Link>
     &nbsp;or&nbsp;
       <Link to="/signup">Sign up!</Link>
   </nav>
    )
  }
  // const sessionLinks = () => (
  //   <nav className="login-signup">
  //     <Link to="/login">Please Login</Link>
  //     &nbsp;or&nbsp;
  //     <Link to="/signup">Sign up!</Link>
  //   </nav>
  // );
  // const personalHomepage = () => {
  //  return (
  //    <div className="anime-homepage">
  //       <hgroup className="header-group">
  //         {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
  //         <button className="header-button" onClick={logout}>Log Out</button>
  //       </hgroup>
  //       {/* <Link to="/shows">Show Library</Link> */}
  //       <AnimeLibrary />
  //   </div>
  //  )};

  // return currentUser ? personalHomepage() : sessionLinks();
};


export default Homepage;