import React, {Component} from "react"
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  Table
} from "reactstrap"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check, Lock } from "react-feather"
class AddRegistrationForm extends React.Component {

  render() {
    return (
        <Card>
          <CardBody>
      <Row>
        <Col sm="12">
          <Form>
            <Row>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" id="name" placeholder="Enter your name" required />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="designation">Designation</Label>
                  <Input type="text" id="designation" placeholder="Enter your designation" required />
                </FormGroup>
              </Col>
              <Col md="12" sm="12">
                <FormGroup>
                  <Label for="institute">Institute</Label>
                  <Input type="text" id="institute" placeholder="Enter your institute" required />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" id="email" placeholder="Enter your email" readOnly />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="mobile">Mobile No</Label>
                  <Input type="text" id="mobile" placeholder="Enter your mobile no" required />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" id="password" placeholder="Enter your password" required />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="mobile">Confirm Password</Label>
                  <Input type="password" id="confirmPassword" placeholder="Enter your password" required />
                </FormGroup>
              </Col>

              <Col
                className="d-flex justify-content-end flex-wrap" sm="12" >
                <Button.Ripple className="" color="primary" type="submit">Submit</Button.Ripple>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
        </CardBody>
      </Card>
    )
  }
}
export default AddRegistrationForm
