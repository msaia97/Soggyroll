import React from 'react';
import { Link } from 'react-router-dom';

class Episode extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            anime: {},
            episode: {},
            photo: null,
            video: null
        }
    }

    render(){
        const { episode } = this.props;
        return(
            <div className="episode-template">
                <img src="{episode.photo}" />
                <b>{episode.title}</b>
            </div>
        )
    }
}

export default Episode;