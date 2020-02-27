import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

/** components */
import PageLayout from './../../layouts/PageLayout/PageLayout.componet';
import Sidebar from './../Sidebar/Sidebar.component';
import {SiteAPI} from './../../utils/siteInit'; 

/** styles */
import './Gallery.styles.scss';


 const Gallery = (props) => { 

    /**Data init */
    const [gallary, setGallary] = useState([{
        title:'',
        gallery_images:`http://localhost:8000/storage/gallery/February2020/bKRFchffRN2JrbRgqsrx.jpg`
    }]);

    const [imageDisplay, setImageDisplay] = useState({
         title: ``,
         gallery_images: ``
    })

    const [sideBarLabel, setSidebarLabel] = useState('');

    const ShowBigImage = (index) => { 
        setImageDisplay(gallary[index]);
    }


    //** HTTP */
    useEffect(()=> { 
        let isCleanUp = false;
        if(!isCleanUp) {
            if(props.location.pathname === '/gallery') {
                axios.get(`${SiteAPI.rootURI}api/gallery`).then(res => {
                    setGallary(res.data);
                })
            }
    
        }
        return () => { 
            isCleanUp = true;
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        let isCleanUp = false;
        // console.log('asbkdkf lsl', props.location.pathname)
        if (!isCleanUp) {
            if (props.location.pathname === '/gallery') {
                axios.get(`${SiteAPI.rootURI}api/navs`).then(res => {
                    setSidebarLabel(res.data[3].title);
                })
            }
        }

        return () => { 
            isCleanUp = true;
        };
        // eslint-disable-next-line
    },[]);


    return (
        <PageLayout>
            <div className="page_layout_sidebar">
                <Sidebar sideBarLabel={sideBarLabel}  style={Gallery_Style}/>
            </div>
            <div> 
                {  imageDisplay.gallery_images ?  ( <div className="gallary_main_dispaly">
                        <img src={`${SiteAPI.imgStroge}${imageDisplay.gallery_images}`} alt="" width="100%" />
                        <p>{imageDisplay.title}</p>
                    </div> ) : (
                        <div className="gallary_main_dispaly">
                            <img src={`${SiteAPI.imgStroge}${gallary[0].gallery_images}`} alt="" width="100%" />
                            <p>{gallary[0].title}</p>
                        </div>
                    )
                    
                }

           
                <div className="gallary_grid_layout">
                    { gallary.map((gallary, index) => { 
                        return (
                            <div key={gallary.id+'c%'}>
                              <img
                                src={`${SiteAPI.imgStroge}${gallary.gallery_images}`} 
                                alt="" width="100%" 
                                onClick={() => ShowBigImage(index)}
                               />
                            </div>
                        )
                        
                      })
 
                    }

                </div>
                
            </div>


        </PageLayout>
    )
};

/** export to sider bar nav */
const Gallery_Style = {
        position: 'absolute',
        right: '-200px',
        top:'-33px',
        width: '1000px',
        
}

export default  withRouter(Gallery);