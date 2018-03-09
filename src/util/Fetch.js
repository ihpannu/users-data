import React, { Component } from 'react';

import Loader from '../components/Loader/Loader';

import '../util/Fetch.css';
export class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = 'https://randomuser.me/api/?results=200&nat=usa,uk,nz';
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(parsedJSON => {
        this.setState({
          users: parsedJSON.results,
          isLoading: false
        });
      })
      .catch(error => console.log('parsing failed', error));
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <Loader />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <div className="table-container">
            <div className="responsive-table">
              <li id="table-head" className="table-header">
                <div className="col col-1">First name</div>
                <div className="col col-2">Last Name</div>
                <div className="col col-3">Country</div>
                <div className="col col-4">Address</div>
                <div className="col col-5">City</div>
                <div className="col col-5">State</div>
                <div className="col col-7">Zip</div>
                <div className="col col-8">Phone</div>
              </li>
              <ul class="responsive-table">
                {users.map(user => (
                  <li class="table-row">
                    <div
                      className="col col-1"
                      data-label="First Name"
                      key={user.login.username}
                    >
                      {user.name.first}
                    </div>
                    <div
                      className="col col-2"
                      data-label="Last Name"
                      key={user.login.username}
                    >
                      {user.name.last}
                    </div>
                    <div
                      className="col col-3"
                      data-label="Country"
                      key={user.login.username}
                    >
                      {user.nat}
                    </div>
                    <div
                      className="col col-4"
                      data-label="Address"
                      key={user.login.username}
                    >
                      {user.location.street}
                    </div>
                    <div
                      className="col col-5"
                      data-label="Address"
                      key={user.login.username}
                    >
                      {user.location.city}
                    </div>
                    <div
                      className="col col-6"
                      data-label="State"
                      key={user.login.username}
                    >
                      {user.location.state}
                    </div>
                    <div
                      className="col col-7"
                      data-label="Zip"
                      key={user.login.username}
                    >
                      {user.location.postcode}
                    </div>

                    <div
                      className="col col-8"
                      data-label="Phone"
                      key={user.login.username}
                    >
                      {user.cell}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
