import React from "react"
import { Row, Col } from "reactstrap"
import SponsorMain from "./SponsorMain"
import "../../../assets/scss/pages/knowledge-base.scss"
import img1 from "../../../assets/img/sponsor/exhibition_bg.jpg"

class Sponsor extends React.Component {
  render() {
    // const mystyle = {
    //   width: "100%",
    //   backgroundColor: "url(" + { img1 } + ")"
    // };
    return (
      <React.Fragment>
        <Row>
          <Col sm="12" style={{backgroundImage: `url(${require("../../../assets/img/sponsor/exhibition_bg11.jpg")})`, backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize
        :"cover"}}>
            <SponsorMain />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Sponsor
