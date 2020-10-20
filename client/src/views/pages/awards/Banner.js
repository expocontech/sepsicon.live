import React from "react"
import { Card, CardBody, CardHeader, CardTitle, Row, Col } from "reactstrap"
//import Swiper from "react-id-swiper"
//import img1 from "../../../assets/img/pages/banner.jpg"
//import EventCountdown from "./Countdown"
//import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
//import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
//import * as Icon from "react-feather"
import CommitteeMain from "./CommitteeMain"
import "../../../assets/scss/pages/knowledge-base.scss"
//import { Link } from "react-router-dom"

class Banner extends React.Component {
  render() {
    return (
      <Row>
        <Col sm="12">
            <CommitteeMain />
          </Col>
      </Row>
    )
  }
}
export default Banner
