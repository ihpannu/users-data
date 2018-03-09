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
    const url = 'https://randomuser.me/api/?results=10&nat=us,uk,fr,nz';
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(parsedJSON => {
        this.setState({
          users: parsedJSON.results
        });
      })
      .catch(error => console.log('parsing failed', error));
  }

  render() {
    const { users } = this.state;

    return (
      <div className="table-container">
        <div>
          <ul>
            <h2>List of awesome</h2>
          </ul>
        </div>
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

              ))}
            </div>
            <div className="table-row">
              {users.map(user => (
                <ul className="table-data" key={user.login.username}>
                  <li>{user.nat}</li>
                </ul>
              ))}
            </div>
            <div className="table-row">
              {users.map(user => (
                <ul className="table-data" key={user.login.username}>
                  <li>{user.location.street}</li>
                </ul>
              ))}
            </div>
            <div className="table-row">

            </div>
            <div className="table-row">
              {users.map(user => (
                <ul className="table-data" key={user.login.username}>
                  <li>{user.location.state}</li>
                </ul>
              ))}
            </div>
            <div className="table-row">
              {users.map(user => (
                <ul className="table-data" key={user.login.username}>
                  <li>{user.location.postcode}</li>
                </ul>
              ))}
            </div>
            <div className="table-row">
              {users.map(user => (
                <ul className="table-data" key={user.login.username}>
                  <li>{user.cell}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
