import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form
} from "reactstrap"
import * as Icon from "react-feather"
import { history } from "../../../../src/history"

class Agenda extends React.Component {
  state = {
    activeTab: "1",
    modal: false,
    agenda: ''
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  componentDidMount = () => {
    this.setState({
      hallid: this.props.hallidagenda
    })
  }

  componentDidMount = () => {
    const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
    fetch(`${process.env.REACT_APP_BASENAME}scientific/get-agenda/${this.props.hallidagenda}`, { headers: authHeader }).then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        agenda: `${process.env.REACT_APP_BASENAME}` + data.result[0].document
      });
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <React.Fragment>
        <Form inline onSubmit={e => e.preventDefault()}>
          <Button color="primary" className="btn-icon mr-1"
            onClick={this.toggleModal}>
            <Icon.FileText /> Agenda
              </Button>
        </Form>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className} className="modal-dialog-centered modal-lg" >
          <ModalHeader toggle={this.toggleModal}>
            Scientific Agenda
                  </ModalHeader>
          <ModalBody>
            <embed src={this.state.agenda} width="100%" height="450px" />
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}
export default Agenda
