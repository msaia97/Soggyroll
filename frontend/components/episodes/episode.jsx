import React from 'react';
import { Link } from 'react-router-dom';

class Episode extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            anime: {},
            episode: {},
            photo: '',
            video: ''
        }
    }

    componentDidMount(){
        // console.log(this.props)
    }

    render(){
        const { episode } = this.props;
        console.log(episode)
        if(episode.video){
            return(
                <div className="episode-template">
                    <img className="episode-photo" src={episode.photo} />
                    <b className="episode-title" >{episode.title}</b>
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