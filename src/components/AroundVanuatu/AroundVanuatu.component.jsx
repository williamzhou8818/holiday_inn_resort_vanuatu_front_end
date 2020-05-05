import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

/**component */
import PageLayout from './../../layouts/PageLayout/PageLayout.componet';
import Sidebar from './../Sidebar/Sidebar.component';
import {SiteAPI} from './../../utils/siteInit';

/** styles */
import './AroundVanuatu.styles.scss';


import IsLoading from './../../layouts/IsLoading/IsLoading.component';

import Loading from '../../layouts/Spinner';

 const AroundVanuatu = ({location}) => {
    
    const [aroundVanuatu,setAroundVanuatu] = useState([{
        id: null,
        slug: '',
        title: '',
        image: '',
    }]);

    const [sideBarLabel, setSidebarLabel] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    /**HTTP */

    useEffect(() => { 

        setIsLoading(true);
        
        if(location.pathname === '/around_vanuatu') {
            //temp put harcore here 
            axios.get(`${SiteAPI.rootURI}api/sections`).then(res => {
                setSidebarLabel(res.data[1].title);
                setIsLoading(false);
            })
          
        }
       // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if(location.pathname === '/around_vanuatu') {
            axios.get(`${SiteAPI.rootURI}api/around_vanuatu`).then(res => { 
                setAroundVanuatu(res.data);
                setIsLoading(false);
            })
        }
     // eslint-disable-next-line
    }, []); 

    return (
        <PageLayout>
            <div className="page_layout_sidebar">
                <Sidebar sideBarLabel={sideBarLabel} style={AroundVanuatu_Sidebar_Style} />
            </div>
            {!isLoading ? (
                    <div className="scroll_view_wraper">
                    { aroundVanuatu.map((res, index) => {
                        return (
                            index < 4 && 
                            <div className="main_card_list" key={res.id}>
                                <div className="main_card_image">
                                <img src={`${SiteAPI.imgStroge}${res.image}`} alt="around vanuatu images" />
                                </div>
                                <Link to={`/around_vanuatu/${res.id}`} >
                                    <div className="main_card_title">
                                            {res.title} 
                                    </div>
                                </Link>

                            </div>
                        )
                    })

                    }
                    
                </div>
            ) : (
                <Loading /> 
            )}

            

        </PageLayout>
    )
};

/** export to sider bar nav */
const AroundVanuatu_Sidebar_Style = {
    position: 'absolute',
    right: '10px',
    top:'-33px',
    width: '1000px',
    
}

export default  withRouter(AroundVanuatu);