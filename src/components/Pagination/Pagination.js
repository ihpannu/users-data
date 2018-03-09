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
          <ul class="pag-box">
            <h2>List of Users</h2>
            <li>
              <i class="fas fa-ellipsis-v" />
            </li>
            <li>
              Sort By:{' '}
              <a>
                Last Name
                <span>
                  <i class="fas fa-sort-down" />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="pag-box">
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
            <li />
            <li />
          </ul>
        </div>
      </div>
    );
  }
}
