import React from 'react';
import { Link } from 'react-router-dom';
import { getBookmarks } from '../../actions/bookmark_actions';
import BookmarkItem from './bookmark_item_container';

class BookmarkList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        // console.log(user)
        let user = Object.values(this.props.user)[0]
        getBookmarks(user.id)
        let bookmarks = Object.values(this.props.bookmarks);
        
            bookmarks.forEach(bookmark => {
                this.props.fetchEpisodes(bookmark.anime_id)
            })
        
    }
    
    componentDidMount(){
        let bookmarks = Object.values(this.props.bookmarks);
        // if(bookmarks.length > 0){
            bookmarks.forEach(bookmark => {
                this.props.fetchEpisodes(bookmark.anime_id)
            })
        // }
     
    }

    componentWillUnmount(){
        let user = Object.values(this.props.user)[0]
        getBookmarks(user.id)
    }

    render() {
        let bookmarks = Object.values(this.props.bookmarks);
        let user = this.props.user;
        // console.log(bookmarks);
        if(bookmarks.length > 0){
           
            return(
                <div>
                    <ul>
                        {bookmarks.map(bookmark => {
                            return <BookmarkItem bookmark={bookmark} />
                        })}
                    </ul>
                </div>
            )
        }else{
            return(
                <div className="no-bookmarks">
                    <p>You need to add some bookmarks</p>
                </div>
            )
        }
    }
}

export default BookmarkList;