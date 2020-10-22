import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Input,
  Label,
  Form,
  FormGroup
} from "reactstrap"
import { ChevronDown } from "react-feather"
import { history } from "../../../history"
import "../Pulse_Blue.css"
import axios from "axios"
import  * as actions from "../../../redux/actions/auth/cometChatAction";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { COMETCHAT_CONSTANTS } from "../../../consts";


class Register extends React.Component {
  state = {
    activeTab: "1",
    modal: false,
    email: "",
    name: "",
    designation: null,
    institute: "",
    mobile: "",
    fmessage: '',
    rmessage: '',
    stateval: '',
    cityval: '',
    data: ''
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }


  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BASENAME}eventsetting/state`)
      .then(
        (response) => {
          if (response.data.status == true && response.data.flag == 1) {
            this.setState({
              data: response.data.result
            })
          }
          else {
            this.setState({
              message: "Some error with server"
            })
          }
        }

      ).catch((error) => {
        history.push('/')
        console.log(error)
      })
  }


  handleRegister = (e) => {
    e.preventDefault();
    console.log("Register called");
    const data = {
      email: this.state.email.trim(), name: this.state.name.trim(),
      institute: this.state.institute.trim(), mobile: this.state.mobile.trim(), city: this.state.cityval.trim(), state: this.state.stateval.trim()
    };

    axios.post(`${process.env.REACT_APP_BASENAME}signup`, data).then(
      (response) => {
        // history.push('/')
        if (response.data.status == true) {
         // this.props.onSignUp(response.data.uid, COMETCHAT_CONSTANTS.AUTH_KEY);

          sessionStorage.setItem('remail', this.state.email);
          sessionStorage.setItem('rstatus', "Registered Successfully, Please Login!");
          sessionStorage.setItem('token', response.data._token);
          sessionStorage.setItem('uid', response.data.uid);
          sessionStorage.setItem('name', response.data.name);
          sessionStorage.setItem('designation', response.data.designation);
          sessionStorage.setItem('institute', response.data.institute);
          sessionStorage.setItem('email', response.data.email)
          sessionStorage.setItem('mobile', response.data.mobile)
          //history.push("/pages/home")

          window.location="/pages/home"

          // history.push('/');
          this.setState({
            modal: false,
            email: "",
            name: "",
            designation: null,
            institute: "",
            mobile: "",
            stateval: '',
            cityval: '',
            data: ''
          })
        }
        else {
          this.setState({
            'fmessage': "Not Registered"
          })
        }
      }
    ).catch((error) => {
      history.push('/');
    })
  }
  checkEmail = (emailval) => {
    console.log(`Email ${emailval}`);
    if (emailval == '') {
      document.getElementById('txtemail').focus();
      this.setState({
        fmessage: "Email must required",
        rmessage: ''
      })
    }
    else {
      axios.get(`${process.env.REACT_APP_BASENAME}signup/${emailval}`).then(
        response => {
          console.log(response.data);
          if (response.data.flag != 1) {
            console.log("In condiition")
            // email.focus();
            document.getElementById('txtemail').focus();
            this.setState({
              fmessage: response.data.message,
              rmessage: '',
              email: ''
            })
          }
          else {
            this.setState({
              rmessage: response.data.message,
              fmessage: ''
            })
          }


        }
      ).catch((error) => {

      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <div id="agenda" style={{ position: "absolute", left: "70.1%", width: "14%", height: "20.6%", top: "51%", cursor: "pointer", WebkitTransform: "rotate(-1deg)" }}
          onClick={this.toggleModal}>
          <span className='hint' style={{ height: "15px", width: "15px" }}></span>
        </div>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered model-lg" >
          <ModalHeader toggle={this.toggleModal}>SIGN UP
          </ModalHeader>
          <ModalBody>
            <span className="text-danger">{this.state.fmessage}</span>
            <span className="text-success">{this.state.rmessage}</span>
            <Form onSubmit={this.handleRegister}>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label> Name </Label>
                    <Input
                      type="text"
                      placeholder="Name"
                      required
                      value={this.state.name}
                      onChange={e => this.setState({ name: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label> Email ID </Label>
                    <Input
                      type="email"
                      id="txtemail"
                      placeholder="Email"
                      required
                      value={this.state.email}
                      onBlur={() => this.checkEmail(this.state.email)}
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label>Mobile No</Label>
                    <Input
                      type="number"
                      placeholder="Mobile No"
                      required
                      value={this.state.mobile}
                      onChange={e => this.setState({ mobile: e.target.value })}
                    />

                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label>Institute</Label>
                    <Input
                      type="text"
                      placeholder="Institute"
                      required
                      value={this.state.institute}
                      onChange={e => this.setState({ institute: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label>City</Label>
                    <Input
                      type="text"
                      placeholder="City"
                      required
                      value={this.state.cityval}
                      onChange={e => this.setState({ cityval: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label>State</Label>
                    {/* <Input type="text" placeholder="State" required /> */}
                    <Input type="select" value={this.state.stateval} onChange={e => this.setState({ stateval: e.target.value })}>
                      <option value="0">Select State</option>
                      {this.state.data.length > 0 ? this.state.data.map((v) => <option value={v.name}>{v.name}</option>) : <option value='0'>--Select--</option>}
                    </Input>
              {/* <div className="form-control-position">
                <ChevronDown size={20} />
              </div> */}
                  </FormGroup>
                </Col>
              </Row>
              <div className="float-md-left d-block mb-1">
                <Button.Ripple style={{ display: "none" }}> </Button.Ripple>
              </div>
              <div className="float-md-right d-block mb-1">
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="px-75 btn-block"
                >
                  Login
                        </Button.Ripple>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    isLoggedIn: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: ( uid, authKey ) => dispatch( actions.auth( uid, authKey ) )
  };
};

export default connect( mapStateToProps, mapDispatchToProps ) (Register);
