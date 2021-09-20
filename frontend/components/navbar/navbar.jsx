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
        this.animeSearch = this.animeSearch.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }

    componentDidMount(){
        this.props.getAnimes()
        // console.log("HEYOOO", this.props.animes)
    }
    componentWillMount(){
        this.props.getAnimes()
        // console.log("HEYOOO", this.props.animes)
    }

    animeSearch(e) {
        if(e.target.value === ''){
            this.setState({
                filteredAnime: [],
                searchBar: e.targetValue.value
            })
            return;
        }

        const filteredAnime = Object.values(this.props.animes).filter(anime => (
            anime.title.toLowerCase().includes(e.target.value)
        ))

        this.setState({
            filteredAnime: filteredAnime,
            searchBar: e.target.value
        })
    }

    clearSearch(){
        this.setState({
            serachBar: '',
            filteredAnime: []
        })
    }

    render(){
        
        const searchedAnime = this.state.filteredAnime.map(anime => {
            console.log(this.state.filteredAnime)
            return (
                // /?#/animes
                <Link to={`/animes/${anime.id}`}>
                    <div>
                        <span>{anime.title}</span>
                    </div>
                </Link>
            )
        })
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
                            <li className='search-container'>
                                <form>
                                    <input className="search" type="text" 
                                        placeholder="Search..." 
                                        value={ this.state.searchBar } 
                                        onChange={ this.animeSearch } 
                                    />
                                    <button type='submit'>Search</button>
                                </form>
                                <div className="results" onClick={this.clearSearch}>
                                    {searchedAnime}
                                </div>
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
                       <ul className="nav-element">
                        <li>
                                    <Link to="/animes" > Shows</Link>
                            </li>
                        <li>
                                    <Link to={`/bookmark/${this.props.user.id}`} >Bookmarks</Link>
                            </li>
                            <li className='search-container'>
                                    <form>
                                        <input className="search" type="text" 
                                            placeholder="Search..." 
                                            value={ this.state.searchBar } 
                                            onChange={ this.animeSearch } 
                                        />
                                        <button type='submit'>Search</button>
                                    </form>
                                    <div className="results" onClick={this.clearSearch}>
                                        {searchedAnime}
                                    </div>
                            </li>
                       </ul>
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