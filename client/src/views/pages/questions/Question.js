import React from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import QuestionView from "./QuestionView"

class Question extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <QuestionView />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Question
