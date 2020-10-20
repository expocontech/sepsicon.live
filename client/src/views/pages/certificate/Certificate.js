import React from "react"
import { Card, CardBody, Row, Col } from "reactstrap"
//import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import * as Icon from "react-feather"
import "../../../assets/scss/pages/knowledge-base.scss"
import downloadImg from "../../../assets/img/pages/download/1.jpg"
import downloadImg1 from "../../../assets/img/pages/download/2.jpg"

class Certificate extends React.Component {
  render() {
    return (
        
        
      <Row>
        
        <Col sm="12">
              <h1 className="mt-1 mb-2">Certificate</h1>
          {/* <Card className="mt-1">
            <CardBody className="knowledge-base-bg">
              <h1 className="white">Downloads</h1>
            </CardBody>
          </Card> */}
          {/* <img src={downloadImg} alt="" style={{width: "100%"}}/> */}
          <Row>
        <Col lg="3" sm="6" xs="6">
          
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<Icon.Download className="primary" size={30} />}
              statTitle="First Announcement Brochure"
            />
          </Col>
        <Col lg="3" sm="6" xs="6">
          
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<Icon.Download className="primary" size={30} />}
              statTitle="Second Announcement Brochure"
            />
          </Col>
        <Col lg="3" sm="6" xs="6">
          
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<Icon.Download className="primary" size={30} />}
              statTitle="First Announcement Brochure"
            />
          </Col>
        <Col lg="3" sm="6" xs="6">          
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<Icon.Download className="primary" size={30} />}
              statTitle="First Announcement Brochure"
            />
          </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
export default Certificate
