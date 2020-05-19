import React,  { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../layouts/Spinner';


/** component */
import PageLayout from './../../layouts/PageLayout/PageLayout.componet';
import Sidebar from './../Sidebar/Sidebar.component';
import { SiteAPI } from './../../utils/siteInit';

/** style */
import './HolidayInnResortVanuatu.styles.scss';

import IsLoading from './../../layouts/IsLoading/IsLoading.component';

const HolidayInnResortVanuatu =  ({  location }) => { 

    /** Init Data */
    const [holidayInnResortVanuatus, setHolidayInnResortVanuatus] = useState([{
        slug: '',
        title: '',
        image:''

    }]);
    
    const [sideBarLabel, setSidebarLabel] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => { 

        let isCleanUp = false;
        setIsLoading(true);
        if(!isCleanUp) {
            if (location.pathname === "/holiday_inn_resort_vanuatu") {
                //TEMP PUT HARCODE NEED TO GET DATA FROM API
                axios.get(`${SiteAPI.rootURI}api/sections`).then(res => {
                    setSidebarLabel(res.data[0].title);
                
                        setIsLoading(false);
                    
                });
                // ${SiteAPI.rootURI}api/holidayinnresortvanauatucate
                axios.get(`${SiteAPI.rootURI}api/pages/venue_guide_sections`)
                .then(res => { 
                    setHolidayInnResortVanuatus(res.data);
                  
                        setIsLoading(false);
                 
                })
            }
        }

        return () => {
            isCleanUp = true;
        }
        // eslint-disable-next-line
    }, []);

    // useEffect(() => {
    //     let isCleanUp = false;
    //     if(!isCleanUp) {

    //         if (location.pathname === "/holiday_inn_resort_vanuatu" ) {
    //             axios.get(`${SiteAPI.rootURI}api/holidayinnresortvanauatucate`)
    //                 .then(res => { 
    //                     setHolidayInnResortVanuatus(res.data);
    //                 })
    //         } 
    //    }
    //    return () => {
    //     isCleanUp = true;
    // }
    //     // eslint-disable-next-line
    // });


    return (
        <PageLayout>
            <div className="page_layout_sidebar">
                <Sidebar sideBarLabel={sideBarLabel} style={HolidayInnResortVanuatu_Style} />
            </div>
            <div>            
               {/* {location.pathname} */}
            
                { holidayInnResortVanuatus.map((res) => {
                        return ( 
                            <>
                            { !isLoading ? (
                                    <div className="main_card_list" key={res.slug}>
                                        <div className="main_card_image">
                                            <img src={`${SiteAPI.imgStroge}${res.image}`} alt="restaurants bars images" />
                                        </div>
                                    
                                        <div className="main_card_title">
                                        <Link to={`/holiday_inn_resort_vanuatu/${res.type}`}  className="links_styles">
                                                {res.title} 
                                        </Link>
                                        </div>
                                    </div>
                                ) : (<Spinner /> )
                             } 
                            </>
                       
                        )
                     })
    
                   }
               
               

           
           </div>

            
        </PageLayout>
    )
};


/** export to sider bar nav */
const HolidayInnResortVanuatu_Style = {
    position: 'absolute',
    right: '100px',
    textAlign: 'center',
    top:'-34px',
    fontWeight: 700,
    width: '1200px',
  
    
}

export default  withRouter(HolidayInnResortVanuatu);