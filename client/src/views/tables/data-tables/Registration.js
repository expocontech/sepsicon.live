import React from "react"
import { Row, Col } from "reactstrap"
import ExtensionsHeader from "../../../extensions/extensionsHeader"
import RegistrationList from "./RegistrationList"

class Registration extends React.Component {
  render() {
    return (
      <React.Fragment>
      <ExtensionsHeader
        title="Registration List"
      />
        <Row>
          <Col sm="12">
            <RegistrationList />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Registration
