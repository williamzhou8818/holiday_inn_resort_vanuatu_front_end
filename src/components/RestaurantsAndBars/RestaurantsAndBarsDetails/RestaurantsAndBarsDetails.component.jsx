import React, {useState, useEffect , Component} from 'react';
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

import PDFViewer from 'pdf-viewer-reactjs'

import { Document, Page } from 'react-pdf';


class ExamplePDFViewer extends Component{
    state = {
        numPages: null,
        pageNumber: 1,
      }
     
      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }
   
      render() {
        const { pageNumber, numPages } = this.state;
     
        return (
          <div>
            <Document
              file="http://vanuatu.jbgcore.com/storage/restaurants-bars/May2020/kKQ1w1R0INAH7k6Y33wy.pdf"
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber="1" />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
          </div>
        );
      }

        
    
}

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
        axios.get(`${SiteAPI.rootURI}api/pages/restaurants_bars`).then(res => {
            // console.log(res.data[props.match.params.id-1]);
            console.log(JSON.parse(res.data[props.match.params.id-1].menu_image));
            setRestaurantsAndBarsDetails(res.data[props.match.params.id-1]);
        })
        // eslint-disable-next-line
    }, [])
    
    return (
        <PageLayout>
            <div className="page_layout_sidebar">
               <Sidebar sideBarLabel={sideBarLabel}  Name="holiday_inn_resort_vanuatu/1" style={restaurantsAndBarsDetails_Style} />
            </div>
            <div className="restaurants_and_bars_details_contents">
                    <div className="restaurants_and_bars_details_image">
                        <img src={`${SiteAPI.imgStroge}${restaurantsAndBarsDetails.image}`} alt="Bar Details" width="100%" height="100%"/> 
                        <div className="restaurants_and_bars_details_contanter"> 
                            <h3>{restaurantsAndBarsDetails.sub_title}</h3>
                            <p dangerouslySetInnerHTML={{__html: restaurantsAndBarsDetails.body}}  />
                        </div>

                        <div style={{textAlign: 'right', padding: '20% 5%'}} >
                            <div className="location">
                                <p ><img src="https://image.flaticon.com/icons/svg/484/484167.svg" width="16" height="16" />Location: {restaurantsAndBarsDetails.location}</p>   
                            </div>
                            <div className="open_time">
                                <p ><img src="https://image.flaticon.com/icons/svg/2088/2088617.svg" width="16" height="16" />Open Hours: {restaurantsAndBarsDetails.open_hours}</p>                      
                            </div>
                            <div class="restaurants_and_bars_menu_and_icon">
                                <p><img src="https://img.icons8.com/dotty/80/000000/literature.png" alt="Bar Details" width="30px" height="30px"/></p>
                                <div onClick={handleClickOpen}>See menu</div>
                            </div>
                        </div>

                      {/* { restaurantsAndBarsDetails.menu && 
                            <div className="restaurants_and_bars_menu_and_icon">
                                <div>
                                    <img src="https://img.icons8.com/dotty/80/000000/literature.png"  alt="Bar Details" width="20px" height="20px"/>
                                </div>
                                <div onClick={handleClickOpen}>
                                    {restaurantsAndBarsDetails.menu}
                                </div>
                            </div> 
                            
                      }  */}
                          
                           
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
                       
                        <DialogContent   style={{width: '1000px', zIndex: 99999}} >

                        {/* <embed width="100%" height="1200px" data="http://vanuatu.jbgcore.com/storage/restaurants-bars/May2020/RUbXiRQUR4ACKd08VrHu.pdf" type="application/pdf"></embed> */}

                       {/* <ExamplePDFViewer */}
                       <ExamplePDFViewer/>
                        
                        </DialogContent>
                        <DialogActions>
                    
                        </DialogActions>
                    </Dialog>
                </div>
             
        </PageLayout>
    )
}

/** export to sider bar nav */
const restaurantsAndBarsDetails_Style = {
    position: 'absolute',
    right: '168px',
    top:'-30px',
    width: '1000px',
  
    
}