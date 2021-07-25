import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.user === null || this.props.user === undefined){
            return(
                <div className="nav">
                    <Link to="/" className="header-link">
                        <h1>Soggyroll</h1>
                    </Link>
                    <div className="nav-elements">
                        <ul className="nav-element">
                            <li>
                                <Link to="/animes" > Shows</Link>
                            </li>
                            <li>
                                <Link to="/signup" className="nav-link"> Sign up</Link>
                            </li>
                            <li>
                                <Link to="/login" className="nav-link">Log in</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }else{
            return(
               <div className="nav">
                    <Link to="/" className="header-link">
                        <h1>Soggyroll</h1>
                    </Link>
                   <div className="nav-elements">
                       <li>
                                <Link to="/animes" > Shows</Link>
                        </li>
                        <button className="nav-button" 
                            onClick={this.props.logout}>
                            Log Out</button>
                   </div>
               </div>
            )
        }          
    }
}

export default Navbar;