import React, {useState, useEffect} from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';

/** component */
import PageLayout from './../../../layouts/PageLayout/PageLayout.componet';
import Sidebar from './../../Sidebar/Sidebar.component';
import { SiteAPI } from './../../../utils/siteInit';

import AroundVanuatuEvents from './../AroundVanuatuEvents/AroundVanuatuEvents.component';
import RetailAndService from './../RetailAndServices/RetailAndService.component';
import FoodAndDiningOut from '../FoodAndDiningOut/FoodAndDiningOut.component';
/** styles */
import './AroundVanuatuSubList.styles.scss';

const AroundVanuatuSublist = (props) => {

    /**Define API Data Model */
    const [aroundVanuatuSubItemList, setAroundVanuatuSubItemList] = useState([{
        id:null,
        ref_categories_id:'',
        slug: '',
        title: '',
        image: '',
        body: ''
    }]);

    const [sideBarLabel, setSidebarLabel] = useState('');

    
    

    /** Fetch Data From Api */
    useEffect(() => { 
        axios.get(`${SiteAPI.rootURI}api/navs`)
             .then(res => { 
                setSidebarLabel(res.data[1].title);
             }).catch(err => {console.log(err)});

        // eslint-disable-next-line
    },[])

    useEffect(() => { 
            axios.get(`${SiteAPI.rootURI}api/around_vanuatu_sublist`)
                 .then(res => { 
                    //Filtering income data from database
                    
                 const _AroundVanuatuSubItemList = 
                            res.data.filter(around_vanuatu_subitem_list => around_vanuatu_subitem_list.ref_categories_id == props.match.params.id );

                   //  console.log(_welcome_to_vanuatu)
                   setAroundVanuatuSubItemList(_AroundVanuatuSubItemList);

                     
                 })
                 .catch(err => console.log(err))
        // eslint-disable-next-line
    }, []);
    
    return (<div>
            { props.match.params.id == 1 && (
                        <PageLayout>
                                <div className="page_layout_sidebar">
                                    <Sidebar sideBarLabel={sideBarLabel}  style={around_vanuatu_sublist_styles} MainPath={`/around_vanuatu`}/>
                                </div>
                                <div className="around_vanuatu_sublist__scroll_view_wraper">
                                    { aroundVanuatuSubItemList.map(res => { 
                                        return (
                                        <div className="main_card_list"  key={res.id}>
                                            <div className="main_card_image">
                                                <img src={`${SiteAPI.imgStroge}${res.image}`} alt="around_vanuatu_sublist_imgs" />
                                            </div>
                                            <Link to={`/around_vanuatu/1/${res.id}`}>
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
            }

            {/* Show Event Page Render 2 will move to anthore template*/} 

            { props.match.params.id == 2 && (
                    <PageLayout>
                        <div className="page_layout_sidebar">
                            <Sidebar sideBarLabel={sideBarLabel}  style={around_vanuatu_sublist_styles} />
                        </div>
                        <div className="!#">
                            { aroundVanuatuSubItemList.map(res => { 
                                return (

                                <>
                                    <div className="events_header_warper"  key={res.id}>
                                       <div className="events_header_title"> {res.title} </div>
                                            <div className="event_ctr_bar_up">
                                                    <div className="arrow_up">
                                                    </div>
                                            </div>
                                        <img src={`${SiteAPI.imgStroge}${res.image}`} alt="around_vanuatu_sublist_imgs" width="100%" height="100%"/>
                                    
                                         <AroundVanuatuEvents />

                                        <div className="event_ctr_bar_up">
                                                <div className="arrow_down" >
                                                </div>
                                        </div>

                                       
                                 
                                    </div>
                                  
                            
                                
                                </>
                                
                                )
                            })

                            }

                        </div>

                </PageLayout>

              )

            }


            {/* Show Event Page Render 3 */} 
            { props.match.params.id == 3 && (
                    
                    <PageLayout>
                        <div className="page_layout_sidebar">
                            <Sidebar sideBarLabel={sideBarLabel}  style={around_vanuatu_sublist_styles} />
                        </div>
                        <div className="!#">
                            { aroundVanuatuSubItemList.map(res => { 
                                return  ( 
                                    <>
                                    <div className="events_header_warper" key={res.id}>
                                        <div className="events_header_title">{res.title}</div>
                                            <div className="event_ctr_bar_up">
                                                <div className="arrow_up">
                                                </div>
                                            </div>

                                                <RetailAndService />
                                                
                                            <div className="event_ctr_bar_up">
                                                <div className="arrow_down" >
                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )
                            })
                                
                            }
                        </div>

                </PageLayout>


               )

            }


            {/* Show Event Page Render 4 */} 
            { props.match.params.id == 4 && (
                     
                 <PageLayout>
                     <div className="page_layout_sidebar">
                         <Sidebar sideBarLabel={sideBarLabel}  style={around_vanuatu_sublist_styles}  />
                     </div>
                     <div className="!#">
                         { aroundVanuatuSubItemList.map(res => { 
                             return  ( 
                                 <>
                                 <div className="events_header_warper" key={res.id}>
                                     <div className="events_header_title">{res.title}</div>
                                         <div className="event_ctr_bar_up">
                                             <div className="arrow_up">
                                             </div>
                                         </div>

                                             <FoodAndDiningOut />
                                             
                                         <div className="event_ctr_bar_up">
                                             <div className="arrow_down" >
                                             </div>
                                         </div>

                                     </div>
                                 </>
                             )
                         })
                             
                         }
                     </div>

                </PageLayout>

               )

            }


           
        </div> 
    )

};

/** exporting to Sidebar styles */
const around_vanuatu_sublist_styles = {
    position: 'absolute',
    right: '87px',
    top:'-40px',
    width: '1000px',
    
}

export default withRouter(AroundVanuatuSublist);