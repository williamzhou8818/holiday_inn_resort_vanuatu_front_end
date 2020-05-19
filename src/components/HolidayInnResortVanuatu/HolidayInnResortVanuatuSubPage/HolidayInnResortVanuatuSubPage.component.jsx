import React, {useEffect, useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

/** utils */
import { SiteAPI } from '../../../utils/siteInit';

/** layout */
import PageLayout from '../../../layouts/PageLayout/PageLayout.componet';
import Sidebar from './../../Sidebar/Sidebar.component';
/**styles */
import './HolidayInnResortVanuatuSubPage.styles.scss'

import IsLoading from './../../../layouts/IsLoading/IsLoading.component';


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

    const [isLoading, setIsLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0);


    /** Fetch Data From Api */
    useEffect(() => { 
        setIsLoading(true)
        axios.get(`${SiteAPI.rootURI}api/navs`)
             .then(res => { 
                setSidebarLabel(res.data[0].title);
                setIsLoading(false)
             }).catch(err => {console.log(err)});

        // eslint-disable-next-line
    },[])

    useEffect(() => {
        setIsLoading(true); 
        if (props.match.params.id) {
            axios.get(`${SiteAPI.rootURI}api/pages/${props.match.params.id}`)
            .then(res => {

               console.log(res.data)
               // let _setHolidayInnResortVanuatuSubFilter = res.data.filter(data => {
               //     return data.ref_id == props.match.params.id
               //     //console.log(data)
               // })
               // console.log(_setHolidayInnResortVanuatuSubFilter)
               setHolidayInnResortVanuatuSub(res.data);
               setIsLoading(false)
            })
      

        }

        // eslint-disable-next-line
    }, []);

    // useEffect(() => {
    //     setIsLoading(true);
    //     axios.get(`${SiteAPI.rootURI}api/holidayinnresortvanauatucate`)
    //          .then(res => {
    //             setHolidayInnResortVanuatuCate(res.data[props.match.params.id-1]);
    //             setIsLoading(false);
    //          }) 
           
       
    //     // eslint-disable-next-line
    // }, []);

    /** onArrowUp Change show list array  */
    const onArrowUp = () => { 
        let replaceArray = [];
        let maxIndex = 5;
        let _current = 0;
        _current += 2;
        setPageCount(_current)
        console.log('current '+ _current)

        replaceArray =  holidayInnResortVanuatuSub.filter((res, index) => {
            return  res.id > (index + _current) % holidayInnResortVanuatuSub.length;
        })
        

        setHolidayInnResortVanuatuSub(replaceArray);

    }

    /** onArrowDown Change show List Item array */
    const onArrowDown = () => {
        let replaceArray = [];
        // let _current = 0;
        // _current -= 2;
        // setPageCount(_current)
        //console.log('current '+ _current)
        props.history.push("/holiday_inn_resort_vanuatu/1");

        replaceArray =  holidayInnResortVanuatuSub.filter((res, index) => {
            console.log('llajfjlsjf ' + +(holidayInnResortVanuatuSub.length - 1))
                
            return  res.id > 0 ;
            })
          setHolidayInnResortVanuatuSub(replaceArray);
        
           
        
        

    }

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
                                    <div className="arrow_up" onClick={onArrowUp} >
                                    </div>
                                </div>
                        
                                <div className="retail_service_wraper">
              
                                            { holidayInnResortVanuatuSub.map((res,index) => { 
                                                let key= index + Math.random(10) ;
                                                   
                                                // console.log(key)
                                                return (
                                                    <>
                                                       {!isLoading ? (
                                                                <div className="retail_service_list_view" key={key}>
                                                                    <div  className="retail_service_img">
                                                                        <img src={`${SiteAPI.imgStroge}${res.image}`} alt="" width="100%"/>
                                                                    </div>
                                                                    <Link to={`/holiday_inn_resort_details/${res.id}`}  className="retail_service_title">
                                                                            <p className="link_style">
                                                                                <strong>{res.title}</strong> <br/>
                                                                            </p>
                                                                    </Link>
                                                                </div>
                                                            ) : (
                                                                <IsLoading />
                                                            )

                                                       }
                                                    </>
                                                
                                                
                                                   

                                                )
                                                })
                                                
                                            }
                                    
                                </div>
                                                    

                   

                       

                    
                        <div className="event_ctr_bar_up">
                                    <div className="arrow_down"  onClick={onArrowDown}>
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
    right: '135px',
    top:'-34px',
    fontWeight: 700,
    width: '1200px',
    
}

export default withRouter(HolidayInnResortVanuatuSubPage);

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