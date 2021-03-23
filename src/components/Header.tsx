import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './HeaderStyle.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Welcome</Link>
        <Link to="/person">Searching for persons</Link>
        <Link to="/company">Searching for companies</Link>
      </div>
    );
  }
}

export default Header;