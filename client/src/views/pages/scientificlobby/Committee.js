import React from "react"
import { Row, Col } from "reactstrap"
import CommitteeMain from "./CommitteeMain"
import "../../../assets/scss/pages/knowledge-base.scss"

class Committee extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <CommitteeMain />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Committee
