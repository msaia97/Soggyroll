import React from 'react';
import { Link } from 'react-router-dom';
import EpisodeHover from './episode_hover';

class Episode extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            anime: {},
            episode: {},
            photo: '',
            video: '',
            hovering: false
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    handleMouseEnter(e){
        console.log(hello)
        e.preventDefault();
        this.setState({
            hovering: true
        })
    }

    handleMouseOut(e){
        e.preventDefault();
        this.setState({
            hovering: false
        })
    }
    componentDidMount(){
        // console.log(this.props)
    }

    render(){
        const { episode } = this.props;
        // console.log(episode)
        if(episode.video){
            return(
                <div>
                    <Link to={`/animes/${episode.video_id}/${episode.id}`}>
                        <div className="episode-template">
                            <img className="episode-photo" src={episode.photo} />
                            <p className="episode-title" >{episode.title}</p>
                        </div>
                    </Link>
                    <EpisodeHover episode={episode} hovering={this.state.hovering} />
                </div>
            )
        }else{
            return(
                <div>Nothing here</div>
            )
        }
    }
}

export default Episode;