import React from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import Tabs from "./Tabs"
import '../Pulse_Blue.css' 

class Leaderboard extends React.Component {
  render() {
    return (
      <React.Fragment >
        <Row style={{backgroundImage: `url(${require("../../../assets/img/sponsor/empty_hall.jpg")})`, backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize
        :"cover"}}>   
        <Col sm="2"></Col>
          <Col 
          sm="8" style={{paddingTop:"100px"}}>  
      {/* <h1 className="mt-1 mb-2" >Leaderboard</h1> */}
            <Tabs />
            {/* <LeaderboardView /> */}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Leaderboard
