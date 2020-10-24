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
import VirtualTourGuidepdf from "../../../assets/img/sponsor/VirtualTourGuide.pdf"

class VirtualTourGuide extends React.Component {
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
          <div id="Virtual" style={{position: "absolute", left: "47.1%", width: "12.5%", height: "8.6%", top: "70.9%", cursor: "pointer"}} 
      onClick={this.toggleModal}>
      <span className="hint" style={{ height: "12px ", width: "12px" }}></span>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="Virtual" toggle={this.toggleTooltip}>
      SEPSICON Tour Guide
   </Tooltip>
      </div>    
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleModal}
                  className={this.props.className} className="modal-dialog-centered modal-lg" >
                  <ModalHeader toggle={this.toggleModal}>
                  SEPSICON Tour Guide
                  </ModalHeader>
                  <ModalBody>
            <iframe src={VirtualTourGuidepdf} width="100%" height="450px" ></iframe>
                  </ModalBody>
                </Modal>
      </React.Fragment>
    )
  }
}
export default VirtualTourGuide
