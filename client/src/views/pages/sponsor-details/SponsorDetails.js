import React from "react";
import { Row, Col } from "reactstrap";
import ProfileHeader from "./ProfileHeader";
import AboutCard from "./AboutCard";
import SuggestedPages from "./SuggestedPages";
import Posts from "./Posts";
import Videos from "./Videos";
import axios from "axios";
import { history } from "../../../../src/history";

import "../../../assets/scss/pages/users-profile.scss";

class SponsorDetails extends React.Component {
  state = {
    isLoading: false,
  };

  toggleLoading = () => {
    this.setState({
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);

    this.componentDidMount = () => {
      if (sessionStorage.getItem("token") != null) {
        const authHeader = {
          Authorization: "Bearer " + sessionStorage.getItem("token").toString(),
        };

        var data = {
          sponsorid: this.props.match.params.sid,
          userid: sessionStorage.getItem("uid").toString(),
        };

        axios
          .post(`${process.env.REACT_APP_BASENAME}sponsor/stallcount`, data, {
            headers: authHeader,
          })
          .then((response) => {
            console.log("Sponsor stall count", response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        history.push("/");
      }
    };
  };

  render() {
    return (
      <React.Fragment>
        {/* <h1 className="mt-1 mb-2">Sponsor Details</h1> */}
        <div id="user-profile">
          <Row>
            <Col sm="12">
              <ProfileHeader sidheader={this.props.match.params.sid} />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default SponsorDetails;
