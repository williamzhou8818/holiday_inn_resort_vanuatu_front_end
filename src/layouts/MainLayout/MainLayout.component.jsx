import React from 'react';
import './MainLayout.styles.scss';



export default  (props) => {

    return (
        <div className="main_container">
            {props.children}
        </div>
    );
}