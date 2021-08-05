import React from 'react';

const About = (props) => {
    console.log(props);
    return(
        <div>
            <p>About This Video</p>
            <p>{props.anime.title}</p>
            <p> Episode {props.episode.episode_num}</p>
            <p>{props.episode.title}</p>
            <p>{props.episode.description}</p>
        </div>
    )
}

class EpisodeShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
       
    }

    render(){
        let episode = this.props.episode;
        let anime = this.props.anime;
        // console.log(episode);
        return(
            <div>
                <p className="episode-show-header" >{anime.title}: Episode {episode.episode_num} - {episode.title}</p>
                <div className="video-wrapper">
                    <video className="episode-vid" autoPlay  src={episode.video} controls  ></video>
                </div>
                <About episode={episode} anime={anime} />
            </div>
        )
    }
}
export default EpisodeShow;