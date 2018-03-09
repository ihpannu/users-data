import React, { Component } from 'react';
import '../util/Fetch.css';
export class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = 'https://randomuser.me/api/?results=5';
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(parsedJSON => {
        this.setState({
          users: parsedJSON.results
          // parsedJSON.results.map(users => {
          //   return {
          //     id: users.login.username,
          //     firstName: users.name.first,
          //     lastName: users.name.last,
          //     country: users.nat,
          //     address: users.location.street,
          //     city: users.location.city,
          //     state: users.location.state,
          //     zip: users.location.postcode,
          //     phone: users.cell
          //   };
          // })
        });
      })
      .catch(error => console.log('parsing failed', error));
  }

  render() {
    const { users } = this.state;

    return (
      <div className="table">
        <div className="table-header">
          <div className="header__item">
            <a>First Name</a>
          </div>
          <div className="header__item">
            <a>Last Name</a>
          </div>
          <div className="header__item">
            <a>Country</a>
          </div>
          <div className="header__item">
            <a>Address</a>
          </div>
          <div className="header__item">
            <a>City</a>
          </div>
          <div className="header__item">
            <a>State</a>
          </div>
          <div className="header__item">
            <a>Zip</a>
          </div>
          <div className="header__item">
            <a>Phone</a>
          </div>
        </div>
        <div className="table-content">
          <div className="table-row">
            {users.map(user => (
              <ul className="table-data" key={user.login.username}>
                <li>{user.name.first}</li>
              </ul>
            ))}
          </div>
          <div className="table-row">
            {users.map(user => (
              <ul key={user.login.username}>
                <li>{user.name.last}</li>
              </ul>
            ))}
          </div>
          <div className="table-row">
            {users.map(user => (
              <ul key={user.login.username}>
                <li>{user.nat}</li>
              </ul>
            ))}
          </div>
          <div className="table-row">
            {users.map(user => (
              <ul key={user.login.username}>
                <li>{user.location.street}</li>
              </ul>
            ))}
          </div>
          <div className="table-row">
            {users.map(user => (
              <ul key={user.login.username}>
                <li>{user.location.city}</li>
              </ul>
            ))}
          </div>
          <div className="table-row">
            {users.map(user => (
              <ul key={user.login.username}>
                <li>{user.location.state}</li>
              </ul>
            ))}
          </div>
          <div className="table-row">
            {users.map(user => (
              <ul key={user.login.username}>
                <li>{user.location.postcode}</li>
              </ul>
            ))}
          </div>
          <div className="table-row">
            {users.map(user => (
              <ul key={user.login.username}>
                <li>{user.cell}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
