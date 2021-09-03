import React from 'react';
import { getBookmarks } from '../../actions/bookmark_actions';

class BookmarkItem extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getAnimes();
        let userId = Object.values(this.props.user)[0].id;
        getBookmarks(userId);
    }

    componentWillUnmount(){
        let userId = Object.values(this.props.user)[0].id;
        getBookmarks(userId);
    }
    
    render(){
        let animes = this.props.animes || null
        let bmk = this.props.bookmark
        console.log(animes)
        return(
            <div>
                {animes.map( (anime) => {
                    if(bmk.anime_id === anime.id){
                        return(
                            <div>
                                <div>
                                    <img src={anime.cover_photo} alt="" />
                                </div>
                                <div>
                                    <li>{anime.title}</li>
                                    <li>{anime.description}</li>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

export default BookmarkItem;