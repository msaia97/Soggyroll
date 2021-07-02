import React from 'react';
import Anime from './anime_container';
// import { logout } from '../../actions/session_actions';


class AnimeLibrary extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getAnimes()
        // this.props.getEpisodes()
    }
    componentWillUnmount(){
        this.props.getAnimes()
    }
 
    render(){
        return(
            <div className="library">
                <div className="grid">
                   {this.props.animes.map(anime => {
                       return <Anime anime={anime} />
                   })}
                </div>
            </div>
        )
    }
}

export default AnimeLibrary;