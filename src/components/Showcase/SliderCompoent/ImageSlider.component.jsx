import React from 'react';

/** 
 * components
 */
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.styles.scss";
 /**
  * styles
 * /
 

/** Other */
import IMAGE_ONE from './Pic 2.png';

/**
 *  Main Function
 */
export default () =>  {
    const settings = { 
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <Slider {...settings}>
          <div className="img_slider">
            <img src={IMAGE_ONE} alt=""/> 
          </div>
          
        </Slider>
    )
}