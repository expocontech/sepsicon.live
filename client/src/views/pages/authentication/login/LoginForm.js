import React from "react"
import { Link } from "react-router-dom"
import { CardBody, FormGroup, Form, Input, Button, Label, Col } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Mail, Lock, Check, Phone } from "react-feather"
//import { loginWithJWT } from "../../../../redux/actions/auth/loginActions"
import { connect } from "react-redux"
import { history } from "../../../../history"
import axios from "axios"
import  * as actions from "../../../../redux/actions/auth/cometChatAction";
import { Redirect } from 'react-router-dom';
import { COMETCHAT_CONSTANTS } from "../../../../consts";
class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    remember: false,
    ltext: '',
    weburl: '',
    rstatus: '',
    gtmwstat: ''
  }

  componentDidMount = () => {

    if (sessionStorage.getItem('rstatus') != '' && sessionStorage.getItem != '') {
      this.setState({
        email: sessionStorage.getItem('remail'),
        rstatus: sessionStorage.getItem('rstatus'),
        message: ''
      })
    }


    axios.get(`${process.env.REACT_APP_BASENAME}eventsetting`).then(
      // history.push('/pages/liveview')
      (response) => {
        var gtmwstat
        if (response.data.gtmwbutton == 1) {
          gtmwstat = true
        }
        else {
          gtmwstat = false
        }
        // console.log("response", response);
        if (response.data.status == true) {
          this.setState({
            weburl: response.data.weburl,
            ltext: response.data.logintext,
            gtmwstatus: gtmwstat
          })
        }
      }
    ).catch((error) => {
      history.push('/')
      this.setState({
        message: "Some error in login"
      })
    })
  }


  handleLogin = (e) => {
    e.preventDefault();
    console.log("signin called");
    
    const data = { email: this.state.email, mobile: this.state.email};
    axios.post(`${process.env.REACT_APP_BASENAME}auth/signin`, data).then(
      (response) => {
        console.log("response", response.data);
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
      // history.push('/pages/liveview')
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
      <React.Fragment>
        <span className="text-success">{this.state.rstatus}</span>
        <span className="text-danger">{this.state.message}</span>
        <CardBody className="pt-1">
          {/* <Form action="/analytics-dashboard" onSubmit={this.handleLogin}> */}
          <Form action="/pages/home" onSubmit={this.handleLogin}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="text"
                placeholder="Email or Mobile No"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Mail size={15} />  <Phone size={15} />
              </div>
              <Label>Email or Mobile No</Label>
            </FormGroup>
            {/* <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>mobi</Label>
            </FormGroup> */}
            <FormGroup className="d-flex justify-content-between align-items-center" >
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultValue={this.state.email}
                defaultChecked={false}
                onChange={this.handleRemember}
              />
              {/* <div className="float-right">
                <Link to="/pages/forgot-password">Forgot Password?</Link>
              </div> */}
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Button.Ripple color="primary" type="submit">
                Login
              </Button.Ripple>
              <Button.Ripple
                color="primary"
                outline
                onClick={() => {
                  history.push("/pages/register")
                }}
              >
                Register
              </Button.Ripple>
            </div>
          </Form>

          {this.state.gtmwstatus ?
            <div className="d-flex justify-content-between">
              <Col sm="12" xl="12" lg="12" md="12" style={{ textAlign: "center",display:"none" }}>
                <a href={this.state.weburl} className="btn btn-success" target="_blank" style={{ marginTop: "20px" }}>
                  Go to main website!</a></Col>
            </div> : null}
        </CardBody>
      </React.Fragment>
    )
  }
}
// const mapStateToProps = state => {
//   return {
//     values: state.auth.login
//   }
// }
// export default connect(mapStateToProps, { loginWithJWT })(LoginForm)
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
export default connect( mapStateToProps, mapDispatchToProps )(LoginForm)
