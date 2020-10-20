import React from "react"
import { Row, Col } from "reactstrap"
import PasteventsMain from "./PasteventsMain"
import "../../../assets/scss/pages/knowledge-base.scss"

class Pastevents extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <PasteventsMain />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Pastevents
