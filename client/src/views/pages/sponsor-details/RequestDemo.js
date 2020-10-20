import React from "react"
import { Button } from "reactstrap"
import SweetAlert from 'react-bootstrap-sweetalert';
import { FaInfoCircle } from "react-icons/fa";
import axios from "axios";
import { history } from "../../../history"

class RequestDemo extends React.Component {
  state = {
    successAlert: false,
    errorAlert: false,
    infoAlert: false,
    warningAlert: false,
    uid: sessionStorage.getItem('uid').toString(),
    spid: this.props.siddemo,
    message: ''
  }

  handleConfirm = (state, value) => {
    this.setState({
      [state]: value
    })
  }
  handleAlert = (state, value) => {
    this.setState({
      [state]: value,
    })
    if (sessionStorage.getItem('token') != null) {
      this.setState({ [state]: value })
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor/demo?sponsorid=${this.state.spid}&uid=${this.state.uid}`, { headers: authHeader }).then(
        response => {
          if (response.data.status) {
            this.setState({
              message: response.data.message
            });
          }
        }
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
        <Button color="primary" className="btn-icon mr-1" onClick={() => this.handleAlert("successAlert", true)}>  <FaInfoCircle /> Request Demo</Button>
        <SweetAlert success title="Success" show={this.state.successAlert} onConfirm={() => this.handleConfirm("successAlert", false)} >
          <p className="sweet-alert-text">{this.state.message}</p>
        </SweetAlert>
      </React.Fragment>
    )
  }
}
export default RequestDemo
