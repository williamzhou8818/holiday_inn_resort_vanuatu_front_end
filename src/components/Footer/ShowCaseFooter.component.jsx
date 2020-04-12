import React from 'react';
import {Link} from 'react-router-dom';
import './ShowCaseFooter.styles.scss';


// Footer will get css elemetem from api 
// it wll allow to change 
//  "background color" or "" 
// setup on Voyaer laraver


export default () => { 
    return (
        <Link to="/holiday_inn_resort_vanuatu">
             <div className="showcase_footer_wraper">
                <p>TOUCH SCREEN TO BEGIN</p>
            </div>
        </Link>
  
    )

}