import React from 'react';
import Episode from './episode_container';

class EpisodeList extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount(){  
  
        this.props.getEpisodes()
            .then(animeId => dispatch(getAnime(animeId)))
    }
    
    componentDidUpdate(){

    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.episodes !== nextProps.episodes){
            return true;
        }else{
            return false;
        }
    }
    
    render(){
        let anime = this.props.anime;
        let episodes = this.props.episodes;

        if(episodes.length !== 0){
            return(
                <div className="episode-list">
                    <div className="episode-grid">
                        {episodes.map(ep => {
                            if(anime.id === ep.video_id){
                                return <Episode episode={ep} />
                            }
                        })}
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}

export default EpisodeList;