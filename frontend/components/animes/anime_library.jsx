import React from 'react';
import Anime from './anime_container';
// import { logout } from '../../actions/session_actions';
import Featured from '../homepage/featured';


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
            <div>
                {/* <div className="list-bar">
                    <p>Anime</p>
                    <div className="list-bar-list">
                        <ul>
                            <li>Popular</li>
                            <li>Simulcasts</li>
                            <li>Updated</li>
                        </ul>
                    </div>
                </div> */}
                <div className="library">
                    <div className="grid">
                    {this.props.animes.map(anime => {
                        return <Anime anime={anime}  />
                    })}
                    </div>
                </div>

            </div>
        )
    }
}

export default AnimeLibrary;