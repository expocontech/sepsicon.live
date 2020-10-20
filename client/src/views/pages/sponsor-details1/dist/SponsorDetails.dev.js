// import React from "react"
// import { Row, Col, Button } from "reactstrap"
// import ProfileHeader from "./ProfileHeader"
// import AboutCard from "./AboutCard"
// import SuggestedPages from "./SuggestedPages"
// import Posts from "./Posts"
// import Videos from "./Videos"
// import { history } from "../../../../src/history"
// import * as Icon from "react-feather"
// import axios from "axios"
// import "../../../assets/scss/pages/users-profile.scss"
// class SponsorDetails extends React.Component {
//   state = {
//     isLoading: false
//   }
//   componentDidMount = () => {
//     if (sessionStorage.getItem('token') != null) {
//       var data = {
//         "sponsorid": this.props.match.params.sid,
//         "userid": sessionStorage.getItem('uid').toString()
//       }
//       // console.log(data1);
//       const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
//       axios.post(`${process.env.REACT_APP_BASENAME}sponsor/stallcount`, data, { headers: authHeader }).then((response) => {
//         console.log(response)
//       }).catch((error) => {
//         console.log(error);
//       })
//     } else {
//       history.push('/')
//     }
//   }
//   toggleLoading = () => {
//     this.setState({
//       isLoading: true
//     })
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       })
//     }, 2000)
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <div id="user-profile">
//           <Row>
//             <Col sm="12">
//               <ProfileHeader sidheader={this.props.match.params.sid} />
//             </Col>
//           </Row>
//           <div id="profile-info">
//             <Row>
//               <Col lg="8" md="12">
//                 <AboutCard sidabout={this.props.match.params.sid} />
//               </Col>
//               <Col lg="4" md="12">
//                 <SuggestedPages sidsuggested={this.props.match.params.sid} />
//               </Col>
//               <Col lg="8" md="12">
//                 <Posts sidposts={this.props.match.params.sid} />
//               </Col>
//               <Col lg="4" md="12">
//                 <Videos sidvideos={this.props.match.params.sid} />
//               </Col>
//             </Row>
//           </div>
//         </div>
//       </React.Fragment>
//     )
//   }
// }
// export default SponsorDetails
// import React from "react"
// import { Row, Col, Button } from "reactstrap"
// import ProfileHeader from "./ProfileHeader"
// import AboutCard from "./AboutCard"
// import SuggestedPages from "./SuggestedPages"
// import Posts from "./Posts"
// import Videos from "./Videos"
// import { history } from "../../../../src/history"
// import * as Icon from "react-feather"
// import axios from "axios";
// import "../../../assets/scss/pages/users-profile.scss"
// class SponsorDetails extends React.Component {
//   state = {
//     isLoading: false,
//     data: []
//   }
//   componentDidMount = () => {
//     if (sessionStorage.getItem('token') != null) {
//       const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
//       axios.get(`${process.env.REACT_APP_BASENAME}sponsor/setting/${this.props.match.params.sid}`, { headers: authHeader }).then(
//         response => {
//           this.setState({
//             data: response.data.result[0]
//           });
//         }
//       ).catch((error) => {
//         console.log(error)
//         history.push('/')
//       });
//     }
//     else {
//       history.push('/')
//     }
//   }
//   toggleLoading = () => {
//     this.setState({
//       isLoading: true
//     })
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       })
//     }, 2000)
//   }
//   render() {
//     const { banner, about, exhibitors, doc, videos } = this.state.data
//     return (
//       <React.Fragment>
//         <div id="user-profile">
//           {banner == 1 ?
//             <Row>
//               <Col sm="12">
//                 <ProfileHeader sidheader={this.props.match.params.sid} />
//               </Col>
//             </Row>
//             : null}
//           <div id="profile-info">
//             <Row>
//               {about == 1 ?
//                 <Col lg="8" md="12">
//                   <AboutCard sidabout={this.props.match.params.sid} />
//                 </Col>
//                 : null}
//               {exhibitors == 1 ?
//                 <Col lg="4" md="12">
//                   <SuggestedPages sidsuggested={this.props.match.params.sid} />
//                 </Col>
//                 : null}
//               {doc == 1 ?
//                 <Col lg="8" md="12">
//                   <Posts sidposts={this.props.match.params.sid} />
//                 </Col>
//                 : null}
//               {videos == 1 ?
//                 <Col lg="4" md="12">
//                   <Videos sidvideos={this.props.match.params.sid} />
//                 </Col>
//                 : null}
//             </Row>
//           </div>
//         </div>
//       </React.Fragment>
//     )
//   }
// }
// export default SponsorDetails
"use strict";