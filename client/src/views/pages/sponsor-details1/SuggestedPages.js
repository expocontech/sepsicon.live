import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import rockRose from "../../../assets/img/profile/pages/page-09.jpg"
import axios from "axios"
import { history } from "../../../history"
import { FaPhoneAlt, FaPhoneSlash, FaCogs, FaSignal, FaCertificate, FaChalkboardTeacher, FaMoneyCheck, FaTicketAlt, FaAward, FaFileDownload } from "react-icons/fa"


class SuggestedPages extends React.Component {

  state = {
    data: []
  }

  componentDidMount = () => {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor/staff/${this.props.sidsuggested}`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            data: response.data.result
          });
        }
      ).catch((error) => {
        history.push('/')
      });
    }
    else {
      history.push('/')
    }

  }

  handleOnClick = (staffid) => {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      const data = {
        "sponsorid": this.props.sidsuggested,
        "staffid": staffid,
        "userid": sessionStorage.getItem('uid').toString()
      }
      axios.post(`${process.env.REACT_APP_BASENAME}sponsor/staff-count`, data, { headers: authHeader }).then(response =>
        console.log(response)
      ).catch((error) => {
        console.log(error);
        // history.push('/')
      });
    }
    else {
      history.push('/')
    }
  }

  render() {

    return (
      <Card>
        <CardHeader>
          <CardTitle>Exhibitors</CardTitle>
        </CardHeader>
        <CardBody className="suggested-block">
          {this.state.data.map(item => {
            if (item.isactive == 1) {
              return <a href={item.link} target="_blank" onClick={() => { this.handleOnClick(item.id) }}><div className="d-flex justify-content-start align-items-center mb-1">
                <div className="avatar mr-50">
                  <i style={{ width: "40px", height: "40px", background: "#06c506", borderRadius: "50%" }} >
                    <FaPhoneAlt className="avtar" style={{ width: "20px", height: "20px", position: "relative", top: "20%" }} /></i>
                </div>
                <div className="user-page-info">
                  <p>{item.name}</p>
                  <span className="font-small-2">{item.designation}</span>
                </div>
              </div></a>
            }
            else {
              return <div className="d-flex justify-content-start align-items-center mb-1">
                <div className="avatar mr-50">
                  <i style={{ width: "40px", height: "40px", background: "#c70303", borderRadius: "50%" }}><FaPhoneSlash className="avtar" style={{ width: "20px", height: "20px", position: "relative", top: "20%" }} /></i>
                </div>
                <div className="user-page-info">
                  <p>{item.name}</p>
                  <span className="font-small-2">{item.designation}</span>
                </div>
              </div>
            }
          })}
        </CardBody>
      </Card>
    )
  }
}
export default SuggestedPages
