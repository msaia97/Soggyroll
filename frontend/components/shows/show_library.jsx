class ShowLibrary extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="library">
                <div className="grid">
                    {this.props.shows.map(show => 
                        //show component
                        // <Show img_url={shows.img_url} title={shows.title}
                        //  />
                        )}
                </div>
            </div>
        )
    }
}