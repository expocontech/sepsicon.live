import React from "react"
import { Row, Col } from "reactstrap"
import UpcomingeventsMain from "./UpcomingeventsMain"
import "../../../assets/scss/pages/knowledge-base.scss"

class Upcomingevents extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <UpcomingeventsMain />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Upcomingevents
