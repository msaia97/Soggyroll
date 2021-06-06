import React from 'react';
import Show from './show_container';

class ShowLibrary extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props)
        // this.state = 
    }
 
    render(){
        // console.log(this.props)
        return(
            <div className="library">
                <div className="grid">
                   
                    <Show />
                </div>
            </div>
        )
    }
}

export default ShowLibrary;