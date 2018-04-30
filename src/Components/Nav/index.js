import React from 'react';
import {Link} from "react-router-dom";
import './Nav.css';

export default class extends React.Component {

  render() {
    return (
      <div id="Nav">
        <h1 className="nav-title"><Link className="nav-title-link" to="/">Julia Hechtman</Link></h1>
        <div className="nav-links">
          <Link className="nav-link" to="/">Work</Link>
          <Link className="nav-link" to="/resume">Resume</Link>
        </div>
      </div>
    );

  }
}
