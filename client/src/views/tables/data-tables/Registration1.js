import React from "react"
import { Row, Col } from "reactstrap"
import ExtensionsHeader from "../../../extensions/extensionsHeader"
import RegistrationList1 from "./RegistrationList1"

class Registration1 extends React.Component {
  render() {
    return (
      <React.Fragment>
      <ExtensionsHeader
        title="Registration List"
      />
        <Row>
          <Col sm="12">
            <RegistrationList1 />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Registration1
