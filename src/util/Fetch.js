import React, { Component } from 'react';
// import { UsersList } from '../components/Users/UsersList/UsersList';
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
      <div>
        {users.map(user => (
          <ul key={user.login.username}>
            <li>{user.name.first}</li>
            <li>{user.name.last}</li>
            <li>{user.name.nat}</li>
            <li>{user.location.street}</li>
            <li>{user.location.city}</li>
            <li>{user.location.state}</li>
            <li>{user.location.postcode}</li>
            <li>{user.cell}</li>
          </ul>
        ))}
      </div>
    );
  }
}
