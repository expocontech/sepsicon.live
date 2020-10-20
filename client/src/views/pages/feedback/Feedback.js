import React from "react"
import { Row, Col, CardBody, Card } from "reactstrap"
import ExtensionsHeader from "../../../extensions/extensionsHeader"
import FeedbackForm from "./FeedbackForm"

class Feedback extends React.Component {
  render() {
    return (
      <React.Fragment>
      <h1 className="mt-1 mb-2">Feedback</h1>
      {/* <ExtensionsHeader
        title="Add Registration"
      /> */}
        <Row>
          <Col sm="12">
            <FeedbackForm />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Feedback
