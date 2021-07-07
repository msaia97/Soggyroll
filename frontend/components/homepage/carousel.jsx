import React from 'react';

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`
    }

    return (
        <div classNam="image-slide">
            style={styles}
        </div>
    )
}

class Carousel extends React.Component {
    render(){
        return(
            <div className="carousel">
                <ImageSlide url={ imgUrl } />
            </div>
        )
    }
}

export default Carousel;