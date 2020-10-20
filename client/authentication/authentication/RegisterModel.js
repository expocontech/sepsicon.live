import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Tooltip,
  ModalFooter,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Input,
  Label,
  Form,
  FormGroup
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { FaUsers } from "react-icons/fa";
import * as Icon from "react-feather"
import { history } from "../../../history"
import "../Pulse_Blue.css"

class Register extends React.Component {
  state = {
    activeTab: "1",
    modal: false
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <React.Fragment>  
          <div id="agenda" style={{position: "absolute", left: "70.1%", width: "14%", height: "20.6%", top: "67.9%", cursor: "pointer", WebkitTransform: "rotate(-1deg)"}} 
      onClick={this.toggleModal}>
          <span className='hint' style={{ height: "10px", width: "10px" }}></span>
      </div>    
               
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered model-lg" >
            <ModalHeader toggle={this.toggleModal}>SIGN UP
          </ModalHeader>
           <ModalBody>
           <Form>
                      <Row>
                      <Col md="6" sm="12">
                        <FormGroup>
                          <Label> Name </Label>
                          <Input name="name" type="text" required />
                        </FormGroup>
                      </Col>
                      <Col md="6" sm="12">
                        <FormGroup>
                          <Label> Email ID </Label>
                          <Input name="emailid" type="email" required />
                        </FormGroup>
                      </Col> 
                      <Col md="6" sm="12">
                      <FormGroup>
                        <Label>Mobile No</Label>
                        <Input type="text" placeholder="Mobile No" required />
                      </FormGroup>
                      </Col>
                      <Col md="6" sm="12">
                      <FormGroup>
                        <Label>State</Label>
                        <Input type="text" placeholder="State" required />
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
      </React.Fragment>
    )
  }
}
export default Register
