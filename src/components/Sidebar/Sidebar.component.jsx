import React from 'react';
import { withRouter } from "react-router";

import './Sidebar.styles.scss';
import BackButtom from './Back_to_List_button.svg';

const Sidebar =  (props) => { 
        // console.log('path Name  props ' + props.Name);
    const RouterPathRedretion = () =>  {
        if (props.location.pathname === `/restaurants_bars/${props.match.params.id}`) {
            props.history.push('/restaurants_bars')
        } 
        if (props.location.pathname === '/around_vanuatu/1/1') {
            props.history.push('/around_vanuatu/1')
        }
        else if (props.location.pathname === '/around_vanuatu/1') {
            props.history.push('/around_vanuatu')
        }

        if (props.location.pathname === '/around_vanuatu/2') {
            props.history.push('/around_vanuatu')
        } 
        if (props.location.pathname === `/around_vanuatu/3/${props.match.params.id}`) {
            props.history.push('/around_vanuatu/3')
        } 

        if (props.location.pathname === '/around_vanuatu/3') {
            props.history.push('/around_vanuatu')
        } 

        if (props.location.pathname === '/around_vanuatu/4') {
            props.history.push('/around_vanuatu')
        } 
        if (props.location.pathname === `/holiday_inn_resort_vanuatu/${props.match.params.id}`) {
            props.history.push('/holiday_inn_resort_vanuatu')
        } 
        if (props.location.pathname === '/holiday_inn_resort_vanuatu/1/0') {
            console.log(props.location.pathname)
            props.history.push(`/holiday_inn_resort_vanuatu/1`)
        } 
  



        // props.history.push(`${props.goBackList}`)
     
     
      //  console.log(props.location.pathname)



    }
    const BACK_TO_LIST  = () => {
        if (props.location.pathname === '/restaurants_bars' ||
            props.location.pathname === '/gallery' ||
            props.location.pathname === '/around_vanuatu' ||
            props.location.pathname === '/holiday_inn_resort_vanuatu') {
            return null;
        } else  {
            return (
              
                <div className="back_to_list_menu" onClick={RouterPathRedretion} style={{zIndex: '9999'}}>
                <img src={BackButtom}  alt="" onClick={RouterPathRedretion} style={{zIndex: '9999'}} /> 
                <p>BACK TO LIST</p>
                <div className="hrBar"><hr/></div>
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
