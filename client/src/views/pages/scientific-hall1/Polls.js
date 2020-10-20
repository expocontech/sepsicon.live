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
import { FaSignal } from "react-icons/fa";
import * as Icon from "react-feather"
import { history } from "../../../../src/history"
import Radio from "../../../components/@vuexy/radio/RadioVuexy"
import axios from "axios"

class Polls extends React.Component {
  state = {
    activeTab: "1",
    modal: false,
    question: '',
    o1: '',
    o2: '',
    o3: '',
    o4: '',
    res: '',
    queid: '',
    id: '',
    message: '',
    hallid: '',
    data: []
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  componentDidMount = () => {
    console.log("hall id at question", this.props.hallidpolls)
    this.setState({
      hallid: this.props.hallidpolls
    })
  }

  handlePolls = (e) => {
    e.preventDefault();

    const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
    const uid = sessionStorage.getItem('uid').toString();
    const hallid = this.props.hallidpolls


    var newObj = []
    var ele = document.getElementsByTagName('input');

    if (ele.length <= 0) {
      this.setState({
        message: "Please select answer!"
      })
    }
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type = "radio") {
        if (ele[i].checked) {
          newObj.push({
            "hallid": hallid,
            "uid": uid,
            "qid": ele[i].id,
            "ans": ele[i].value
          })
        }
      }
    }
    const data = {
      "obj": newObj,
      "hallid": hallid,
      "uid": uid
    };

    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.post(`${process.env.REACT_APP_BASENAME}poll/result`, data, { headers: authHeader })
        .then(
          response => {
            this.setState({
              message: response.data.message,
              modal:false
            });

          }
        ).catch((error) => {
          console.log(error)
        });
    }
    else {
      history.push('/');
    }
  }

  getPolls = () => {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}poll/question/${this.props.hallidpolls}`, { headers: authHeader }).then(
        response => {
          this.setState({
            data: response.data.result
          });
        }
      ).catch((error) => {
        console.log(error)
      });
    }
    else {
      history.push('/');
    }
  }

  componentDidMount = () => {
    this.getPolls()
    // this.interval = setInterval(() => {
    //   this.getPolls()
    // }, 1000);
  }

  render() {
    return (
      <React.Fragment>
        <Form inline onSubmit={e => e.preventDefault()}>
          <Button color="primary" className="btn-icon mr-1"
            onClick={this.toggleModal}>
            <FaSignal /> Polls
              </Button>

        </Form>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className} className="modal-dialog-centered" >

          <ModalHeader toggle={this.toggleModal}>
            Polls
                  </ModalHeader>


          <span className="text-danger">{this.state.message}</span>


          {/* <input type="hidden" value={th onChange={e => this.setState({ queid: e.target.value })} /> */}
          <ModalBody>
            <Form onSubmit={this.handlePolls}>
              {this.state.data.map(item => (
                <div>
                  <p>{item.question}</p>
                  <input type="radio" name={item.question} id={item.id} value="1" className="py-50" color="primary" required/> {item.o1} <br />
                  <input type="radio" name={item.question} id={item.id} value="2" className="py-50" color="primary" required/> {item.o2} <br />
                  <input type="radio" name={item.question} id={item.id} value="3" className="py-50" color="primary" required/> {item.o3} <br />
                  <input type="radio" name={item.question} id={item.id} value="4" className="py-50" color="primary" required/> {item.o4} <br />
                  < br />
                </div>
              ))}
              <Button.Ripple type='submit' color="success">
                Submit
              </Button.Ripple>
            </Form>
          </ModalBody>



        </Modal>
      </React.Fragment >
    )
  }
}
export default Polls
