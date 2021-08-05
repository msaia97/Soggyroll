import React from 'react';
import { Link } from 'react-router-dom';

class Featured extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
       return(
           <div className="featured">
               <div className="featured-list">
                   <ul className="featured-shows">
                       <Link to={`/animes/5`} className="show-title-link">
                        <li className="featured-anime">
                            <img src="" alt="" />
                            <p>My Hero Academia</p>
                            <p>num videos</p>
                        </li>
                       </Link>
                   </ul>
               </div> 
           </div>
       )
    }
}

export default Featured;