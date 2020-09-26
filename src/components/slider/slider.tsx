import React from 'react';
import Gallereact from 'gallereact';
import { isMobile } from 'react-device-detect';
import Revealer from '../../utils/revealer';

import slide1 from '../../assets/images/slide-circle.jpg';
import slide2 from '../../assets/images/slide-hello.jpg';
import slide3 from '../../assets/images/slide-play.jpg';

function Slider () {
  return (
    <Revealer revealIn="zoomImageIn" revealOut="zoomed">
      <div className="slider">
        <Gallereact 
          images={images}
          autoPlay={true}
          duration={5000}
          displayArrow={!isMobile}
          swipe={isMobile}
          {...styles}/>
      </div>
    </Revealer>
  );
}

const styles = {
  arrowStyle: {
    borderWidth: "0px 2px 2px 0",
    width: "20px",
    height: "20px",
    margin: "50px",
  },
  dotsContainerStyle: {
    position:"absolute",
    zIndex: "5",
  }, 
  dotStyle: {
    width:"8px",
    height:"8px",
    margin:"5px"
  },
  taglineStyle: {
    background: "transparent",
    color: "white",
    textAlign: "left",
    position: "static",
    transform: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
    width: "50%",
    minWidth: "550px",
    padding: "0 15%",
  },
  titleStyle: {
    fontSize: "5rem",
    fontFamily: "Gotham",
    fontWeight: "900",
    lineHeight: "90%",
    margin: "0",
    whiteSpace: "break-spaces",
  }
}

const images = [
  {
    image: slide1,
    title: "lorem ipsum.",
    caption: "Consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu."
  }, {
    image: slide2,
    title: "lorem ipsum.",
    caption: "Nulla condimentum tortor sem, in semper nisl bibendum eu. Consectetur adipiscing elit."
  }, {
    image: slide3,
    title: "lorem ipsum.",
    caption: "In semper nisl bibendum eu. Consectetur adipiscing elit. Nulla condimentum tortor sem."
  }
]

export default Slider