import React, { Component } from 'react';
import './Pagination.css';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
              <a onClick={() => this.props.onSort('name.last')}>
                Last Name
                <span>
                  <i className="fas fa-sort-down" />
                </span>
              </a>
            </li>
            <hr />
            <li>
              <a onClick={() => this.props.onSort('name.first')}>
                First Name
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
                <select
                  value={this.props.value}
                  // defaultValue="10"
                  onChange={this.props.handleValueChange}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="100">100</option>
                </select>
              </label>
            </li>
            <li>{this.props.indexOfFirstUser}</li>
            <li>of </li>
            <li>{this.props.indexOfLastUser}</li>
            <li>
              <a
                key={this.props.number}
                id={this.props.number}
                onClick={this.props.handlePageChangePrev}
              >
                <i className="fas fa-angle-left" />
                {this.props.number}
              </a>
            </li>
            <li>
              <a onClick={this.props.handlePageChangeNext}>
                <i className="fas fa-angle-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
