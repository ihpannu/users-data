// import React, { Component } from 'react';
// import './Pagination.css';

// export default class Pagination extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       currentPage: null,
//       pageCount: null
//     };
//     // this.sortList = this.sortList.bind(this);
//   }
//   //   componentWillMount() {
//   //     const startingPage = this.props.startingPage ? this.props.startingPage : 1;

//   //     const data = this.props.data;
//   //     const pageSize = this.props.pageSize;
//   //     let pageCount = parseInt(data.length / pageSize);
//   //     if (data.length % pageSize > 0) {
//   //       pageCount++;
//   //     }
//   //     this.setState({
//   //       currentPage: startingPage,
//   //       pageCount: pageCount
//   //     });
//   //   }

//   //   setCurrentPage(num) {
//   //     this.setState({ currentPage: num });
//   //   }
// //   sortList() {
// //     this.props.users.forEach(user => {
// //       this.props.user.sort(this.user.name.first, this.user.name.last);
// //     });
//   }
//   render() {
//     return (
//       <div className="pag-header">
//         <div>
//           <ul className="pag-box">
//             <h2>List of Users</h2>
//             <li>
//               <hr />
//             </li>
//             <li>
//               Sort By:{' '}
//               <a onClick={this.sortList}>
//                 Last Name
//                 <span>
//                   <i className="fas fa-sort-down" />
//                 </span>
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <ul className="pag-box">
//             <li>
//               items per page
//               <label>
//                 <select>
//                   <option value="5">5</option>
//                   <option value="10">10</option>
//                   <option value="25">25</option>
//                   <option value="50">50</option>
//                   <option value="75">75</option>
//                   <option value="100">100</option>
//                 </select>
//               </label>
//             </li>
//             <li>of</li>
//             <li>
//               <a>
//                 <i className="fas fa-angle-left" />
//               </a>
//             </li>
//             <li>
//               <a>
//                 <i className="fas fa-angle-right" />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
