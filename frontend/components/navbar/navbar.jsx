import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import BookmarkList from '../bookmarks/bookmark_list_container';

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
    }
    componentWillMount(){
        this.props.getAnimes()
    }

    animeSearch(e) {
        if(e.target.value === ''){
            this.setState({
                filteredAnime: [],
                searchBar: e.target.value
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
            return (
                <Link className="result-link" to={`/animes/${anime.id}`}>
                    <div className="results-item">
                        <img className="search-item-photo" src={anime.cover_photo} alt="" />
                        <span className="">{anime.title}</span>
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
                                <Link to="/signup" className="nav-link"> SIGN UP</Link>
                            </li>
                            <li>
                                <Link to="/login" className="nav-link">LOG IN</Link>
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
                            <li >
                                <Link className="nav-anime-link" to="/animes" > Shows</Link>
                            </li>
                            <li>
                                <Link className="nav-bookmark-link" to={`/bookmark/${this.props.user.id}`} >Bookmarks</Link>
                            </li>
                       </ul>
                        <button className="nav-button" 
                            onClick={this.props.logout}>
                            LOG OUT
                        </button>
                            <li className='search-container'>
                                <form className="search">
                                    <input className="search" type="text" 
                                        placeholder="Search..." 
                                        value={ this.state.searchBar } 
                                        onChange={ this.animeSearch } 
                                    />
                                </form>
                                <div className="results-container" onClick={this.clearSearch}>
                                    {searchedAnime}
                                </div>
                            </li>
                   </div>
               </div>
            )
        }          
    }
}

export default Navbar;