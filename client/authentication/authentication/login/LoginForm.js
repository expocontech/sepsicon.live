import React from "react"
import { Link } from "react-router-dom"
import { CardBody, FormGroup, Form, Input, Button, Label, Col } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Mail, Lock, Check } from "react-feather"
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions"
import { connect } from "react-redux"
import { history } from "../../../../history"
import website from "../../../../assets/img/pages/website.png"

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    remember: false
  }

  handleLogin = e => {
    e.preventDefault()
    this.props.loginWithJWT(      
      this.state.email,
      this.state.password
    )
  }
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          {/* <Form action="/analytics-dashboard" onSubmit={this.handleLogin}> */}
          <Form action="/tables/registrationlist" onSubmit={this.handleLogin}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Mail size={15} />
              </div>
              <Label>Email</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
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
              <Label>Password</Label>
            </FormGroup>
            <FormGroup className="d-flex justify-content-between align-items-center" >
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                onChange={this.handleRemember}
              />
              <div className="float-right">
                <Link to="/pages/forgot-password">Forgot Password?</Link>
              </div>
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Button.Ripple
                color="primary"
                outline
                onClick={() => {
                  history.push("/pages/register")
                }}
              >
                Register
              </Button.Ripple>
              <Button.Ripple color="primary" type="submit">
                Login
              </Button.Ripple>
            </div>
          </Form>
            <div className="d-flex justify-content-between">
              <Col sm="12" xl="12" lg="12" md="12" style={{textAlign:"center"}}>
              <a href="http://endocrinesocietyindia.org/" className="btn btn-success" target="_blank" style={{marginTop:"20px"}}>
              Go to main website!</a></Col>
            </div>
          {/* <img src={website} alt="website" width="100%"/> */}
        </CardBody>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.login
  }
}
export default connect(mapStateToProps, { loginWithJWT })(LoginForm)
