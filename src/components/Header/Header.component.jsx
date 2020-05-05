import React, {useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

/**
 *  components
 * */
import Navbar from './../Navbar/Navbar.component';

/**
 *  styles
 */
import './Header.styles.scss';


/**
 *  utils
 */
import { SiteAPI } from '../../utils/siteInit';

export default  () => {
    
    /** Init State data will move to Redux
     *  */
    const [pageMeta, setPageMeta] = useState([]);
    const [navBar, setNavbar] =  useState([{
        title:'',
        slug: ''
    }]);

    const [date, setDate] = useState(new Date())

    /**
     * GET Page Meta data from Api
     */
    useEffect(() => {
        axios.get(`${SiteAPI.rootURI}/api/headers`).then(res => {
            console.log(res.data);
            setPageMeta(res.data);
        });
    // eslint-disable-next-line
    }, []);

    /**
     * GET Navbar data from Api
     * http://testserver.vanuatu.jbgcore.com/api/sections
     * 
     * ${SiteAPI.rootURI}api/navs
     */
    useEffect(() => {
        axios.get(`${SiteAPI.rootURI}/api/sections`).then(res => {
           // console.log(res.data)
            setNavbar(res.data);
        });
    // eslint-disable-next-line
    }, []);
    
    

    return (
        <Fragment>
            <div className="header_banner">
              <img src="http://vanuatu.jbgcore.com/storage/headers/May2020/jEZ6Eh57fYI6pvUUlX95.jpg" alt="Site Header Banner" />    
            </div>
            <div className="header_site_logo">
                <Link to='/'>
                    <img src="http://vanuatu.jbgcore.com/storage/headers/March2020/n6jDxEivi2nUxhjecDCT.png" alt="Site Header Banner" /> 
                </Link>
            </div>
            <div className="header_info_bar">
                {/* <div dangerouslySetInnerHTML={{__html: pageMeta.site_title }} />  */}
                <div><p>Welcome to Holiday <span>Inn Resort Vanuatu</span></p></div>
                <p>{moment(date).format('h:mm A')}</p>
                <p> {moment(date).format('d')} {moment(date).format('MMM')} {moment(date).format('YYYY')} </p>   
            </div>
            <div className="header_navbar_wraper">
                 <Navbar navBar={navBar} />
            </div>

        </Fragment>

    )
}