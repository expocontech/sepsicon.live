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
import { GoReport } from "react-icons/go";

class AskQuestion extends React.Component {
  state = {
    activeTab: "1",
    modal: false,
    unmountOnClose: true
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <React.Fragment>
                <Form inline onSubmit={e => e.preventDefault()}>                    
              <Button color="primary" className="btn-icon mr-1"
                    onClick={this.toggleModal}>
                <GoReport /> Ask a Question
              </Button> 
                </Form>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggleModal}
                  className={this.props.className}
                  unmountOnClose={this.state.unmountOnClose} className="modal-dialog-centered modal-lg" >
                  <ModalHeader toggle={this.toggleModal}>
                    Ask a Question
                  </ModalHeader>
                  <ModalBody>
                    <Input
                      type="textarea"
                      placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
                      rows={5}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" outline onClick={this.toggleModal}>
                    Submit
                    </Button>{" "}
                  </ModalFooter>
                </Modal>
      </React.Fragment>
    )
  }
}
export default AskQuestion
