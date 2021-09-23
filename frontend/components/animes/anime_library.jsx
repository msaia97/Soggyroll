import React from 'react';
import Anime from './anime_container';
import Featured from '../homepage/featured';
import { getBookmarks } from '../../actions/bookmark_actions';


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
        let user = Object.values(this.props.user)[0] || {};
        if(user){
            getBookmarks(user.id)

        }
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