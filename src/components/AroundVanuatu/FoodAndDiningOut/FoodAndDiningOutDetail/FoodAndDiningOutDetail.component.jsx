import React, { useState, useEffect } from 'react';
import axios from 'axios';

/** components */
import PageLayout from './../../../../layouts/PageLayout/PageLayout.componet';
import Sidebar from './../../../Sidebar/Sidebar.component';
import { SiteAPI } from './../../../../utils/siteInit';


/** styles */
import './FoodAndDiningOutDetail.styles.scss';



export default (props) => {
    
    const [foodAndDiningOutDetail, setFoodAndDiningOutDetail] = useState({
        image:'',
        body: ''
    });

    useEffect(() => { 
        //TEMP PUT HARCODE NEED TO GET DATA FROM API
        axios.get(`${SiteAPI.rootURI}api/navs`).then(res => {
            setSidebarLabel(res.data[1].title);
        })
    // eslint-disable-next-line
}, []);


useEffect(() => { 
    axios.get(`${SiteAPI.rootURI}api/foodanddiningout`).then(res => {
        console.log(res.data[props.match.params.id-1]);
        setFoodAndDiningOutDetail(res.data[props.match.params.id-1]);
    })
    // eslint-disable-next-line
}, [])

    const [sideBarLabel, setSidebarLabel] = useState('');

    return(
        <>
            <PageLayout>
                <div className="page_layout_sidebar">
                <Sidebar sideBarLabel={sideBarLabel} style={food_and_dining_out_Style}/>
                </div>
                <div className="restaurants_and_bars_details_contents">
                    <div className="restaurants_and_bars_details_image">
                        <img src={`${SiteAPI.imgStroge}${foodAndDiningOutDetail.image}`} alt="Bar Details" width="100%" height="100%"/> 
                        <div className="details_page_card_title">
                               <p>{foodAndDiningOutDetail.title}</p> 
                            </div>
                        <div className="restaurants_and_bars_details_contanter"> 
                            <div dangerouslySetInnerHTML={{__html: foodAndDiningOutDetail.body}}  />
                        </div>
                      
                           
                    </div>
                </div>
            </PageLayout>
        </>
    )
}

/** export to sider bar nav */
const food_and_dining_out_Style = {
    position: 'absolute',
    right: '70px',
    top:'-40px',
    width: '1000px',
    
}


