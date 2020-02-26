import React, { useEffect, useState} from 'react';

/** Styles */
import './AroundVanuatuEvents.styles.scss';
import axios from 'axios';

import { SiteAPI } from './../../../utils/siteInit'; 
import moment from 'moment';

export default  () => { 
    
    /**define database model */

    const [events, setEvents] = useState([{
        event_title: '',
        event_date_month: '',
        event_location: '',
        event_image: null,
        event_typing_event_schedule: ''

        
    }]);

    /** HTTP API */
    useEffect(() => { 
        
        axios.get(`${SiteAPI.rootURI}api/events`)
             .then(res => { 
                 //console.log(res.data)
                 setEvents(res.data)
             })
             .catch(err => console.log(err));
        
        
        // eslint-disable-next-line
    }, [])

    return (
        <div className="events_warper">
            <table>
                <tr>
                    <th>EVENT</th>
                    <th>MONTH</th>
                    <th>LOCATION</th>
                </tr>
          
                    { events.map((event) => { 
                        return (
                            <tr>
                                <td>{event.event_title}</td>
                               
                                <td> 
                                    {event.event_date_month && <>{moment(event.event_date_month).format('MMMM')} </> }
                                    {event.event_typing_event_schedule && <>{event.event_typing_event_schedule} </> }
                                </td>
                                <td>{event.event_location}</td>
                            </tr>

                        )
                      })
                
                    
                    }
                 
                     
              
            </table>
          
        </div>
    )
} 