import React from "react"
import { Card, CardBody } from "reactstrap"
import AskQuestion from "./AskQuestion"
import Agenda from "./Agenda"
import AttendeeList from "./AttendeeList"
import Polls from "./Polls"
import { history } from "../../../history"
import axios from "axios"
import "../../../assets/scss/pages/ProfileHeader.css";
class ProfileHeader extends React.Component {
  state = {
    modal: false,
    link: '',
    backbanner: '',
    pollstatus: '',
    astatus: '',
    qstatus: '',
    agendastatus: '',
    yleft: '',
    ywidth: '',
    yheight: '',
    ytop: '',
    hallid: ''
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  componentDidMount() {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      fetch(`${process.env.REACT_APP_BASENAME}scientific/get-banner/${this.props.hallid}`, { headers: authHeader }).then(results => {
        return results.json();
      }).then(data => {
        // console.log(data);
        this.setState({
          link: data.result[0].livelink,
          backbanner: `${process.env.REACT_APP_BASENAME}` + data.result[0].backbanner,
          yleft: data.result[0].yleft,
          yheight: data.result[0].yheight,
          ywidth: data.result[0].ywidth,
          ytop: data.result[0].ytop,
          hallid: data.result[0].hallid
        });
      }).then(() => {
        var data1 = {
          "hallid": this.state.hallid,
          "userid": sessionStorage.getItem('uid').toString()
        }
        // console.log(data1);
        const authHeader1 = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
        axios.post(`${process.env.REACT_APP_BASENAME}viewlive/hallcount`, data1, { headers: authHeader1 }).then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error);
        })
      })
    }
    else {
      history.push('/')
    }

    axios.get(`${process.env.REACT_APP_BASENAME}eventsetting`).then(
      (response) => {

        if (response.data.status == true) {
          this.setState({
            pollstatus: response.data.pollbutton,
            astatus: response.data.attendeebutton,
            qstatus: response.data.qbutton,
            agendastatus: response.data.agendabutton
          })
        }

      }
    ).catch((error) => {
      console.log(error)
      history.push('/')
      this.setState({
        message: "Some error in Server"
      })
    })
  }
  render() {
    return (
      <Card>
        <div className="profile-header">
          <div className="position-relative">
            <div className="cover-container" style={{ position: "absolute", left: this.state.yleft + "%", width: this.state.ywidth + "%", height: this.state.yheight + "% !important", top: this.state.ytop + "%", cursor: "pointer" }} >
              <iframe
                className="embed-responsive-item w-100"
                src={this.state.link}
                allowFullScreen
                title="post"
                frameBorder="0"
                height="100%"
              />
            </div>
            <div className="cover-container">
              <img
                src={this.state.backbanner}
                alt="CoverImg"
                className="img-fluid bg-cover w-100 rounded-0 sponsor-image"
              />
            </div>
            <div className="sponsorDetails-profileHeader-button">
            {this.state.qstatus == 1 ? <AskQuestion hallidquestion={this.props.hallid} /> : null}
            {this.state.pollstatus == 1 ? <Polls hallidpolls={this.props.hallid} /> : null}
            </div>
            <div className="align-right">
            {this.state.astatus == 1 ? <AttendeeList hallidattendee={this.props.hallid} /> : null}
            {this.state.agendastatus == 1 ? <Agenda hallidagenda={this.props.hallid} /> : null}
            </div>
            {/* <div className="profile-img-container d-flex align-items-center justify-content-between" style={{ bottom: "-1rem" }}>
              {this.state.qstatus == 1 ? <AskQuestion hallidquestion={this.props.hallid} /> : null}
              {this.state.pollstatus == 1 ? <Polls hallidpolls={this.props.hallid} /> : null}
              {this.state.astatus == 1 ? <AttendeeList hallidattendee={this.props.hallid} /> : null}
              {this.state.agendastatus == 1 ? <Agenda hallidagenda={this.props.hallid} /> : null}
            </div> */}
          </div>
        </div>
      </Card>
    )
  }
}
export default ProfileHeader
