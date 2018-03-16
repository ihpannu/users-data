import React, { Component } from 'react';
import { Fetch } from './util/Fetch';
import Nav from './components/Header/nav/Nav';
import Pagination from './components/Pagination/Pagination';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      value: 10,
      currentPage: 1
    };
  }

  compareBy = sortPropertyPath => {
    return (a, b) => {
      // arrow function so that we can use `this` to access `getNestedPropertyValue`

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

  sortList = sortPropertyPath => {
    console.log(
      'App received sorting rules from Pagination!',
      sortPropertyPath
    );

    let arrayCopy = [...this.state.users];
    arrayCopy.sort(this.compareBy(sortPropertyPath));
    this.setState({ users: arrayCopy });
  };

  setUsers = users => {
    console.log('App received users from fetch!', users);
    this.setState({ users });
  };
  handleValueChange = e => {
    // this changes the state of value when user selects different value option in select menu
    this.setState({ value: e.target.value });
    console.log(e.target.value);
  };

  handlePageChangeNext = e => {
    this.setState({ currentPage: Number(e.target.id) });
    console.log(`Clicked ${this.state.currentPage}`);
  };
  handlePageChangePrev = e => {
    this.setState({ currentPage: Number(e.target.id) });
    console.log(`Clicked ${this.state.currentPage}`);
  };

  render() {
    const { users, value, currentPage } = this.state;
    // const { value } = this.state;
    
    const indexOfLastUser = users.map(user => user.)
    // const indexOfFirstUser = indexOfLastUser - value;
    // const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // const pageNumbers = [];
    // for (let i = 0; i <= Math.ceil(users.length / value); i++) {
    //   pageNumbers.push(i);
    // }
    // const renderPageNumbers = pageNumbers.map(number => {
    //   return number;
    // });
    return (
      <div>
        <Nav />
        <Pagination
          onSort={this.sortList}
          users={users}
          handleValueChange={this.handleValueChange}
          value={value}
          handlePageChangeNext={this.handlePageChangeNext}
          handlePageChangePrev={this.handlePageChangePrev}
        />
        <Fetch
          onSuccess={this.setUsers}
          users={users}
          value={value}
          handleValueChange={this.handleValueChange}
        />
      </div>
    );
  }
}

export default App;
