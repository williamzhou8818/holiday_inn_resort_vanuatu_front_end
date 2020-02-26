import React from  'react';
import './PageLayout.styles.scss';
/**
 * component
 */
import Header from './../../components/Header/Header.component';
import FooterPageLayout from './../../components/FooterPageLayout/FooterPageLayout.component';

export default (props) => {
    return (
        <div>
            <Header />
            <div className="page_layout_wrapper" >
                    {props.children}
            </div>
            <FooterPageLayout />
        </div>
    )
}