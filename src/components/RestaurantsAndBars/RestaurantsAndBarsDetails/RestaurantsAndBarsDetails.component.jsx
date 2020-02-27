import React, {useState, useEffect} from 'react';
import axios from 'axios';

/**components */
import PageLayout from './../../../layouts/PageLayout/PageLayout.componet';
import Sidebar from './../../Sidebar/Sidebar.component';
import {SiteAPI} from './../../../utils/siteInit';

/**styles */
import './RestaurantsAndBarsDetails.styles.scss';

/** Model  */

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';


export default (props) => { 
    
    const [restaurantsAndBarsDetails, setRestaurantsAndBarsDetails] = useState({
        image:'',
        body: '',
        menu: '',
        menu_link: '',
    });
    const [sideBarLabel, setSidebarLabel] = useState('');

    /** Init Model */
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };
    
  

    useEffect(() => { 
            //TEMP PUT HARCODE NEED TO GET DATA FROM API
            axios.get(`${SiteAPI.rootURI}api/navs`).then(res => {
                setSidebarLabel(res.data[2].title);
            })
        // eslint-disable-next-line
    }, []);


    useEffect(() => { 
        axios.get(`${SiteAPI.rootURI}api/restaurantsandbars`).then(res => {
            console.log(res.data[props.match.params.id-1]);
            setRestaurantsAndBarsDetails(res.data[props.match.params.id-1]);
        })
        // eslint-disable-next-line
    }, [])
    
    return (
        <PageLayout>
            <div className="page_layout_sidebar">
               <Sidebar sideBarLabel={sideBarLabel}  Name="holiday_inn_resort_vanuatu/1"/>
            </div>
            <div className="restaurants_and_bars_details_contents">
                    <div className="restaurants_and_bars_details_image">
                        <img src={`${SiteAPI.imgStroge}${restaurantsAndBarsDetails.image}`} alt="Bar Details" width="100%" height="100%"/> 
                        <div className="restaurants_and_bars_details_contanter"> 
                            <div dangerouslySetInnerHTML={{__html: restaurantsAndBarsDetails.body}}  />
                        </div>
                      
                      { restaurantsAndBarsDetails.menu && 
                            <div className="restaurants_and_bars_menu_and_icon">
                                <div>
                                    <img src="https://img.icons8.com/dotty/80/000000/literature.png"  alt="Bar Details" width="20px" height="20px"/>
                                </div>
                                <div onClick={handleClickOpen}>
                                    {restaurantsAndBarsDetails.menu}
                                </div>
                            </div> 
                            
                      } 
                          
                           
                    </div>
            </div>

                {/* Open Dialogs */}
                <div>
                <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        
                    >
                       
                        <DialogContent   style={{width: '1000px'}} >

                        <object width="100%" height="1200px" data="http://localhost:8000/storage/restaurants/February2020/Verandah%20a%20la%20carte%20April_supplied%20by%20Ben%20March%2019.pdf" type="application/pdf">   </object>


                        
                        </DialogContent>
                        <DialogActions>
                    
                        </DialogActions>
                    </Dialog>
                </div>
             
        </PageLayout>
    )
}