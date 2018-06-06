import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Helmet} from "react-helmet";
import fetchDescription from './Api/FetchDescription';
import Nav from "./Components/Nav";
import Resume from "./Pages/Resume";
import Work from "./Pages/Work";
import NotFound from "./NotFound";
import "./App.css";

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      description: ""
    };
  }

  async componentDidMount() {
    const description = await fetchDescription();
    this.setState({description: description && description.text ? description.text : ""});
  }

  render() {
    const {description} = this.state;

    return (
      <Router>
        <div>
          <Helmet>
            <meta name="description" content={description} />
          </Helmet>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Work} />} />
            <Route exact path="/resume" component={Resume} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
      );

  }
}
