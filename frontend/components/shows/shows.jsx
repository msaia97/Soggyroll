import React from 'react';
import { Link } from 'react-router-dom';

class Shows extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            decription: ''
        };
    }

    render(){
        return(
            <div>
                <li>{this.state.title}</li>
                <li>{this.state.description}</li>
            </div>
        )
    }
}

export default Shows;