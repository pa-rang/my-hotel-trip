import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import HotelListPage from './pages/HotelListPage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/hotels" component={HotelListPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
