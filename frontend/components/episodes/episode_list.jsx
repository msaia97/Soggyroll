import React from 'react';
import Episode from './episode_container';

class EpisodeList extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        // this.props.getAnime(this)
        // this.props.getEpisodes()
        //     .then(animeId => dispatch(getAnime(animeId)))
    }
    
    componentWillUnmount(){
        this.props.getAnimes()
    }
    
    render(){
        // console.log(this.props)
        // console.log(this.state)
        return(
            <div className="episode-list">
                <div className="episode-grid">
                    {this.props.episodes.map(episode => {
                        return <Episode episode={episode} />
                    })}
                </div>
            </div>
        )
    }
}

export default EpisodeList;