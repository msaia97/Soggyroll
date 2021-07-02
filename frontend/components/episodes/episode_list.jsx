import React from 'react';
import EpisodeContainer from './episode_container';

class EpisodeList extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        this.props.getEpisodes()
            .then(animeId => dispatch(getAnime(animeId)))
        console.log(this.props)
    }

    componentWillUnmount(){
        this.props.getAnimes()
    }

    render(){
        return(
            <div className="episode-list">
                <div className="episode-grid">
                    {this.props.episodes.map(episode => {
                        return <EpisodeContainer episode={episode} />
                    })}
                </div>
            </div>
        )
    }
}

export default EpisodeList;