import React from 'react';
import Show from './show_container';

class ShowLibrary extends React.Component {
    constructor(props){
        super(props);
        // console.log(this.props)
        // this.state = {
        //     shows: this.props.shows
        // }
    }

    componentDidMount(){
        this.props.getShows()
    }
 
    render(){
        console.log(this.props)
        return(
            <div className="library">
                <div className="grid">
                   {this.props.shows.map(show => {
                       return <Show show={show}/>
                   })}
                </div>
            </div>
        )
    }
}

export default ShowLibrary;