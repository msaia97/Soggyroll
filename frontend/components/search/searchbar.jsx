import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            serach: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return(e) => 
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        const search = this.state.search;
        this.setState({ search: "" });
        this.props.histoty.push(`/seach/query="${search}`)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="search-section" >
                    <input 
                        type="text"
                        placeholder="Search animes"
                        value={this.state.search} 
                        onChange={this.update("search")}
                        className="search-bar"
                    />
                    <button type="submit" className="search-button">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);