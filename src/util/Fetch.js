import React, { Component } from 'react';

import Loader from '../components/Loader/Loader';

import '../util/Fetch.css';
export class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      arrayCopy: []
    };
    // this.sortList.bind(this);
    // this.compareBy.bind(this);
  }

  componentDidMount() {
    this.fetchData();

    // setTimeout(() => {
    //   this.fetchData();
    // }, 100);
  }

  fetchData() {
    const url = 'https://randomuser.me/api/?results=20&nat=us,nz,au';
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(parsedJSON => {
        const users = parsedJSON.results;
        this.setState({
          isLoading: false
        });
        if (this.props.onSuccess) {
          // since we have the list of users, let's call our callback to pass them up to the App component, which
          // will handle sorting them and returning them down to us so that we can make a list out of them.
          this.props.onSuccess(users)
        }
      })
      .catch(error => console.log('parsing failed', error));
  }

  render() {
    const { users } = this.props;

    return (
      <div>
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
              <ul className="responsive-table">
                {users.map(user => (
                  <li key={user.id.value + user.email} className="table-row">
                    <div className="col col-1" data-label="First Name">
                      {user.name.first}
                    </div>
                    <div className="col col-2" data-label="Last Name">
                      {user.name.last}
                    </div>
                    <div className="col col-3" data-label="Country">
                      {user.nat}
                    </div>
                    <div className="col col-4" data-label="Address">
                      {user.location.street}
                    </div>
                    <div className="col col-5" data-label="Address">
                      {user.location.city}
                    </div>
                    <div className="col col-6" data-label="State">
                      {user.location.state}
                    </div>
                    <div className="col col-7" data-label="Zip">
                      {user.location.postcode}
                    </div>

                    <div className="col col-8" data-label="Phone">
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
