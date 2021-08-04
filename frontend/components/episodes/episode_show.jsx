import React from 'react';

class EpisodeShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
       
    }

    render(){
        let episodes = this.props.episodes;
        let anime = this.props.anime;
        
        return(
            <div className="video-wrapper">
                <video className="episode-vid" autoPlay  src={episodes[0].video} controls  ></video>
            </div>
        )
    }
}
export default EpisodeShow;