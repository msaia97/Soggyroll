import React from 'react';
import { Link } from 'react-router-dom';
import AnimeHover from './anime_hover';
import { deleteBookmark, createAnimeBookmark } from '../../actions/bookmark_actions';

class Animes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            anime: {},
            title: '',
            description: '',
            cover_photo: null,
            isHovering: false,
            isBookmarked: false
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.addToBookmarks = this.addToBookmarks.bind(this);
        this.deleteBookmark = this.deleteBookmark.bind(this);
    }
    
    componentWillMount(){
        let { anime } = this.props || {};
        let bookmarks = this.props.bookmarks || [];
        // debugger
        // console.log("ANIME", anime)
        if(anime == undefined) return;
        bookmarks.forEach(bookmark => {
            // console.log("BOOKMARK", bookmark)
            if(bookmark.episode_id === null){
                if(anime !== undefined){
                    if(bookmark.anime_id === anime.id){
                        this.setState({
                            isBookmarked: true
                        })
                    }
                }
            }
        })    
    }

    handleMouseEnter(e){
        e.preventDefault();
        this.setState({
            isHovering: true
        })
    }

    handleMouseOut(e){
        e.preventDefault();
        this.setState({
            isHovering: false
        })
    }

    componentDidUpdate(){

    }

    addToBookmarks(e){
        e.preventDefault();
        // console.log("Look HERE add", this.state)
        // debugger
        let user = Object.values(this.props.user)[0]
        let anime = this.props.anime
        if(this.state.isBookmarked === false){
            createAnimeBookmark(user.id, anime.id)
            this.setState({
                isBookmarked: true
            })
        }
        // console.log("Look HERE add^^", this.state)
    }

    deleteBookmark(e){
        e.preventDefault();
        let anime  = this.props.anime;
        let bookmarks = this.props.bookmarks
        // debugger
        bookmarks.forEach(bookmark => {
            if(bookmark.episode_id === null){
                if(bookmark.anime_id === anime.id){
                    // this means that the bookmark belongs to this anime
                    deleteBookmark(bookmark);
                    this.setState({
                        isBookmarked: false
                    })
                }
            }
        })    
    
      
    }

    render(){
        const { anime } = this.props || {};
        if(anime == undefined) return( <div></div>);
        // console.log(this.state);
        let user = Object.values(this.props.user)
        if(user.length !== 0){
            return(
                <div className="anime-template">
                    <Link to={`/animes/${anime.id}`} className="show-title-link">
                        <img className="anime-img"
                            src={anime.cover_photo}
                            onMouseEnter={e => this.handleMouseEnter(e)}
                            onMouseOut={e => this.handleMouseOut(e)} />   
                        <b className="anime-item-title">{anime.title}</b>
                    </Link>
                    <div className="bookmark-button-container">
                        <button className={this.state.isBookmarked === true ? "is-bookmarked" : "not-bookmarked"} 
                            type="button" 
                            onClick={
                                this.state.isBookmarked === false ? 
                                    (e) => this.addToBookmarks(e) :
                                    (e) => this.deleteBookmark(e)
                            }>{ this.state.isBookmarked === true ? 'Bookmarked' : 'Bookmark' }
                        </button>
                    </div>
                    <AnimeHover anime={anime} isHovering={this.state.isHovering} />
                </div>
            )
        }else{
            return(
                    <div className="anime-template">
                        <Link to={`/animes/${anime.id}`} className="show-title-link">
                            <img className="anime-img"
                                src={anime.cover_photo}
                                onMouseEnter={e => this.handleMouseEnter(e)}
                                onMouseOut={e => this.handleMouseOut(e)} />   
                            <b className="anime-item-title" >{anime.title}</b>
                        </Link>
                        <AnimeHover anime={anime} isHovering={this.state.isHovering} />
                    </div>
                )
        }
   
    }
}

export default Animes;