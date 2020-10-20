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
import "../Pulse_Blue.css"
import Register from "./RegisterModel"

class WelcomeVideo extends React.Component {
  state = {
    modal: false
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
}
  render() {
    return (
      <Row className="m-0 justify-content-center" >
        <div className="welcomvideo" style={{position: "absolute", left: "13.4%", width: "16.3%", height: "20.3%", top: "67.2%", cursor: "pointer"}} onClick={this.toggleModal} >
        <span className='hint' style={{ height: "10px", width: "10px" }}></span>
                </div>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered " >
            <ModalHeader toggle={this.toggleModal}>Login
          </ModalHeader>
           <ModalBody>
           <Form>
                      <Row>
                      <Col md="12" sm="12">
                        <FormGroup>
                          <Label> Email ID </Label>
                          <Input name="emailid" type="email" required />
                        </FormGroup>
                      </Col> 
                      <Col md="12" sm="12">
                      <FormGroup>
                        <Label>Password</Label>
                        <Input type="text" placeholder="Password" required />
                      </FormGroup>
                      </Col>
                      </Row>
                      <div className="float-md-left d-block mb-1">
                        <Button.Ripple style={{display:"none"}}> </Button.Ripple>
                      </div>
                      <div className="float-md-right d-block mb-1">
                        <Button.Ripple
                          color="primary"
                          type="submit"
                          className="px-75 btn-block"
                          onClick={e => {
                            e.preventDefault()
                            history.push("/")
                          }}
                        >
                          Login
                        </Button.Ripple>
                      </div>
                    </Form>
          </ModalBody>
        </Modal>
        {/* <Col lg="4" md="12" className="p-0">
              <img src={banner} alt="fgImg" width="100%" />
                <Card className="rounded-0 mb-0 px-2 py-1">
                  <CardBody className="pt-1 pb-0">
                    
                  </CardBody>
                </Card>
              </Col> */}
              <Register/>
      </Row>
    )
  }
}
export default WelcomeVideo
