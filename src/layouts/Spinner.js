import React, {Fragment} from 'react';
import spinner from './giphy.gif';


const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." 
                    style={{width: '100%', height:"100%", marginTop:'25%', display:'inline-block', backgroundRepeat:'no-repeat' }} />
        </Fragment>
    )
}

export default Spinner;