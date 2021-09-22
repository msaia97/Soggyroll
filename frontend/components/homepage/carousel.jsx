import React from 'react';


const imgUrls = [
    "https://soggyroll-seed.s3.us-west-1.amazonaws.com/myHeroBanner.png",
    "https://soggyroll-seed.s3.us-west-1.amazonaws.com/narutoBanner.jpg",
    "https://soggyroll-seed.s3.us-west-1.amazonaws.com/opBanner.jpg",
    "https://soggyroll-seed.s3.us-west-1.amazonaws.com/titanBanner.jpg"
];

// this functional component will take in the image urls 
const ImageSlide = ({ url }) => {
    return (
        <div className="image-slide">
            <img src={url} alt="imgSlide" /> 
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
    constructor(props){
        super(props);

        this.state = {
            currentImageIndex: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.loop = this.loop.bind(this);
        this.interval = this.interval.bind(this);
    }

    loop(){
        let currIndex = this.state.currentImageIndex;
        if(currIndex < 3 ){
            this.setState({currentImageIndex: currIndex + 1})
        }else{
            this.setState({currentImageIndex: 0})
        }
    }
    
    interval(){
        let time = 4500;
        setInterval(this.loop, time)
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
        let nextIndex = index + 1;

        
        this.setState ({
            currentImageIndex: index
        });
  
    }

    componentDidMount(){
        this.interval();
    }



    render(){

        return(
            <div className="carousel">
                <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
                <div className="arrow">
                    <Arrow 
                        direction="left"
                        clickFunction={this.previousSlide}
                        glyph="&#9664;"/>
                    <Arrow 
                        direction="right"
                        clickFunction={this.nextSlide}
                        glyph="&#9654;"/>
                </div>
            </div>
        );
    };
};

export default Carousel;