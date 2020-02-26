import React from 'react';

/** 
 * components
 */
import MainLayOut from './../../layouts/MainLayout/MainLayout.component';
import Header from './../Header/Header.component';
import ShowCaseFooter from './../../components/Footer/ShowCaseFooter.component';

import ImageSlider from './SliderCompoent/ImageSlider.component';
import VideoAdv from './VideoCompoent/VideosAdv.component';
 /**
  * styles
  */
import './Showcase.styles.scss';


/**
 *  Main Function
 */
export default () =>  {
    return (
        <>
            <MainLayOut>
                <Header />
                <div className="showcase_wraper">
                    <VideoAdv /> 
                    <ImageSlider />
                </div>
                <ShowCaseFooter/>
            </MainLayOut>
        </>
    )
}