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
    const [pageMeta, setPageMeta] = useState({
        site_header_image:'',
        site_title:'',
        site_logo: '',
        current_datatime:''
    });
    const [navBar, setNavbar] =  useState([{
        title:'',
        slug: ''
    }]);

    const [date, setDate] = useState(new Date())

    /**
     * GET Page Meta data from Api
     */
    useEffect(() => {
        axios.get(`${SiteAPI.rootURI}api/pagemeta`).then(res => {
            //console.log(res.data[0]);
            setPageMeta(res.data[0]);
        });
    // eslint-disable-next-line
    }, []);

    /**
     * GET Navbar data from Api
     */
    useEffect(() => {
        axios.get(`${SiteAPI.rootURI}api/navs`).then(res => {
            setNavbar(res.data);
        });
    // eslint-disable-next-line
    }, []);
    
    

    return (
        <Fragment>
            <div className="header_banner">
              <img src={`${SiteAPI.imgStroge}${pageMeta.site_header_image}`} alt="Site Header Banner" />    
            </div>
            <div className="header_site_logo">
                <Link to='/'>
                    <img src={`${SiteAPI.imgStroge}${pageMeta.site_logo}`} alt="Site Header Banner" /> 
                </Link>
            </div>
            <div className="header_info_bar">
                <div dangerouslySetInnerHTML={{__html: pageMeta.site_title }} /> 
                <p>{moment(date).format('h:mm A')}</p>
                <p> {moment(date).format('d')} {moment(date).format('MMM')} {moment(date).format('YYYY')} </p>   
            </div>
            <div className="header_navbar_wraper">
                 <Navbar navBar={navBar} />
            </div>

        </Fragment>

    )
}