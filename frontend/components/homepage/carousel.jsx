import React from 'react';
// import myHeroA from './images/mHA.png';
// import oP from './images/oP.png';

const imgUrls = [
    "https://imgur.com/s6dIV2p",
    "https://imgur.com/iuKAefi",
    "https://imgur.com/Bv1S6jy",
    "https://imgur.com/WBylaSB"
    // myHeroA,
    // oP
];

// this functional component will take in the image urls 
const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`
    };

    return (
        <div className="image-slide"
            style={styles} >
        </div>
    );
    // <img src={url} alt="imgSlide" /> 
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
    constructor(props){
        super(props);

        this.state = {
            currentImageIndex: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const resetIndex = currentImageIndex === 0;
        const index = resetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const resetIndex = currentImageIndex === lastIndex;
        const index = resetIndex ? 0 : currentImageIndex + 1;

        this.setState ({
            currentImageIndex: index
        });
    }

    render(){
        return(
            <div className="carousel">
                <Arrow 
                    direction="left"
                    clickFunction={this.previousSlide}
                    glyph="&#9664;"/>
                <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
                 <Arrow 
                    direction="right"
                    clickFunction={this.nextSlide}
                    glyph="&#9664;"/>
            </div>
        );
    };
};

export default Carousel;