import React from 'react';

class Featured extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // this.props.getAnimes();
        console.log(this.props)
    }

    render() {
        let animes = this.props.animes;
        let final = [];
        for(let i = 0; i < 6; i++) {
            final.push(animes[i]);
        }

        return(
            <div>
                <img className="splash-ad" src="" alt="" />
                {final.map(anime => {
                    return(
                        <ul>
                            <li>anime.cover_photo</li>
                            <li>anime.title</li>
                        </ul>
                    )
                })}
            </div>
        )
    }
}

export default Featured;