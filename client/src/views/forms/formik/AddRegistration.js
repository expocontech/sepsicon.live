import React from "react"
import { Row, Col, CardBody, Card } from "reactstrap"
import ExtensionsHeader from "../../../extensions/extensionsHeader"
import AddRegistrationForm from "./AddRegistrationForm"

class AddRegistration extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Card className="mt-1">
        <CardBody className="knowledge-base-bg">
          <h1 className="white">Registration</h1>
        </CardBody>
      </Card>
      {/* <ExtensionsHeader
        title="Add Registration"
      /> */}
        <Row>
          <Col sm="12">
            <AddRegistrationForm />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default AddRegistration
