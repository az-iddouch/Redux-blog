import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark py-3 mb-5">
        <div className="container">
          <Link className="navbar-brand pt-0" to="/">
            ReduxBlog
          </Link>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/posts/new">
                new post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
