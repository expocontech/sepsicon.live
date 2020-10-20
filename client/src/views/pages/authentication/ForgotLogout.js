import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Button,
  Label, Modal, ModalHeader, ModalBody
} from "reactstrap"
import banner from "../../../assets/img/sponsor/loginbanner.jpg"
import { history } from "../../../history"
import "../../../assets/scss/pages/authentication.scss"
import axios from "axios"

class ForgotLogout extends React.Component {
  state = {
    modal: false,
    email: ''
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }


  sendOTP = () => {
    const data = {
      email: this.state.email
    }
    axios.post(`${process.env.REACT_APP_BASENAME}forgot/get-otp`, data)
      .then(response => {
        console.log(response.data)
        if (response.data.status) {
          sessionStorage.setItem('mobile', response.data.mobile)
          history.push('/pages/validate-otp')
        }

      })
      .catch(error => {
        console.log(error.message)
      })
  }

  render() {
    return (
      <Row className="m-0 justify-content-center" >
        <div className="float-right">
          <a onClick={this.toggleModal}>Forgot to Logout?</a>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered " >
          <ModalHeader toggle={this.toggleModal}>Forgot to Logout
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.sendOTP}>
              <Row>
                <Col md="12" sm="12">
                  <FormGroup>
                    <Label> Email ID </Label>
                    <Input name="email" type="email" required
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <div className="float-md-left d-block mb-1">
                <Button.Ripple style={{ display: "none" }}> </Button.Ripple>
              </div>
              <div className="float-md-right d-block mb-1">
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="px-75 btn-block"
                >
                  Request for OTP
                        </Button.Ripple>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </Row>
    )
  }
}
export default ForgotLogout
