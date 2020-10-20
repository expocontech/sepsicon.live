import React from "react"
import {
  Alert,
  Button,
  Media,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col
} from "reactstrap"
import img from "../../../assets/img/portrait/small/avatar-s-11.jpg"
import axios from "axios"
import { history } from "../../../../src/history"

class General extends React.Component {
  // state = {
  //   visible: true
  // }


  state = {
    visible: true,
  }


  dismissAlert = () => {
    this.setState({
      visible: false
    })
  }

  componentDidMount = () => {
    const name = sessionStorage.getItem('name')
    const email = sessionStorage.getItem('email')
    const company = sessionStorage.getItem('institute')
    this.setState({
      // message:'',
      name: name,
      email: email,
      company: company
    })
  }

  handleCancel = () =>{
    this.setState({
      message:'',
    })
  }

  handleGeneral = (e) => {
    e.preventDefault();
    console.log("General called");
    const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
    const uid = sessionStorage.getItem('uid').toString();
    const name = sessionStorage.getItem('name')
    const email = sessionStorage.getItem('email')
    const company = sessionStorage.getItem('institute')
    var nameval, emailval, companyval
    if (this.state.name == null) {
      nameval = name
    }
    else {
      nameval = this.state.name
      sessionStorage.setItem('name', nameval)
    }
    if (this.state.email == null) {
      emailval = email
    }
    else {
      emailval = this.state.email
      sessionStorage.setItem('email', emailval)
    }
    if (this.state.company == null) {
      companyval = company
    }
    else {
      companyval = this.state.company
      sessionStorage.setItem('institute', companyval)
    }

    const data = { uidval: uid, emailval: emailval, nameval: nameval, companyval: companyval };
    console.log("data", data)
    axios.post(`${process.env.REACT_APP_BASENAME}setting/general`, data, { headers: authHeader }).then(
      (response) => {
        // console.log("response", response);
        // history.push('/pages/account-settings')
        if (response.data.status == true) {
          console.log("Settings updated")
          this.setState({
            message: response.data.message
          })
        }
        else {
          this.setState({
            message: response.data.message
          })
        }
      }
    ).catch((error) => {
      this.setState({
        message: "Some error occured"
      })
    })

  }
  render() {

    return (
      <React.Fragment>
        <Form className="mt-2"  onSubmit={this.handleGeneral}>
          <Row>
            <Col sm="12">
              <span className="text-success">{this.state.message}</span>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="name">Name</Label>
                <Input id="name"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })} />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="email">Email</Label>
                <Input id="email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })} />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="company">Company</Label>
                <Input
                  id="company"
                  value={this.state.company}
                  onChange={e => this.setState({ company: e.target.value })}
                />
              </FormGroup>
            </Col>
            <Col className="d-flex justify-content-start flex-wrap" sm="12">
              <Button.Ripple className="mr-50" color="primary" type="submit">
                Save Changes
              </Button.Ripple>
              <Button.Ripple color="danger" onClick={this.handleCancel}>
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </React.Fragment>
    )
  }
}
export default General
