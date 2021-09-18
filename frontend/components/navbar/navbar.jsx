import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import BookmarkList from '../bookmarks/bookmark_list_container';
// import Searchbar from './searchbar_container';

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            filteredAnime: [],
            searchBar: '',
        }
    }

    animeSearch(e) {
        if(e.target.value === ''){
            this.setState({
                filteredAnime: [],
                searchBar: e.targetValue.value
            })
            return;
        }

        const filteredAnime = this.props.anime.filteredAnime(anime => {
            return(anime.title.toLowerCase().includes(e.target.value))
        })
        this.setState({
            filteredAnime: [],
            searchBar: e.target.value
        })
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
                        </ul>
                        {/* <Searchbar /> */}
                        <ul>
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
                    {/* <Searchbar /> */}
                       <li>
                                <Link to={`/bookmark/${this.props.user.id}`} >Bookmarks</Link>
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