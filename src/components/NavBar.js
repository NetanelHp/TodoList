import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navBar blue darken-2">
          <div className="nav-wrapper">
            <a href="localhost:3000" className="brand-logo">
              Todo App
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link
                  to="/"
                  className="waves-effect waves-light btn blue darken-3"
                >
                  Todo
                </Link>
              </li>
              <li>
                <Link
                  to="/create"
                  className="waves-effect waves-light btn blue darken-3"
                >
                  Create Todo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
