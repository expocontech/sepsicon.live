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
  Label
} from "reactstrap"
import { history } from "../../../history"
import axios from "axios"

class ValidateOTP extends React.Component {

  state = {
    otp: '',
    mobile: '',
    message: ''
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      otpval: this.state.otp,
      mobile: sessionStorage.getItem('mobile')
    }
    axios.post(`${process.env.REACT_APP_BASENAME}forgot/otp-validate`, data)
      .then(response => {
        if (response.data.status) {
          // history.push('/')
          // var data = response.data.result[0]

          console.log(response.data)

          this.setState({
            otp: '',
            message: response.data.message
          })
          history.push('/')
        }
        else {
          this.setState({
            message: response.data.message
          })
        }

      })
      .catch(error => {
        console.log(error.message)
      })

  }
  render() {
    return (
      <Row className="m-0 justify-content-center">
        <Col sm="10" xl="10" lg="10" md="8" className="justify-content-center" >
          <Card className="bg-authentication rounded-0 mb-0 w-100">
            <Row className="m-0">

              <Col lg="12" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2 py-1">
                  <CardHeader className="pb-1">
                    <CardTitle>
                      <h4 className="mb-0">VALIDATE THE OTP</h4>
                    </CardTitle>
                  </CardHeader>
                  <span className="text-danger">{this.state.message}</span>
                  <CardBody className="pt-1 pb-0">
                    <Form>
                      <Row>
                        <Col md="6" sm="12">
                        </Col>
                        <Col md="6" sm="12">
                        </Col>
                        <Col md="6" sm="12">
                          <FormGroup>
                            <Label>Submit OTP</Label>
                            <Input type="text" placeholder="Submit OTP" onChange={(e) => this.setState({ otp: e.target.value })} required />
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
                          onClick={this.handleSubmit}
                        >
                          Submit
                        </Button.Ripple>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default ValidateOTP
