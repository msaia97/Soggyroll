import React from 'react';

// this functional component will take in the image urls 
const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`
    };
    return (
        <div classNam="image-slide">
            style={styles}
        </div>
    );
};

// this is the arrows on the side of the images
const Arrow = ({ direction, clickFunction, glyph }) => (
    <div 
        className={`slide-arrow ${direction}`}
        onClick={ clickFunction }>
        {glyph}
    </div>
);

// this is the whole carousel class component 
class Carousel extends React.Component {
    render(){
        return(
            <div className="carousel">
                <Arrow 
                    direction="left"
                    clickFunction={this.previousSlide}
                    glyph="&#9664;"
                    />
                <ImageSlide url={ imgUrl } />
            </div>
        );
    };
};

export default Carousel;