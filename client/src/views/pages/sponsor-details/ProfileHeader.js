import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { Edit2, Settings, Video, Menu, X } from "react-feather";
import coverImg from "../../../assets/img/sponsor/banner.jpg";
import profileImg from "../../../assets/img/pages/sponsor/intas.jpg";
import DocList from "./DocList";
import VideoList from "./VideoList";
import CallUs from "./CallUs";
import AboutCard from "./AboutCard";
import RequestDemo from "./RequestDemo";
import axios from "axios";
import { history } from "../../../../src/history";

import "../../../assets/scss/pages/ProfileHeader.css";

class ProfileHeader extends React.Component {
  state = {
    isOpen: false,
    data: [],
    data1: [],
    sid: this.props.sidheader,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      data: [],
    });
  };

  componentDidMount = () => {
    if (sessionStorage.getItem("token") != null) {
      const authHeader = {
        Authorization: "Bearer " + sessionStorage.getItem("token").toString(),
      };
      axios
        .get(
          `${process.env.REACT_APP_BASENAME}sponsor/detail/${this.state.sid}`,
          { headers: authHeader }
        )
        .then((response) => {
          // console.log(response.data);
          this.setState({
            data: response.data.result,
          });
        })
        .catch((error) => {
          console.log(error);
          history.push("/");
        });

      axios
        .get(
          `${process.env.REACT_APP_BASENAME}sponsor/setting/${this.state.sid}`,
          { headers: authHeader }
        )
        .then((response) => {
          this.setState({
            data1: response.data.result[0],
          });
        })
        .catch((error) => {
          console.log(error);
          // history.push('/')
        });
    } else {
      history.push("/");
    }
  };
  render() {
    const { about, callus, doc, videos, demo } = this.state.data1;
    let result = this.state.data.map((item) => {
      return (
        <Card>
          <div className="profile-header">
            <div className="position-relative">
              <div className="cover-container">
                <img
                  src={`${process.env.REACT_APP_BASENAME}` + item.banner}
                  alt={item.company}
                  className="img-fluid bg-cover w-100 rounded-0 sponsor-image"
                />
              </div>
              <div className="sponsorDetails-profileHeader-button">
                {about == 1 ? <AboutCard sidabout={this.state.sid} /> : null}
                {doc == 1 ? <DocList siddoc={this.state.sid} /> : null}
              </div>
              <div className="align-right">
                {callus == 1 ? <CallUs sidcall={this.state.sid} /> : null}

                {videos == 1 ? <VideoList sidvideo={this.state.sid} /> : null}

                {demo == 1 ? <RequestDemo siddemo={this.state.sid} /> : null}
              </div>
            </div>
          </div>
        </Card>
      );
    });
    return result;
  }
}
export default ProfileHeader;
