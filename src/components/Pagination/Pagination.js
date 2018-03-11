import React, { Component } from 'react';
import './Pagination.css';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageCount: null,
      users: []
    };
    this.handlePageChange.bind(this);
    // this.sortList = this.sortList.bind(this);
  }

  handlePageChange(page, e) {
    this.setState({ currentPage: page });
  }
  //   compareBy = key => {
  //     // no need to bind arrow functions
  //     return function(a, b) {
  //       if (a[key] < b[key]) return -1;
  //       if (a[key] > b[key]) return 1;
  //       return 0;
  //     };
  //   };

  //   sortList = key => {
  //     let arrayCopy = [...this.state.users];
  //     arrayCopy.sort(this.compareBy(key));
  //     this.setState({ users: arrayCopy });
  //   };
  render() {
    const per_page = '10';
    const paginationData = this.props.users;
    let numPages = Math.ceil(paginationData.length / per_page);

    if (paginationData.length % per_page > 0) {
      numPages++;
    }
    return (
      <div className="pag-header">
        <div>
          <ul className="pag-box">
            <h2>List of Users</h2>
            <li>
              <hr />
            </li>
            <li>
              Sort By:{' '}
              <a onClick={this.sortList}>
                Last Name
                <span>
                  <i className="fas fa-sort-down" />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pag-box">
            <li>
              items per page
              <label>
                <select>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="100">100</option>
                </select>
              </label>
            </li>
            <li>of</li>
            <li>
              <a>
                <i className="fas fa-angle-left" />
              </a>
            </li>
            <li>
              <a onChange={this.handlePageChange}>
                <i className="fas fa-angle-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
