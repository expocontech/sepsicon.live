import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import axios from "axios";
import { history } from "../../../history"

class ViewDoc extends React.Component {
  state = {
    activeTab: "1",
    modal: false,
    docid: this.props.docid,
    spid: this.props.sponsorid,
    doc: '',
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
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor/doc-get?docid=${this.state.docid}`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            // data: response.data.result
            doc: response.data.result[0].pdf,
            title: response.data.result[0].title
          });
        }
      )
        .catch((error) => {
          console.log(error);
          // history.push('/')
        });
    }
    else {
      history.push('/')
    }

  }


  handleDocClick = (docid) => {

    this.setState(prevState => ({
      modal: !prevState.modal
    }))
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      const data = {
        "sponsorid": this.state.spid,
        "docid": docid,
        "userid": sessionStorage.getItem('uid').toString()
      }
      axios.post(`${process.env.REACT_APP_BASENAME}sponsor/doc-count`, data, { headers: authHeader }).then(response =>
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
        <Button.Ripple className="mr-1" color="relief-dark" onClick={() => this.handleDocClick(this.state.docid)}>View</Button.Ripple>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className} className="modal-dialog-centered modal-lg" >
          <ModalHeader toggle={this.toggleModal}>
            {this.state.title}
          </ModalHeader>
          <ModalBody>
            <iframe src={`${process.env.REACT_APP_BASENAME}` + this.state.doc} width="100%" height="450px"></iframe>
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}
export default ViewDoc
