import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { SiteAPI } from './../../../utils/siteInit';


const FoodAndDiningOut = () => { 

    const [foodAndDiningOut, setFoodAndDiningOut] = useState([{
        id:'',
        title: '',
        sub_title:'',
        image:'' ,
        slug:'',
        body: '' 
    }]);

    useEffect(() => { 

        axios.get(`${SiteAPI.rootURI}api/foodanddiningout`)
             .then(res => { 
                 console.log(res.data);
                 setFoodAndDiningOut(res.data);
             })
             .catch(err => console.log(err));

        // eslint-disable-next-line
    }, []);
    return(
        <div className="retail_service_wraper">
              
                        { foodAndDiningOut.map(res => { 
                             return (
                                 <>
                                   <div className="retail_service_list_view">
                                       <div  className="retail_service_img">
                                          <img src={`${SiteAPI.imgStroge}${res.image}`} alt="" width="100%" height="100%"/>
                                        </div>
                                        <Link to={`/around_vanuatu/4/${res.id}`}  className="retail_service_title">
                                                <p>
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
};

export default FoodAndDiningOut;