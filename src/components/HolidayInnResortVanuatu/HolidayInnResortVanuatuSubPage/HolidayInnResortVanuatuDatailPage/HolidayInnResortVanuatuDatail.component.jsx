import React, { useState, useEffect } from 'react';
import axios from 'axios';



/** component  */
import PageLayout from './../../../../layouts/PageLayout/PageLayout.componet';
import Sidebar from './../../../Sidebar/Sidebar.component';
import { SiteAPI } from './../../../../utils/siteInit';

/***style */
import './HolidayInnResortVanuatuDatail.styles.scss';

import IsLoading from './../../../../layouts/IsLoading/IsLoading.component';

export default (props) => { 
    
    const [holidayInnResortVanuatuDatail, setHolidayInnResortVanuatuDatail] = useState({
        title:'',
        image:'',
        body:''
    })
    const [sideBarLabel, setSidebarLabel] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
            //TEMP PUT HARCODE NEED TO GET DATA FROM API
        setIsLoading(true);
        axios.get(`${SiteAPI.rootURI}api/navs`).then(res => {
                setSidebarLabel(res.data[0].title);
                setIsLoading(false);
        })
        // eslint-disable-next-line
    })


    useEffect(() => { 
        setIsLoading(true);
        axios.get(`${SiteAPI.rootURI}api/holidayinnresortvanauatusubpage`).then(res => {
            console.log(res.data[props.match.params.id]);
            setHolidayInnResortVanuatuDatail(res.data[props.match.params.id]);
            setIsLoading(false);
        })
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <PageLayout>
            <div className="page_layout_sidebar">
                <Sidebar sideBarLabel={sideBarLabel} style={holiday_inn_resort_Details_sidebar}/>
            </div>
            <div className="restaurants_and_bars_details_contents">
                {isLoading ? (
                    <div className="restaurants_and_bars_details_image">
                    <img src={`${SiteAPI.imgStroge}${holidayInnResortVanuatuDatail.image}`} alt="Bar Details" width="100%" height="100%"/> 
                    <div className="details_page_card_title">
                        <p>{holidayInnResortVanuatuDatail.title}</p> 
                    </div>
                        <div className="restaurants_and_bars_details_contanter"> 
                            <div dangerouslySetInnerHTML={{__html: holidayInnResortVanuatuDatail.body}}  />
                        </div>
                    

                            
                    </div>
                 ) :(
                    <IsLoading />
                 ) 
                }
                    
            </div>

            </PageLayout>
     
         
        </>
    )
};
/** exporting to Sidebar styles */
const holiday_inn_resort_Details_sidebar = {
    position: 'absolute',
    right: '135px',
    top:'-34px',
    fontWeight: 700,
    width: '1200px',
    
}
