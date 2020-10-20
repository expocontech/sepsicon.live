import React from "react"
import { Card, CardBody, Button } from "reactstrap"
import { Edit2, Settings, Video, Menu, X } from "react-feather"
import coverImg from "../../../assets/img/sponsor/banner.jpg"
import profileImg from "../../../assets/img/pages/sponsor/intas.jpg"
import axios from "axios";
import { history } from "../../../history"

class ProfileHeader extends React.Component {
  state = {
    isOpen: false,
    data: []
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  componentDidMount = () => {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor/detail/${this.props.sidheader}`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            data: response.data.result
          });
        }
      ).catch((error) => {
        console.log(error)
        history.push('/')
      });
    }
    else {
      history.push('/')
    }
  }
  render() {
    let result = this.state.data.map(item => {
      return (
        <Card>
          <CardBody>
            <div className="profile-header">
              <div className="position-relative">
                <div className="cover-container">
                  <img
                    // src={coverImg}
                    src={`${process.env.REACT_APP_BASENAME}` + item.banner}
                    alt={item.company}
                    className="img-fluid bg-cover w-100 rounded-0"
                  />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      )
    })
    return result;
  }

}
export default ProfileHeader
