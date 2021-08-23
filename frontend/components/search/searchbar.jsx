import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            serach: "",
        }
    }

    update(field) {
        return(e) => 
            this.setState({
                [field]: e.currentTarget.value,
            });
    }
}