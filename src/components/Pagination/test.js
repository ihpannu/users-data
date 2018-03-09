import React, { Component, PropTypes } from 'react';

// const propTypes = {
//   userss: PropTypes.userss.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   initialPage: PropTypes.number
// };

// const defaultProps = {
//   initialPage: 1
// };

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }
  //   componentWillMount() {
  //     //Set the intial page
  //     if (this.props.userss && this.props.userss.length) {
  //       this.setPage(this.props.initialPage);
  //       console.log(this.props.userss);
  //     }
  //   }
  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.props.userss !== prevProps.userss) {
  //       this.setPage(this.props.initialPage);
  //     }
  //   }
  //   setPage(page) {
  //     const userss = this.props.userss;
  //     let pager = this.state.pager;

  //     if (page < 1 || page > pager.totalPages) {
  //       return;
  //     }

  //     pager = this.getPager(userss.length, page);
  //     const pageOfUsers = userss.slice(pager.startIndex, pager.endIndex + 1);
  //     this.setState({
  //       pager
  //     });

  //     this.props.onPageChange(pageOfUsers);
  //   }
  //   getPager(totalUsers, currentPage = 1, pageSize = 10) {
  //     // calculate total pages
  //     const totalPages = Math.ceil(totalUsers / pageSize);

  //     let startPage;
  //     let endPage;
  //     if (totalPages <= 10) {
  //       // less than 10 total pages so show all
  //       startPage = 1;
  //       endPage = totalPages;
  //     } else {
  //       // more than 10 total pages so calculate start and end pages
  //       if (currentPage <= 6) {
  //         startPage = 1;
  //         endPage = 10;
  //       } else if (currentPage + 4 >= totalPages) {
  //         startPage = totalPages - 9;
  //         endPage = totalPages;
  //       } else {
  //         startPage = currentPage - 5;
  //         endPage = currentPage + 4;
  //       }
  //     }

  //     // calculate start and end item indexes
  //     const startIndex = (currentPage - 1) * pageSize;
  //     const endIndex = Math.min(startIndex + pageSize - 1, totalUsers - 1);

  //     // create an array of pages to ng-repeat in the pager control
  //     const pages = this.range(startPage, endPage + 1);

  //     return {
  //       totalUsers,
  //       currentPage,
  //       pageSize,
  //       totalPages,
  //       startPage,
  //       endPage,
  //       startIndex,
  //       endIndex,
  //       pages
  //     };
  //   }
  render() {
    // const pager = this.state.pager;

    // if (!pager.pages || pager.pages.length <= 1) {
    //   // don't display pager if there is only 1 page
    //   return null;
    // }
    return (
      <div className="pag-header">
        <div>
          <ul class="pag-box">
            <h2>List of Users</h2>
            <li>
              <hr />
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
            <li>of</li>
            <li>
              <a onClick={() => this.setPage(1)}>
                <i class="fas fa-angle-left" />
              </a>
            </li>
            <li>
              <a>
                <i class="fas fa-angle-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
