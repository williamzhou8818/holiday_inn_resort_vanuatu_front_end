import React, { useEffect, useState} from 'react';
import axios from 'axios';

import PageLayout from './../../../layouts/PageLayout/PageLayout.componet'
import Sidebar from './../../Sidebar/Sidebar.component'

import { SiteAPI } from './../../../utils/siteInit'; 
import moment from 'moment';
import './AroundVanuatuEvents.styles.scss';


const CalendarOfEvents =  () => { 
    
    /**define database model */

    const [events, setEvents] = useState([{
        event: '',
        month: '',
        location: '',
        image: null,
        event_typing_event_schedule: ''

        
    }]);

    /** HTTP API */
    useEffect(() => { 
       // ${SiteAPI.rootURI}api/events
        axios.get(`${SiteAPI.rootURI}api/pages/calendar_of_events`)
             .then(res => { 
                 //console.log(res.data)
                 setEvents(res.data)
             })
             .catch(err => console.log(err));
        
        
        // eslint-disable-next-line
    }, [])

    return (
        <PageLayout>
        <div className="page_layout_sidebar">
              <Sidebar sideBarLabel={`AROUND VANUATU`}  style={around_vanuatu_sublist_styles} MainPath={`/around_vanuatu`}/>
        </div>
 <div className="events_warper">
         <div>
             <img src={`${SiteAPI.imgStroge}${events[0].image}`} alt="Calendar Events"/>
         </div>
            <table>
                <tr>
                    <th>EVENT</th>
                    <th>MONTH</th>
                    <th>LOCATION</th>
                </tr>
          
                    { events.map((event) => { 
                        return (
                            <tr>
                                <td>{event.event}</td>
                               
                                <td> 
                                    {event.month && <>{moment(event.event_date_month).format('MMMM')} </> }
                                    {event.event_typing_event_schedule && <>{event.event_typing_event_schedule} </> }
                                </td>
                                <td>{event.event_location}</td>
                            </tr>

                        )
                      })
                
                    
                    }
                 
                     
              
            </table>
          
        </div>
        </PageLayout>
       
    )
} 
/** exporting to Sidebar styles */
const around_vanuatu_sublist_styles = {
    position: 'absolute',
    right: '87px',
    top:'-40px',
    width: '1000px',
    
}
export default CalendarOfEvents;