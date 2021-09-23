import React from 'react';
import { Link } from 'react-router-dom'

const About = (props) => {
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
    let episodes = Object.values(props.episodes) || {}
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

    }

    componentDidMount(){
        let anime = this.props.anime || {};
        this.props.getEpisodes(anime.id)
        
    }

    render(){
        let episode = this.props.episode || {};
        let anime = this.props.anime || {};
        let episodes = this.props.episodes || [];

        if(anime.id !== undefined){
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
                </div>
            )
        }else{
            return( <div></div> )
        }
    }
}
export default EpisodeShow;