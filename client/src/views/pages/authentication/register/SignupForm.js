import React from "react"
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import { connect } from "react-redux"
import  * as actions from "../../../../redux/actions/auth/cometChatAction";
import { Redirect } from 'react-router-dom';
import { COMETCHAT_CONSTANTS } from "../../../../consts";
//import { signupWithJWT } from "../../../../redux/actions/auth/registerActions"
import { history } from "../../../../history"
import axios from "axios"


class SignupForm extends React.Component {
  state = {
    email: "",
    name: "",
    designation: "",
    institute: "",
    mobile: "",
    weburl: '',
    fmessage: '',
    rmessage: '',
    gtmwstatus: '',
    stateval: '',
    specilityval: '',
    cityval: '',
    data: ''

  }
  componentDidMount = () => {
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

    axios.get(`${process.env.REACT_APP_BASENAME}eventsetting/state`).then(
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
      email: this.state.email.trim(), 
      name: this.state.name.trim(),
      institute: this.state.institute.trim(), 
      mobile: this.state.mobile.trim(),
       city: this.state.cityval.trim(), 
       state: this.state.stateval.trim()
    };

    axios.post(`${process.env.REACT_APP_BASENAME}signup`, data).then(
      (response) => {
        // history.push('/')
        console.log(response.data)
        if (response.data.status == true) {
          this.props.onSignUp(response.data.uid, COMETCHAT_CONSTANTS.AUTH_KEY);
          sessionStorage.setItem('token',response.data._token)
          sessionStorage.setItem('remail', this.state.email);
          sessionStorage.setItem('uid', response.data.uid);
          sessionStorage.setItem('name', response.data.name);
          sessionStorage.setItem('designation', response.data.designation);
          sessionStorage.setItem('institute', response.data.institute);
          sessionStorage.setItem('email', response.data.email)
          sessionStorage.setItem('mobile', response.data.mobile)
          sessionStorage.setItem('rstatus', "Registered Successfully, Please Login!");
          //window.location.href='/pages/home';
          window.location="/pages/home"

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
      <Form action='/pages/home' onSubmit={this.handleRegister}>
        <span className="text-danger">{this.state.fmessage}</span>
        <span className="text-success">{this.state.rmessage}</span>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Name"
            required
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <Label>Name</Label>
        </FormGroup>
        {/* <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Designation"
            required
            value={this.state.designation}
            onChange={e => this.setState({ designation: e.target.value })}
          />
          <Label>Designation</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Institute"
            required
            value={this.state.institute}
            onChange={e => this.setState({ institute: e.target.value })}
          />
          <Label>Institute</Label>
        </FormGroup> */}
        <FormGroup className="form-label-group">
          <Input
            type="email"
            id="txtemail"
            placeholder="Email"
            required
            value={this.state.email}
            onBlur={() => this.checkEmail(this.state.email)}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Label>Email</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="number"
            placeholder="Contact No"
            required
            value={this.state.mobile}
            onChange={e => this.setState({ mobile: e.target.value })}
          />
          <Label>Contact No</Label>
        </FormGroup>

        <FormGroup className="form-label-group">
        <Input
            type="text"
            placeholder="Place"
            required
            value={this.state.cityval}
            onChange={e => this.setState({ cityval: e.target.value })}
          />
          <Label>Place</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input type="select" required className='form-control' value={this.state.stateval} onChange={e => this.setState({ stateval: e.target.value })}>
            <option value="0">Select State</option>
            {this.state.data.length > 0 ? this.state.data.map((v) => <option value={v.name}>{v.name}</option>) : <option value='0'>--Select--</option>}
          </Input>
          <Label>State</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
        <Input
            type="text"
            placeholder="Institute"
            required
            value={this.state.institute}
            onChange={e => this.setState({ institute: e.target.value })}
          />
          <Label>Institute</Label>
        </FormGroup>
        {/* <FormGroup className="form-label-group">
          <Input type="select" required className='form-control' value={this.state.specilityval} onChange={e => this.setState({ specilityval: e.target.value })}>
            <option value="0">Select Speciality </option>
            <option disabled="" selected="" value="0">--Select--</option>
            <option value="Medicine">Medicine</option>
            <option value="Anaesthesia">Anaesthesia</option>
            <option value="Chest">Chest</option>
            <option value="Other">Other</option>
          </Input>
          <Label>Speciality</Label>
        </FormGroup> */}
        <Row>
          {/* <Col md="12" sm="12">
            <FormGroup>
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label=" I accept the terms & conditions."
                defaultChecked={true}
              />
            </FormGroup>
          </Col> */}
          <Col md="12" sm="12">
            <div className="d-flex justify-content-between">
              <Button.Ripple
                color="primary"
                outline
                onClick={() => {
                  history.push("/")
                }}
              >
                Login
          </Button.Ripple>
              <Button.Ripple color="primary" type="submit">
                Register
          </Button.Ripple>
            </div>
          </Col>
        </Row>
        {this.state.gtmwstatus ? <div className="d-flex justify-content-between">
          <Col sm="12" xl="12" lg="12" md="12" style={{ textAlign: "center",display:"none" }}>
            <a href={this.state.weburl} className="btn btn-success" target="_blank" style={{ marginTop: "20px" }}>
              Go to main website!</a></Col>
        </div> : null}

      </Form>
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

export default connect( mapStateToProps, mapDispatchToProps ) (SignupForm)
