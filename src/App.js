import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Work from './Pages/Work';
import NotFound from './NotFound';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Work} />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
