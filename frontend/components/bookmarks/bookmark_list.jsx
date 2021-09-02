import React from 'react';
import { Link } from 'react-router-dom';
import { getBookmarks } from '../../actions/bookmark_actions';

class BookmarkList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        let user = Object.values(this.props.user)[0]
        // console.log(user)
        getBookmarks(user.id)
    }

    render() {
        let bookmarks = this.props.bookmarks;
        let user = this.props.user;
        console.log(user);
        if((bookmarks.length > 0) && (user.id !== undefined)){
            return(
                <div>
                    <ul>
                        {bookmarks.map(bookmark => {
                            return(
                                <li>{bookmark}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        }else{
            return(
                <div>
                    <p>Not working</p>
                </div>
            )
        }
    }
}

export default BookmarkList;