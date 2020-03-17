import React from 'react';
import Video from './Welcome_to_HolidayInn_Resort_Vanuatu.mp4';
/**
 * componet
 */



/**
 * Import React-Video style 
 */


export default (props) => { 
    return (
        <div>
           <video width="100%"  autoPlay>
                <source src={Video} type="video/mp4" />
               
            </video>
        </div>
    )
}