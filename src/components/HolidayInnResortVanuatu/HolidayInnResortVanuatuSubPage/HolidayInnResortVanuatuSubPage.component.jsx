import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { SiteAPI } from '../../../utils/siteInit';


/**styles */
import './HolidayInnResortVanuatuSubPage.styles.scss'



const HolidayInnResortVanuatuSubPage = () => { 
    
    const [holidayInnResortVanuatuSub, setHolidayInnResortVanuatuSub] = useState([{
        ref_id: '',
        title: '',
        sub_title:'',
        image: '',
        body:''
    }]);

    return (
        <>
        </>
    )

};

export default HolidayInnResortVanuatuSubPage;