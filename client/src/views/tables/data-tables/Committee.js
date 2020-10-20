import React from "react"
import { Row, Col } from "reactstrap"
import ExtensionsHeader from "../../../extensions/extensionsHeader"
import CommitteeList from "./CommitteeList"

class Committee extends React.Component {
  render() {
    return (
      <React.Fragment>
      <ExtensionsHeader
        title="Committee List"
      />
        <Row>
          <Col sm="12">
            <CommitteeList />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Committee
