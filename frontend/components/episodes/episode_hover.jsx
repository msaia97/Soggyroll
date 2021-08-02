import React from 'react';

class EpisodeHover extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hovering: false,
            episode: {}
        }
    }

    render(){
        // console.log(this.props)
        if(this.props.hovering){
            return(
                <div className="episode-hover-wrapper">
                    <p className="episode-hover-header">{this.props.episode.title}</p>
                    <p className="episode-hover-description">{this.props.episode.description}</p>
                </div>
            )  
        }else{
            return null
        }
    }
}

export default EpisodeHover;