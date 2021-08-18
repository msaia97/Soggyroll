import React from 'react';
import { Link } from 'react-router-dom';
import AnimeHover from './anime_hover';

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

    componentDidMount(){
        console.log(this.props.anime)
        this.props.getAnimeBookmark(Object.values(this.props.user)[0].id,
            this.props.anime.id
        )
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

    addToBookmarks(e){
        e.preventDefault();
        console.log("Look HERE add", this.state)
        // debugger
        let user = Object.values(this.props.user)[0]
        let anime = this.props.anime
        if(this.state.isBookmarked === false){
            this.props.createAnimeBookmark(user.id, anime.id)
            this.setState({
                isBookmarked: true
            })
        }
        console.log("Look HERE add^^", this.state)
    }

    deleteBookmark(e){
        // debugger
        e.preventDefault();
        let userId = Object.values(this.props.user)[0].id;
        let bookmarks = this.props.bookmarks;
        // let anime = this.props.anime;
        let bmk = Object.values(bookmarks)
        console.log(userId, bmk[1])
        this.props.deleteBookmark(userId, bmk[1].id)
            .then((userId, bookmarkId) => dispatch(removeBookmark(userId, bookmarkId)))
        // console.log(this.props.deleteBookmark(user.id, bmk[1].id))
        this.setState({
            isBookmarked: false
        })
        console.log("Look HERE delete", this.state)

    }

    render(){
        const { anime } = this.props;
        let user = Object.values(this.props.user)
        // console.log(this.state);
        if(user.length !== 0){
            return(
                <div className="anime-template">
                    <Link to={`/animes/${anime.id}`} className="show-title-link">
                        <img className="anime-img"
                            src={anime.cover_photo}
                            onMouseEnter={e => this.handleMouseEnter(e)}
                            onMouseOut={e => this.handleMouseOut(e)} />   
                        <b>{anime.title}</b>
                    </Link>
                    <div className="bookmark-button-container">
                        {/* {console.log(this.state)} */}
                        <button className={this.state.isBookmarked === false ? "is-bookmarked" : "not-bookmarked"} 
                            type="button" 
                            onClick={
                                // this.state.isBookmarked === false ? 
                                    // (e) => this.addToBookmarks(e) :
                                    (e) => this.deleteBookmark(e)
                            }>{ this.state.isBookmarked === true ? 'Bookmark' : 'Bookmarked' }
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
                            <b>{anime.title}</b>
                        </Link>
                        <AnimeHover anime={anime} isHovering={this.state.isHovering} />
                    </div>
                )
        }
   
    }
}

export default Animes;