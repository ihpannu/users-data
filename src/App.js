import React, { Component } from 'react';
import { Fetch } from './util/Fetch';
import Nav from './components/Header/nav/Nav';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Fetch />
      </div>
    );
  }
}

export default App;
