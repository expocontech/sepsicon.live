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

import QuestionsList from "./QuestionsList"

class LiveView extends React.Component {


  state = {
    modal: false,
    data: [],
    question: '',
    bannerurl: '',
    smessage: '',
    fmessage: ''
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  componentDidMount() {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      fetch(`${process.env.REACT_APP_BASENAME}viewlive/`, { headers: authHeader }).then(results => {
        return results.json();
      }).then(data => {
        // console.log(data);
        this.setState({
          link: data.result[0].livelink,
          banner: `${process.env.REACT_APP_BASENAME}` + data.result[0].livebanner,
          bannerurl: data.result[0].bannerurl
        });
      })
    }
    else {
      history.push('/')
    }
  }

  handleAddQuestion = (e) => {
    e.preventDefault();

    if(this.state.question.trim() == '')
    {
      this.setState({
        smessage: "Please ask a Question!!",
        fmessage:''
      })
    }
    else
    {
      // console.log("Handle Add question")
    const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
    const uid = sessionStorage.getItem('uid').toString();
    const data = { "uidval": uid, "questionval": this.state.question };

    axios.post(`${process.env.REACT_APP_BASENAME}viewlive/askquestion`, data, { headers: authHeader }).then(
      (response) => {
        // console.log("response", response);
        this.setState({
          question: '',
          fmessage: "Your question is submitted",
          smessage:''
        })
      }
    ).catch((error) => {
      console.log("error", error);
    })
    }



  }

  render() {
    const { rowData, columnDefs, defaultColDef, pageSize, link, banner, bannerurl, smessage, fmessage } = this.state
    const name = sessionStorage.getItem('name')
    const institute = sessionStorage.getItem('institute')
    return (
      <Row className="app-user-list">

        <Col sm="12" className="mb-2">
          <a href={bannerurl} target="_blank" >
            <img src={banner} width="100%" />
          </a>
        </Col>
        <Col sm="7">
          <Card className="overflow-hidden">
            <CardBody className="text-center">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  width="100%"
                  height="250"
                  src={link}
                  frameBorder="0"
                  allow="accelerometer autoplay encrypted-media gyroscope picture-in-picture"
                  allowFullScreen
                  title="video"
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm="5">
          <Card>
            <Form action="/pages/liveview" onSubmit={this.handleAddQuestion}>
              <CardBody>
                <div className="d-flex justify-content-start align-items-center mb-1">
                  <div className="user-page-info">
                    <p className="mb-0">{name}</p>
                    <span className="font-small-2">{institute}</span>
                  </div>
                </div>
                <div>
                  <span className="text-danger">{smessage}</span>
                  <span className="text-success">{fmessage}</span>
                </div>
                <fieldset className="form-label-group mb-50">
                  <Input
                    type="textarea"
                    rows="11"
                    placeholder="Ask a Questions"
                    id="add-comment"
                    value={this.state.question}
                    onChange={e => this.setState({ question: e.target.value })}
                  />
                  <Label for="add-comment"></Label>
                </fieldset>
                <Button.Ripple color="success" type="submit">
                  Ask a question
            </Button.Ripple>
              </CardBody>
            </Form>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default LiveView
