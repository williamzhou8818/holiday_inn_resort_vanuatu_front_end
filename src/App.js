import React from 'react';
import { Route, Switch } from 'react-router-dom'
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
/**
 * styles
 */
import './App.css';

const App = () => {
  return (
   <>
    <Switch>
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
     </Switch>
   </>
  );
}

export default App;
