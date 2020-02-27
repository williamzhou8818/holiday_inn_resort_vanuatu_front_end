import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

/** utils */
import { SiteAPI } from '../../../utils/siteInit';

/** layout */
import PageLayout from '../../../layouts/PageLayout/PageLayout.componet';
import Sidebar from './../../Sidebar/Sidebar.component';
/**styles */
import './HolidayInnResortVanuatuSubPage.styles.scss'



const HolidayInnResortVanuatuSubPage = (props) => { 
    
    const [holidayInnResortVanuatuSub, setHolidayInnResortVanuatuSub] = useState([{
        ref_id: '',
        title: '',
        sub_title:'',
        image: '',
        body:''
    }]);

    const [sideBarLabel, setSidebarLabel] = useState('');
    
    const [holidayInnResortVanuatuCate, setHolidayInnResortVanuatuCate] = useState({
        title:''
    });

    /** Fetch Data From Api */
    useEffect(() => { 
        axios.get(`${SiteAPI.rootURI}api/navs`)
             .then(res => { 
                setSidebarLabel(res.data[0].title);
             }).catch(err => {console.log(err)});

        // eslint-disable-next-line
    },[])

    useEffect(() => {
        axios.get(`${SiteAPI.rootURI}api/holidayinnresortvanauatusubpage`)
             .then(res => {
                let _setHolidayInnResortVanuatuSubFilter = res.data.filter(data => {
                    return data.ref_id == props.match.params.id
                    //console.log(data)
                })
                console.log(_setHolidayInnResortVanuatuSubFilter)
                setHolidayInnResortVanuatuSub(_setHolidayInnResortVanuatuSubFilter);

             })
       
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        axios.get(`${SiteAPI.rootURI}api/holidayinnresortvanauatucate`)
             .then(res => {
            
                setHolidayInnResortVanuatuCate(res.data[props.match.params.id-1]);

             }) 
           
       
        // eslint-disable-next-line
    }, [])

    return (
        <>
         <PageLayout>
          <div className="page_layout_sidebar">
              <Sidebar sideBarLabel={sideBarLabel}  style={holiday_inn_resort_sidebar} MainPath={`/holiday_inn_resort_vanuatu`}/>
          </div>
          <div className="!#">
                <div className="events_header_warper" >
                        <div className="events_header_title">{holidayInnResortVanuatuCate.title}</div>
                                <div className="event_ctr_bar_up">
                                    <div className="arrow_up">
                                    </div>
                                </div>
                        
                                <div className="retail_service_wraper">
              
                                            { holidayInnResortVanuatuSub.map((res,index) => { 
                                                let key= index + Math.random(10) ;
                                                // console.log(key)
                                                return (
                                                   
                                                        <div className="retail_service_list_view" key={key}>
                                                            <div  className="retail_service_img">
                                                                <img src={`${SiteAPI.imgStroge}${res.image}`} alt="" width="100%" height="100%"/>
                                                            </div>
                                                            <Link to={`/holiday_inn_resort_vanuatu/${res.ref_id}/${index}`}  className="retail_service_title">
                                                                    <p className="link_style">
                                                                        <strong>{res.title}</strong> <br/>
                                                                        {res.sub_title}
                                                                    </p>
                                                            </Link>
                                                        </div>
                                                   

                                                )
                                                })
                                                
                                            }
                                    
                                </div>
                                                    

                   

                       

                    
                        <div className="event_ctr_bar_up">
                                    <div className="arrow_down" >
                                    </div>
                        </div>

               </div>
           </div>
         </PageLayout>
        </>
    )

};
/** exporting to Sidebar styles */
const holiday_inn_resort_sidebar = {
    position: 'absolute',
    right: '310px',
    top:'-40px',
    width: '1000px',
    
}

export default HolidayInnResortVanuatuSubPage;

{/* <div className="retail_service_wraper">
              
{ holidayInnResortVanuatuSub.map(res => { 
     return (
         <PageLayout>
          <div className="page_layout_sidebar">
              <Sidebar sideBarLabel={sideBarLabel}  />
          </div>
           <div className="retail_service_list_view">
               <div  className="retail_service_img">
                  <img src={`${SiteAPI.imgStroge}${res.image}`} alt="" width="100%" height="100%"/>
                </div>
                <div    className="retail_service_title">
                        <p>
                            <strong>{res.title}</strong> <br/>
                            {res.sub_title}
                        </p>
                </div >
            </div>
         </PageLayout>

     )
  })
    
}

</div> */}