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
          <div id="agenda" style={{position: "absolute", left: "6.1%", width: "16%", height: "12.6%", top: "79.9%", cursor: "pointer", WebkitTransform: "rotate(-7deg)"}} 
      onClick={this.toggleModal}>
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
            <embed src={agendapdf} width="100%" height="450px" />
                  </ModalBody>
                </Modal>
      </React.Fragment>
    )
  }
}
export default Agenda
