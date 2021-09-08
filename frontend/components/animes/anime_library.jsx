import React from 'react';
import Anime from './anime_container';
// import { logout } from '../../actions/session_actions';
import Featured from '../homepage/featured';
import { getBookmarks } from '../../actions/bookmark_actions';
// import { useDispatch } from 'react-redux';


class AnimeLibrary extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let userId = Object.values(this.props.user)[0].id;
        getBookmarks(userId);
    }
    
    componentWillMount(){
        this.props.getAnimes()
        let user = Object.values(this.props.user)[0]
        getBookmarks(user.id)
    }
        
    componentDidUpdate(){
    }
    
    componentWillUnmount(){
        this.props.getAnimes()
        let user = Object.values(this.props.user)[0]
        getBookmarks(user.id)
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