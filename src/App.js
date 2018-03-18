import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Preview from './Preview';
import NotFound from './NotFound';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Preview} />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
