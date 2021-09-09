import React from 'react';
import { Link } from 'react-router-dom'
import { deleteBookmark, createEpisodeBookmark } from '../../actions/bookmark_actions';

const About = (props) => {
    // console.log(props);
    return(
        <div className="about-wrapper">
            <p>About This Video:</p>
            <Link to={`/animes/${props.anime.id}`}>
                <p className="about-title">{props.anime.title}</p>  
            </Link>
            <p className="about-num"> Episode {props.episode.episode_num}</p>
            <p className="about-description">{props.episode.title}</p>
            <p>{props.episode.description}</p>
        </div>
    )
}

const EpisodeCarousel = (props) => {
    let episodes = Object.values(props.episodes)
    // console.log(episodes)
    return(
        <div>
            <ul className="episode-carousel">
                {episodes.map(episode => {
                    return(
                            <Link to={`/animes/${episode.video_id}/${episode.id}`}>
                                <li className="episode-template">
                                    <img className="episode-photo" src={episode.photo} alt="" />
                                    <p className="episode-num">Episode {episode.episode_num}</p>
                                    <p className="episode-title" >{episode.title}</p>
                                </li>
                            </Link>
                    )
                })}
            </ul>
        </div>
    )
}

class EpisodeShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBookmarked: false,
        }
        this.addToBookmark = this.addToBookmark.bind(this);
        this.deleteBookmark = this.deleteBookmark.bind(this);
    }

    componentDidMount(){
        console.log(this.props.bookmarks)
       
    }

    addToBookmark(e){
        e.preventDefault();
        let userId = Object.values(this.props.user)[0].id;
        let anime = this.props.anime
        let episode = this.props.episode;

        if(this.state.isBookmarked === false){
            createEpisodeBookmark(userId, anime.id, episode.id)
            this.setState({isBookmarked: true})
        }
    }

    deleteBookmark(e){
        e.preventDefault();
        let anime = this.props.anime
        let episode = this.props.episode;
        let bookmarks = Object.values(this.props.bookmarks);

        bookmarks.forEach(bookmark => {
            if((bookmark.anime_id === anime.id) && (bookmark.episode_id === episode.id)) {
                deleteBookmark(bookmark);
                this.setState({
                    isBookmarked: false
                })
            }
        })
    }

    render(){
        let episode = this.props.episode;
        let anime = this.props.anime;
        let episodes = this.props.episodes;
        // console.log(this.props.episodes);
        return(
            <div className="whole-ep-show">
                <div className="episode-show">
                    <p className="episode-show-header" >{anime.title}: Episode {episode.episode_num} - {episode.title}</p>
                    <div className="video-wrapper">
                        <video className="episode-vid" autoPlay  src={episode.video} controls  ></video>
                    </div>
                    <EpisodeCarousel episodes={episodes}/>
                </div>
                    <About episode={episode} anime={anime} />
                    <div>
                        <button className={this.state.isBookmarked === true ? "is-bookmarked" : "not-bookmarked"} 
                            type="button" 
                            onClick={
                                this.state.isBookmarked === false ? 
                                    (e) => this.addToBookmark(e) :
                                    (e) => this.deleteBookmark(e)
                            }>{ this.state.isBookmarked === true ? 'Bookmarked' : 'Bookmark' }
                        </button>
                    </div>
            </div>
        )
    }
}
export default EpisodeShow;