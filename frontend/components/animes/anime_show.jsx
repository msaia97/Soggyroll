import React from 'react';
import EpisodeList from '../episodes/episode_list_container';
import { deleteBookmark, createAnimeBookmark } from '../../actions/bookmark_actions';


class AnimeShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          anime: {}, 
          cover_photo: null,
          isBookmarked: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.addToBookmarkShow = this.addToBookmarkShow.bind(this);
        this.deleteBookmarkShow = this.deleteBookmarkShow.bind(this);
    }

    componentDidMount(){
        // console.log(this.props.bookmarks)
        this.props.getAnime(this.props.match.params.animeId)
            .then(() => this.setState(this.props.anime))
        this.props.getEpisodes(this.props.match.params.animeId)
        // let bmks = 
        this.props.bookmarks.forEach(bookmark => {
            if(bookmark.anime_id === this.props.anime.id){
                // debugger
                this.setState({
                    isBookmarked: true
                })
            }
        })
    }

    componentWillUnmount(){
        // this.props.getAnimes()
    }

    addToBookmarkShow(e){
        e.preventDefault();
        let user = Object.values(this.props.user)[0]
        let anime = this.props.anime
        if(this.state.isBookmarked === false){
            createAnimeBookmark(user.id, anime.id)
            this.setState({
                isBookmarked: true
            })
        }
    }

    deleteBookmarkShow(e){
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
        // const ({ curAnime }) = this.props.anime;
        return(
                <div className="full-show">
                    <div className="anime-show-ep">
                        <EpisodeList animeId={this.props.anime.id} />
                    </div>
                    <div className="anime-show">
                        <div className="anime-show-description">
                            <img className="anime-show-img" src={this.props.anime.cover_photo} />
                            <ul>
                                <li>{this.props.anime.title}</li>
                                <br />
                                <li>{this.props.anime.description}</li>
                                <div className="bookmark-button-container-show">
                                    <button className={this.state.isBookmarked === true ? "is-bookmarked" : "not-bookmarked"} 
                                        type="button" 
                                        onClick={
                                            this.state.isBookmarked === false ? 
                                                (e) => this.addToBookmarkShow(e) :
                                                (e) => this.deleteBookmarkShow(e)
                                        }>{ this.state.isBookmarked === true ? 'Bookmarked' : 'Bookmark' }
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }
}

export default AnimeShow;