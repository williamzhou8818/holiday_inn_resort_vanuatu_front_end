import React from 'react';
import { withRouter } from "react-router";

import './Sidebar.styles.scss';

const Sidebar =  (props) => { 

    const BACK_TO_LIST  = () => {
        if (props.location.pathname === '/restaurants_bars' ||
            props.location.pathname === '/gallery' ||
            props.location.pathname === '/around_vanuatu') {
            return null;
        } else {
            return (
                <div className="back_to_list_menu" onClick={() => props.history.push('/restaurants_bars')}>
                <img src="https://img.icons8.com/ios-glyphs/48/000000/menu.png"  alt="" /> 
                <p >BACK TO LIST</p>
               </div>
            )
        }
    }
    return (
        <>
        <BACK_TO_LIST />
        <div className="side_bar_wraper" >
            <div className="side_bar_font" style={props.style}>{props.sideBarLabel}</div>
        </div>
        </>
    )
};

export default withRouter(Sidebar);
