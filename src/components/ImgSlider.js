import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {

    let settings = {
        dots: true,
        infite: true,
        speed: 500,
        slidesToScroll:1,
        autoplay: true,
    }
  return (
      <Carousel {...settings}>
          <div>
              <img src='/images/slider-badging.jpg'></img>
          </div>
          <div>
              <img src='/images/slider-scale.jpg'></img>
          </div>
          <div>
              <img src='/images/slider-scales.jpg'></img>
          </div>
        <div>
              <img src='/images/slider-badag.jpg'></img>
          </div>
      </Carousel>
  );
}

export default ImgSlider


const Carousel=styled(Slider) `
margin-top: 20px;
ul li button {
    &:before {
        font-size: 10px;
        color: rgb(150,158,171);
    }
}

li.slick-active button::before {
    color: white;
}

.slick-list {
    overflow: visible;
}

button {
    z-index:1;
}

div {
    img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        border-radius:4px;
        border: 4px solid transparent;
        box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
}
`