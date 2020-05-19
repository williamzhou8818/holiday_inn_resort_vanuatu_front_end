import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { SiteAPI } from './../../../utils/siteInit';

/**styles */
import './RetailAndService.styles.scss';

export default () => { 

    const [retailAndService, setRetailAndService] = useState([{
        id:'',
        title: '',
        sub_title:'',
        image:'' ,
        slug:'',
        body: '' 
    }]);

    useEffect(() => { 
            //${SiteAPI.rootURI}api/retailandservices
        axios.get(`${SiteAPI.rootURI}api/pages/retail_and_services`)
             .then(res => { 
                 console.log(res.data);
                 setRetailAndService(res.data);
             })
             .catch(err => console.log(err));

        // eslint-disable-next-line
    }, []);

    return (
        <div className="retail_service_wraper">
              
                        { retailAndService.map(res => { 
                             return (
                                 <>
                                   <div className="retail_service_list_view">
                                        <div  className="retail_service_img" style={{height:'180px'}}>
                                          <img src={`${SiteAPI.imgStroge}${res.image}`} alt="" width="100%" height="100%"/>
                                        </div>
                                        <Link to={`/around_vanuatu/3/${res.id}`} className="retail_service_title" >
                                                <p style={{lineHeight:"40px", marginTop:"40px"}}>
                                                    <strong>{res.title}</strong> <br/>
                                                    {res.sub_title}

                                                </p>
                                        </Link>

                                    </div>
                                 </>

                             )
                          })
                            
                        }
                
        </div>
    )
}