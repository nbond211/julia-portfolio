import React from 'react';
import {Link, withRouter} from "react-router-dom";
import './Nav.css';

class Nav extends React.Component {

  render() {
    const {pathname} = this.props.location;
    return (
      <div id="Nav">
        <h1 className="nav-title"><Link className="nav-title-link" to="/">Julia Hechtman</Link></h1>
        <div className="nav-links">
          <Link className={`nav-link ${pathname === "/" && "nav-link-active"}`} to="/">Work</Link>
          <Link className={`nav-link ${pathname === "/resume" && "nav-link-active"}`} to="/resume">Resume</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(props => <Nav {...props}/>);
