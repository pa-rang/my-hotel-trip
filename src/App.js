import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import HotelListPage from './pages/HotelListPage';

const App = () => {
  return (
    <Switch>
      <Route path="/web" exact component={HomePage} />
      <Route path="/web/hotels" component={HotelListPage} />
    </Switch>
  );
}

export default App;
