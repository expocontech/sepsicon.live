
// export default LiveView
import React from "react"
import {
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  Button,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  Label,
  FormGroup,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap"
import axios from "axios"
import { ContextLayout } from "../../../utility/context/Layout"
import { AgGridReact } from "ag-grid-react"
import {
  ChevronDown
} from "react-feather"
import profileImg from "../../../assets/img/profile/user-uploads/user-01.jpg"
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../assets/scss/pages/users.scss"
import { history } from "../../../../src/history"
//import banner from "../../../assets/img/logo/banner.jpg"
import QuestionsList from "./QuestionsList"
// import { withRouter } from "react-router-dom";
class QuestionView extends React.Component {


  state = {
    modal: false,
    data: [],
    question: ''
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  componentDidMount() {
    // console.log("question state", this.state.question)
    // console.log("After question submit redirect");
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      fetch(`${process.env.REACT_APP_BASENAME}viewlive/`, { headers: authHeader }).then(results => {
        return results.json();
      }).then(data => {
        // console.log(data);
        this.setState({
          link: data.result[0].livelink,
          banner: `${process.env.REACT_APP_BASENAME}` + data.result[0].livebanner
        });
      })
    }
    else {
      history.push('/')
    }
  }

  handleAddQuestion = (e) => {
    e.preventDefault();
    // console.log("Handle Add question")
    const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
    const uid = sessionStorage.getItem('uid').toString();
    const data = { "uidval": uid, "questionval": this.state.question };

    axios.post(`${process.env.REACT_APP_BASENAME}viewlive/askquestion`, data, { headers: authHeader }).then(
      (response) => {
        // console.log("response", response);
        this.setState({
          question : ''
        })
      }
    ).catch((error) => {
      console.log("error", error);
    })

  }

  render() {
    const { rowData, columnDefs, defaultColDef, pageSize, link, banner } = this.state
    const name = sessionStorage.getItem('name')
    const institute = sessionStorage.getItem('institute')
    return (
      <Row className="app-user-list">

        <Col sm="12">
          <QuestionsList />
        </Col>

      </Row>
    )
  }
}

export default QuestionView
