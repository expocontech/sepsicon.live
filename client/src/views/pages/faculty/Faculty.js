import React from "react"
import { Row, Col } from "reactstrap"
import FacultyMain from "./FacultyMain"
import "../../../assets/scss/pages/knowledge-base.scss"

class Faculty extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <FacultyMain />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Faculty
