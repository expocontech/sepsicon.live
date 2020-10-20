import React from "react"
import { Row, Col } from "reactstrap"
import DownloadMain from "./DownloadMain"
import "../../../assets/scss/pages/knowledge-base.scss"

class Download extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <DownloadMain />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Download
