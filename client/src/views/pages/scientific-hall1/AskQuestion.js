import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form
} from "reactstrap"
import { GoReport } from "react-icons/go";
import axios from "axios"
import { history } from "../../../history"

class AskQuestion extends React.Component {
  state = {
    activeTab: "1",
    question: '',
    modal: false,
    unmountOnClose: true,
    smessage: '',
    fmessage: ''
  }

  componentDidMount = () => {
    console.log("hall id at question", this.props.hallidquestion)
    this.setState({
      hallid: this.props.hallidquestion
    })
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



  handleAddQuestion = (e) => {
    e.preventDefault();
    if (this.state.question.trim() == '') {
      this.setState({
        fmessage: "Please ask a Question!!",
        smessage: '',
        question: ''
      })
    }
    else {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      const uid = sessionStorage.getItem('uid').toString();
      const data = { "uidval": uid, "questionval": this.state.question, hallid: this.state.hallid };
      console.log(data)
      axios.post(`${process.env.REACT_APP_BASENAME}viewlive/askquestion`, data, { headers: authHeader }).then(
        (response) => {
          // console.log("response", response);
          this.setState({
            question: '',
            smessgae: response.data.message,
            fmessage: ''

          })
          this.toggleModal()
        }
      ).catch((error) => {
        console.log("error", error);
        history.push('/')
      })
    }

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
          <span className="text-danger">{this.state.fmessage}</span>
          <span className="text-success">{this.state.smessage}</span>
          <ModalBody>
            <Input
              type="textarea"
              rows="{5}"
              placeholder="Ask a Questions"
              id="add-comment"
              value={this.state.question}
              onChange={e => this.setState({ question: e.target.value })}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" outline onClick={this.handleAddQuestion}>
              Submit
                    </Button>{" "}
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}
export default AskQuestion
