import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Button,
  Label, Modal, ModalHeader, ModalBody
} from "reactstrap"
import banner from "../../../assets/img/sponsor/login_lobby.jpg"
import { history } from "../../../history"
import "../../../assets/scss/pages/authentication.scss"
import "../Pulse_Blue.css"
import Register from "./RegisterModel"
import axios from "axios"
import ForgotLogout from "./ForgotLogout"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import  * as actions from "../../../redux/actions/auth/cometChatAction";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { COMETCHAT_CONSTANTS } from "../../../consts";


class WelcomeVideo extends React.Component {
  state = {
    modal: false,
    email: "",
    password: "",
    remember: false,
    rstatus: '',
    message: ''
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  // handleChat=()=>{
  //  history.push('/pages/chatRoom')
  // }


  handleLogin = (e) => {
    e.preventDefault();
    console.log("signin called");
    
    const data = { email: this.state.email.trim() };
    axios.post(`${process.env.REACT_APP_BASENAME}auth/signin`, data).then(
      (response) => {
        if (response.data.status == true) {
          this.props.onLogin(response.data.uid, COMETCHAT_CONSTANTS.AUTH_KEY);

          sessionStorage.setItem('token', response.data._token);
          sessionStorage.setItem('uid', response.data.uid);
          sessionStorage.setItem('name', response.data.name);
          sessionStorage.setItem('designation', response.data.designation);
          sessionStorage.setItem('institute', response.data.institute);
          sessionStorage.setItem('email', response.data.email)
          sessionStorage.setItem('bio', response.data.bio)
          sessionStorage.setItem('mobile', response.data.mobile)
          sessionStorage.setItem('web', response.data.web)
          sessionStorage.setItem('gen', response.data.gender)
          sessionStorage.setItem('prevLocationUrl', "/")
          history.push("/pages/home")
        } else {
          // console.log("response error")
          this.setState({
            message: response.data.message,
            rstatus: ''
          })
          history.push('/')
        }
      }
    ).catch((error) => {
      history.push('/')
      this.setState({
        message: "Some error in login",
        rstatus: ''
      })
    })

  }
  render() {
    return (
      // <Row className="m-0 justify-content-center" >
      <Row >
        <img src={banner} alt="lobby" width="100%" className='login-background-banner' style={{backgroundSize: "100%"}}/>
        <div className="welcomvideo" style={{ position: "absolute", left: "8.4%", width: "25.3%", height: "20.3%", top: "51%", cursor: "pointer" }} onClick={this.toggleModal} >
          <span className='hint' style={{ height: "15px", width: "15px" }}></span>
        </div>
        {/* <div className="welcomvideo" style={{ position: "inherit", left: "14.4%", width: "25.3%", height: "20.3%", top: "51%", cursor: "pointer" }} onClick={this.handleChat} >
          <span className='hint' style={{ height: "15px", width: "15px" }}></span>
        </div> */}
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered " >
          <ModalHeader toggle={this.toggleModal}>Login
          </ModalHeader>
          <ModalBody>
            <span className="text-success">{this.state.rstatus}</span>
            <span className="text-danger">{this.state.message}</span>
            <Form onSubmit={this.handleLogin}>
              <Row>
                <Col md="12" sm="12">
                  <FormGroup>
                    <Label> Email ID </Label>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="d-flex justify-content-between align-items-center" >
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Remember me"
                      defaultChecked={false}
                      onChange={this.handleRemember}
                    />
                    {/* <ForgotLogout /> */}
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


       
        {/* <Col lg="4" md="12" className="p-0">
          <img src={banner} alt="fgImg" width="100%" />
          <Card className="rounded-0 mb-0 px-2 py-1">
            <CardBody className="pt-1 pb-0">

            </CardBody>
          </Card>
        </Col> */}
        <Register />
      </Row>
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
    onLogin: ( uid, authKey ) => dispatch( actions.auth( uid, authKey ) )
  };
};


export default connect( mapStateToProps, mapDispatchToProps )(WelcomeVideo);
