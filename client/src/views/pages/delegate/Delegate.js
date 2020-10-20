import React from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
// import ExtensionsHeader from "../../../extensions/extensionsHeader"
//import DelegateView from "./DelegateView"
import AttendeeList from "./AttendeeList"

class Delegate extends React.Component {
  render() {
    return (
      <React.Fragment>             
      <h1 className="mt-1 mb-2">Delegate List</h1>
        <Row>
          <Col sm="12">
            <AttendeeList />
            {/* <DelegateView /> */}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Delegate
