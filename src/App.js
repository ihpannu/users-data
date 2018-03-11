import React, {Component} from 'react';
import {Fetch} from './util/Fetch';
import Nav from './components/Header/nav/Nav';
import Pagination from './components/Pagination/Pagination';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  compareBy = (sortPropertyPath) => {
    return (a, b) => { // arrow function so that we can use `this` to access `getNestedPropertyValue`

      const aValue = this.getNestedPropertyValue(a, sortPropertyPath);
      const bValue = this.getNestedPropertyValue(b, sortPropertyPath);

      console.log(`sorting a and b by the value at ${sortPropertyPath}`);

      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    };
  };

  getNestedPropertyValue(sourceObject, propertyPath) {
    const propertyKeys = propertyPath.split('.');
    return propertyKeys.reduce((value, key) => value[key], sourceObject);
  }

  sortList = (sortPropertyPath) => {
    console.log('App received sorting rules from Pagination!', sortPropertyPath);

    let arrayCopy = [...this.state.users];
    arrayCopy.sort(this.compareBy(sortPropertyPath));
    this.setState({ users: arrayCopy });
  };

  setUsers = (users) => {
    console.log('App received users from fetch!', users);
    this.setState({users});
  };

  render() {
    const {users} = this.state;
    return (
        <div>
          <Nav/>
          <Pagination onSort={this.sortList} users={users}/>
          <Fetch onSuccess={this.setUsers} users={users}/>
        </div>
    );
  }
}

export default App;
