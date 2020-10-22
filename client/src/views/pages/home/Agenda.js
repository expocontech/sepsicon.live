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
  Input,
  Label,
  Form,
  FormGroup
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { FaUsers } from "react-icons/fa";
import * as Icon from "react-feather"
import "../Pulse_Red.css";
import agendapdf from "../../../assets/img/sponsor/agenda.pdf"

class Agenda extends React.Component {
  state = {
    activeTab: "1",
    modal: false,
    tooltipOpen: false
  }

  toggleTooltip = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <React.Fragment>  
          <div id="agenda" style={{position: "absolute", left: "34.1%", width: "5%", height: "15.6%", top: "58.9%", cursor: "pointer"}} 
      onClick={this.toggleModal}>
      <span className="hint" style={{ height: "12px ", width: "12px" }}></span>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="agenda" toggle={this.toggleTooltip}>
      Agenda
   </Tooltip>
      </div>    
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleModal}
                  className={this.props.className} className="modal-dialog-centered modal-lg" >
                  <ModalHeader toggle={this.toggleModal}>
                    Scientific Agenda
                  </ModalHeader>
                  <ModalBody>
            <iframe src={agendapdf} width="100%" height="450px" ></iframe>
                  </ModalBody>
                </Modal>
      </React.Fragment>
    )
  }
}
export default Agenda
