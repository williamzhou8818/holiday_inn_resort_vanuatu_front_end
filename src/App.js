import React from 'react';
import styled from "styled-components";
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
/**
 * Layouts
 */


/**
 * compoenets
 */
import ShowCasse from './components/Showcase/Showcase.component';
import Gallery from './components/Gallery/Gallery.component';
import RestaurantsAndBars from './components/RestaurantsAndBars/RestaurantsAndBars.component';
import AroundVanuatu from './components/AroundVanuatu/AroundVanuatu.component';
// import MainItemListsLayout from './layouts/MainItemListsLayout/MainItemListsLayout.component';
import RestaurantsAndBarsDetails from './components/RestaurantsAndBars/RestaurantsAndBarsDetails/RestaurantsAndBarsDetails.component';
import HolidayInnResortVanuatu from './components/HolidayInnResortVanuatu/HolidayInnResortVanuatu.component';

import AroundVanuatuSubLists from './components/AroundVanuatu/AroundVanuatuSubList/AroundVanuatuSubList.component';
import AroundVanuatuDetailsPage from './components/AroundVanuatu/AroundVanuatuSubList/AroundVanuatuDetailsPage/AroundVanuatuDetailsPage.component';
import RetailAndServicesDetail from './components/AroundVanuatu/RetailAndServices/RetailAndServicesDetail/RetailAndServicesDetail.component';
import FoodAndDiningOutDetail from './components/AroundVanuatu/FoodAndDiningOut/FoodAndDiningOutDetail/FoodAndDiningOutDetail.component';
import HolidayInnResortVanuatuSubPage from './components/HolidayInnResortVanuatu/HolidayInnResortVanuatuSubPage/HolidayInnResortVanuatuSubPage.component';
import HolidayInnResortVanuatuDetailsPage from './components/HolidayInnResortVanuatu/HolidayInnResortVanuatuSubPage/HolidayInnResortVanuatuDatailPage/HolidayInnResortVanuatuDatail.component';

/**
 * styles
 */
import './App.css';

const App = ({location}) => {
  return (
    <Wrapper>    

   <TransitionGroup>

   <CSSTransition  
    key={location.key}
    timeout={{ enter: 1000, exit: 1000 }}
    classNames={'fade'}

  >

  <main>
  <Switch location={location} >
          <Route exact path='/' component={ShowCasse} /> 
          <Route exact path='/restaurants_bars' component={RestaurantsAndBars} />
          <Route exact path='/restaurants_bars/:id' component={RestaurantsAndBarsDetails} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/around_vanuatu' component={AroundVanuatu} />
          <Route exact path='/around_vanuatu/:id' component={AroundVanuatuSubLists} />
          <Route exact path='/holiday_inn_resort_vanuatu' component={HolidayInnResortVanuatu} />
          <Route exact path='/around_vanuatu/1/:id' component={AroundVanuatuDetailsPage} />
          <Route exact path='/around_vanuatu/3/:id' component={RetailAndServicesDetail} /> 
          <Route exact path='/around_vanuatu/4/:id' component={FoodAndDiningOutDetail} />
          <Route exact path='/holiday_inn_resort_vanuatu/:id' component={HolidayInnResortVanuatuSubPage} />
          <Route exact path='/holiday_inn_resort_vanuatu/:id/:id' component={HolidayInnResortVanuatuDetailsPage} />

     </Switch>
  </main>
   

    </CSSTransition>

   </TransitionGroup>
  </Wrapper> 

  );
}
const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 800ms ease-in-out;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 800ms ease-in-out;
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

export default withRouter(App);
