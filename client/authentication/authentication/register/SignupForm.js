import React from "react"
import { Form, FormGroup, Input, Label, Button, Row, Col } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import { connect } from "react-redux"
import { signupWithJWT } from "../../../../redux/actions/auth/registerActions"
import { history } from "../../../../history"

class SignupForm extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    designation: "",
    institute: "",
    mobile: "",
    couponcode: ""
  }

  handleRegister = e => {
    e.preventDefault()
    this.props.signupWithJWT(
      this.state.email,
      this.state.password,
      this.state.name
    )
  }

  render() {
    return (
      <Form action="/analytics-dashboard" onSubmit={this.handleRegister}> 
      <Row>
      <Col md="6" sm="12">
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
        </Col>
      <Col md="6" sm="12">
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Designation"
            required
            value={this.state.designation}
            onChange={e => this.setState({ designation: e.target.value })}
          />
          <Label>Designation</Label>
        </FormGroup>
        </Col>
      <Col md="6" sm="12">
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
        </Col>
      <Col md="6" sm="12">
        <FormGroup className="form-label-group">
          <Input
            type="email"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Label>Email</Label>
        </FormGroup>
        </Col>
      <Col md="6" sm="12">
        <FormGroup className="form-label-group">
          <Input
            type="number"
            placeholder="Mobile No"
            required
            value={this.state.mobile}
            onChange={e => this.setState({ mobile: e.target.value })}
          />
          <Label>Mobile No</Label>
        </FormGroup>
        </Col>
      <Col md="6" sm="12">
        <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Label>Password</Label>
        </FormGroup>
        </Col>
      <Col md="6" sm="12">
        <FormGroup className="form-label-group">
          <Input
            type="number"
            placeholder="Amount"
            readOnly
            value="500"
          />
          <Label>Amount</Label>
        </FormGroup>
        </Col>
      <Col md="6" sm="12">
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Coupon Code"
            required
            value={this.state.couponcode}
            onChange={e => this.setState({ couponcode: e.target.value })}
          />
          <Label>Coupon Code</Label>
        </FormGroup>
        </Col>
      <Col md="12" sm="12">
        <FormGroup>
          <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label=" I accept the terms & conditions."
            defaultChecked={true}
          />
        </FormGroup>
        </Col>
      <Col md="12" sm="12">
        <div className="d-flex justify-content-between">
          <Button.Ripple
            color="primary"
            outline
            onClick={() => {
              history.push("/pages/login1")
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
            <div className="d-flex justify-content-between">
              <Col sm="12" xl="12" lg="12" md="12" style={{textAlign:"center"}}>
              <a href="http://endocrinesocietyindia.org/" className="btn btn-success" target="_blank" style={{marginTop:"20px"}}>
              Go to main website!</a></Col>
            </div>
      </Form>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.register
  }
}
export default connect(mapStateToProps, { signupWithJWT })(SignupForm)
