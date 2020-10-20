import React from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
// import ExtensionsHeader from "../../../extensions/extensionsHeader"
import DelegateView from "./DelegateView"

class Delegate extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <DelegateView />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Delegate
