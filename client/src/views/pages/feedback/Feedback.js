import React from "react"
import { Row, Col, CardBody, Card } from "reactstrap"
import ExtensionsHeader from "../../../extensions/extensionsHeader"
import FeedbackForm from "./FeedbackForm"

class Feedback extends React.Component {
  render() {
    return (
      <React.Fragment>
      {/* <h1 className="mt-1 mb-2">Feedback</h1> */}
      {/* <ExtensionsHeader
        title="Add Registration"
      /> */}
        <Row style={{backgroundImage: `url(${require("../../../assets/img/sponsor/empty_hall.jpg")})`, backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize
        :"cover"}}>   
        <Col sm="2"></Col>
          <Col 
          sm="8" style={{paddingTop:"100px"}}>  
            <FeedbackForm />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Feedback
