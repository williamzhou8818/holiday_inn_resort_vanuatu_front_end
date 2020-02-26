import React,  { useState, useEffect } from 'react';
import { Link, withRouter} from 'react-router-dom';
import axios from 'axios';

/** component */
import PageLayout from './../../layouts/PageLayout/PageLayout.componet';
import Sidebar from './../Sidebar/Sidebar.component';
import {SiteAPI} from './../../utils/siteInit';

/** styles */
import './RestaurantsAndBars.styles.scss';



const RestaurantsAndBars = ({  location } ) => { 

    const [restaurantsAndBars, setRestaurantsAndBars] = useState([{
          slug: '',
          title: '',
          image: '',
          body:''
    }]);
    const [sideBarLabel, setSidebarLabel] = useState('');
    
   

    useEffect(() => { 
        if (location.pathname === "/restaurants_bars") {
            //TEMP PUT HARCODE NEED TO GET DATA FROM API
            axios.get(`${SiteAPI.rootURI}api/navs`).then(res => {
                setSidebarLabel(res.data[2].title);
            })
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => { 
        if (location.pathname === "/restaurants_bars") {
            //TEMP PUT HARCODE NEED TO GET DATA FROM API
            axios.get(`${SiteAPI.rootURI}api/restaurantsandbars`).then(res => {
            //    console.log(res.data)
               setRestaurantsAndBars(res.data);
            })
        }
        // eslint-disable-next-line
    }, []);




    return (
        <PageLayout>
            <div className="page_layout_sidebar">
                <Sidebar sideBarLabel={sideBarLabel}/>
            </div>
            <div>            
               {/* {location.pathname} */}

               { restaurantsAndBars.map((res) => {
                    return (
                        <div className="main_card_list" key={res.slug+2}>
                            <div className="main_card_image">
                                <img src={`${SiteAPI.imgStroge}${res.image}`} alt="restaurants bars images" />
                            </div>
                            <Link to={`/restaurants_bars/${res.id}`}>
                                <div className="main_card_title">
                                    {res.title} 
            
                                </div>
                            </Link>
                        </div>
                    )
                 })

               }
           </div>
        </PageLayout>
    )
};

export default withRouter(RestaurantsAndBars);