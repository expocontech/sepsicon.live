import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
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
              <Button color="primary" className="btn-icon mr-1"
                    onClick={this.toggleModal}>
                <Icon.FileText /> Agenda
              </Button> 
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleModal}
                  className={this.props.className} className="modal-dialog-centered modal-lg" >
                  <ModalHeader toggle={this.toggleModal}>
                    Scientific Agenda
                  </ModalHeader>
                  <ModalBody>
            <iframe src={agendapdf} width="100%" height="450px"></iframe>
                  </ModalBody>
                </Modal>
      </React.Fragment>
    )
  }
}
export default Agenda
