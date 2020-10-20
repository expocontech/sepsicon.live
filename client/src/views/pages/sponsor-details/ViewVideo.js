import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"

import axios from "axios";
import { history } from "../../../history"

class ViewVideo extends React.Component {
  state = {
    activeTab: "1",
    modal: false,
    videoid: this.props.vid,
    spid: this.props.sponsorid,
    video: '',
    title: ''
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  componentDidMount = () => {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor/vmodal/${this.state.videoid}`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            video: response.data.result[0].youtubelink,
            title: response.data.result[0].title
          });
        }
      ).catch((error) => {
        console.log(error.message)
        // history.push('/')
      });
    }
  }

  handleDocClick = (vid) => {

    this.setState(prevState => ({
      modal: !prevState.modal
    }))
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      const data = {
        "sponsorid": this.state.spid,
        "videoid": vid,
        "userid": sessionStorage.getItem('uid').toString()
      }
      axios.post(`${process.env.REACT_APP_BASENAME}sponsor/video-count`, data, { headers: authHeader }).then(response =>
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
      <React.Fragment>
        <Button.Ripple className="mr-1" color="relief-dark" onClick={() => this.handleDocClick(this.state.videoid)}>View</Button.Ripple>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className} className="modal-dialog-centered modal-lg" >
          <ModalHeader toggle={this.toggleModal}>
            {this.state.title}
                  </ModalHeader>
          <ModalBody>
            <iframe
              className="embed-responsive-item w-100 height-350"
              src={this.state.video}
              allowFullScreen
              title="post"
              frameBorder="0"
            />
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}
export default ViewVideo
