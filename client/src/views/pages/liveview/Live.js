import React from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
// import ExtensionsHeader from "../../../extensions/extensionsHeader"
import LiveView from "./LiveView"

class Live extends React.Component {
  render() {
    return (
      <React.Fragment>
          {/* <Card className="mt-1">
            <CardBody className="knowledge-base-bg">
              <h1 className="white">Live View</h1>
            </CardBody>
          </Card> */}
      {/* <ExtensionsHeader
        title="Live View"
      /> */}
        <Row>
          <Col sm="12">
            <LiveView />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Live
