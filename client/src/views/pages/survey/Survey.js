import React from "react"
import { Row, Col } from "reactstrap"
import SurveyMain from "./SurveyMain"
import "../../../assets/scss/pages/knowledge-base.scss"

class Survey extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <SurveyMain />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Survey
