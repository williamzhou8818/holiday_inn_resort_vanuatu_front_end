import React, {useState, useEffect} from 'react';
import axios from 'axios';


/**components */
import PageLayout from './../../../../layouts/PageLayout/PageLayout.componet';
import Sidebar from './../../../Sidebar/Sidebar.component';
import { SiteAPI } from './../../../../utils/siteInit';

/**style */
import './AroundVanuatuDetailsPage.styles.scss';

/**Model */


export default (props) => {
    
    const [aroundVanuatuDetails, setAroundVanuatuDetails] = useState({
        image:'',
        body: ''
    });
    const [sideBarLabel, setSidebarLabel] = useState('');


    useEffect(() => {
        //TEMP PUT HARCODE NEED TO GET DATA FROM API
        axios.get(`${SiteAPI.rootURI}api/navs`).then(res => {
            setSidebarLabel(res.data[1].title);
        })
    // eslint-disable-next-line
    }, []);


    useEffect(() => { 
        axios.get(`${SiteAPI.rootURI}api/around_vanuatu_sublist`).then(res => {
            console.log(res.data[props.match.params.id-1]);
            setAroundVanuatuDetails(res.data[props.match.params.id-1]);
        })
        // eslint-disable-next-line
    }, [])
    
    return (
        <PageLayout>
            <div className="page_layout_sidebar">
               <Sidebar sideBarLabel={sideBarLabel}/>
            </div>
            <div className="restaurants_and_bars_details_contents">
                    <div className="restaurants_and_bars_details_image">
                            <img src={`${SiteAPI.imgStroge}${aroundVanuatuDetails.image}`} alt="Bar Details" width="100%" height="100%"/> 
                        <div className="restaurants_and_bars_details_contanter"> 
                            <div dangerouslySetInnerHTML={{__html: aroundVanuatuDetails.body}}  />
                        </div>
                      

                           
                    </div>
            </div>

        </PageLayout>
    )


}




