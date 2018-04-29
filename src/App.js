import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./Components/Nav";
import Resume from "./Pages/Resume";
import Work from "./Pages/Work";
import NotFound from "./NotFound";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Work} />} />
        <Route exact path="/resume" component={Resume} />} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
