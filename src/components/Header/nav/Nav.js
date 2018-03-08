import React, { Component } from 'react';
import '../nav/Nav.css';
class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a>Navitem 1</a>
            </li>
            <li>
              <a>Navitem 2</a>
            </li>
            <li>
              <a>Navitem 3</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
