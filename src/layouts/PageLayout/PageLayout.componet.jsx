import React from  'react';
import './PageLayout.styles.scss';
import styled from "styled-components";
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/**
 * component
 */
import Header from './../../components/Header/Header.component';
import FooterPageLayout from './../../components/FooterPageLayout/FooterPageLayout.component';

const PageLayout = (props) => {
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

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
        transform: translate3d(100%, 0, 0);
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 200ms ease-in;
        transform: translate3d(0, 0, 0);
        transition: all 500ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 500ms ease-in;
    }
    div.transition-group {
      position: relative;
    }
    section.route-section {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000px;
    }
`;

export default withRouter(PageLayout)