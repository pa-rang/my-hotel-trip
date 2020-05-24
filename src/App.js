import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from 'ErrorBoundary';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const HotelListPage = React.lazy(() => import('./pages/HotelListPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => (
  <ErrorBoundary>
    <Suspense fallback={<h1 style={{ color: "red" }}>loading...</h1>}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/hotels" component={HotelListPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default App;
