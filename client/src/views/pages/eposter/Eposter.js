import React from "react"
import { Row, Col } from "reactstrap"
import EposterMain from "./EposterMain"
import "../../../assets/scss/pages/knowledge-base.scss"

class Eposter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <EposterMain />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Eposter
