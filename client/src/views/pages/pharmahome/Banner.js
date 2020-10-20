import React from "react"
import { Card, CardBody, CardHeader, CardTitle, Row, Col, Button } from "reactstrap"
import Swiper from "react-id-swiper"
import img1 from "../../../assets/img/slider/banner-1.jpg"
import img2 from "../../../assets/img/slider/banner-2.jpg"
import img3 from "../../../assets/img/slider/banner-3.jpg"
import img4 from "../../../assets/img/slider/banner-4.jpg"
import img5 from "../../../assets/img/slider/banner-5.jpg"
import EventCountdown from "./Countdown"
//import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import * as Icon from "react-feather"
import { FaSignal, FaFileDownload } from "react-icons/fa"
import CommitteeMain from "./CommitteeMain"
import "../../../assets/scss/pages/knowledge-base.scss"
import speakerimg2 from "../../../assets/img/pages/committee/2.jpg"
import speakerimg3 from "../../../assets/img/pages/committee/3.jpg"
import speakerimg4 from "../../../assets/img/pages/committee/4.jpg"
import programme1 from "../../../assets/img/programme/1.jpeg"
import programme2 from "../../../assets/img/programme/2.jpeg"
import SweetAlert from 'react-bootstrap-sweetalert';

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}

class Banner extends React.Component {


  state = {
    successAlert : false
   }

   handleAlert = (state, value) => {
     this.setState({ [state] : value })
   }

  render() {
    return (
      <Row>
        <Col sm="12">
          <Card>
            <CardBody>
              <Swiper {...params}>
                <div>
                  <img src={img1} alt="swiper 1" className="img-fluid" />
                </div>
                <div>
                  <img src={img2} alt="swiper 2" className="img-fluid" />
                </div>
                <div>
                  <img src={img3} alt="swiper 3" className="img-fluid" />
                </div>
                <div>
                  <img src={img4} alt="swiper 4" className="img-fluid" />
                </div>
                <div>
                  <img src={img5} alt="swiper 5" className="img-fluid" />
                </div>
              </Swiper>
            </CardBody>
          </Card>
        </Col>

        {/* <Col lg="3" sm="6">
            <StatisticsCard
              hideChart
              iconRight
              iconBg="primary"
              icon={<Icon.Video className="primary" size={22} />}
              stat="View Live"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatisticsCard
              hideChart
              iconRight
              iconBg="success"
              icon={<Icon.FileText className="success" size={22} />}
              stat="Programme"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatisticsCard
              hideChart
              iconRight
              iconBg="danger"
              icon={<Icon.Users className="danger" size={22} />}
              stat="Faculty"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatisticsCard
              hideChart
              iconRight
              iconBg="warning"
              icon={<Icon.Star className="warning" size={22} />}
              stat="Sponsors"
            />
          </Col> */}

        <Col sm="7">
          <Card>
             {/* <CardHeader>
                <CardTitle>Bridging Barriers to Therapeutic inertia: Focus on Indian Patient Centric Insulin Therapy”	 Bridging Barriers to Therapeutic inertia: Focus on Indian Patient Centric Insulin Therapy”	</CardTitle>
              </CardHeader> */}
              <CardBody>
              <img src={programme1} className="mx-auto mb-1" width="100%" />
              {/* <p className="font-weight-bold">Thursday, 30 January 2020 : 11:30 - 12:00 </p>
                      <Row>
                      <Col md="3" sm="6" xs="6" className="search-content" >
                        <Card style={{marginBottom: "0px"}}>
                          <CardBody className="text-center">
                              <img src={speakerimg2} className="avatar mx-auto mb-1" width="100%" />
                              <h6>DR. RAKESH SAHAY</h6>
                              <small>Chairperson</small>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="3" sm="6" xs="6" className="search-content" >
                        <Card style={{marginBottom: "0px"}}>
                          <CardBody className="text-center">
                              <img src={speakerimg3} className="avatar mx-auto mb-1" width="100%" />
                              <h6>DR. SANJAY KALRA</h6>
                              <small>Chairperson</small>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="3" sm="6" xs="6" className="search-content" >
                        <Card style={{marginBottom: "0px"}}>
                          <CardBody className="text-center">
                              <img src={speakerimg4} className="avatar mx-auto mb-1" width="100%" />
                              <h6>DR. JAYAPRAKASH SAI</h6>
                              <small>Speaker</small>
                          </CardBody>
                        </Card>
                      </Col>
                      </Row> */}
                      <div className="d-flex justify-content-between">
              <Button.Ripple color="primary" >Download PDF</Button.Ripple>
              <Button.Ripple color="primary" type="submit" onClick={() => this.handleAlert("successAlert", true)}>Register Now</Button.Ripple>

            </div>


              </CardBody>
          </Card>
          <Card>
             {/* <CardHeader>
                <CardTitle>Bridging Barriers to Therapeutic inertia: Focus on Indian Patient Centric Insulin Therapy”	 Bridging Barriers to Therapeutic inertia: Focus on Indian Patient Centric Insulin Therapy”	</CardTitle>
              </CardHeader> */}
              <CardBody>
              <img src={programme2} className="mx-auto mb-1" width="100%" />
              <div className="d-flex justify-content-between">
              <Button.Ripple color="primary" >Download PDF</Button.Ripple>
              <Button.Ripple color="primary" type="submit" onClick={() => this.handleAlert("successAlert", true)}>Register Now</Button.Ripple>
              </div>
              </CardBody>
          </Card>
        </Col>
        <Col sm="5">
          <Row>
          <EventCountdown />
        <Col lg="6" sm="6" xs="6">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<Icon.Video className="primary" size={22} />}
              statTitle="View Live"
            />
          </Col>
        <Col lg="6" sm="6" xs="6">
            <StatisticsCard
              hideChart
              iconBg="success"
              icon={<Icon.FileText className="success" size={22} />}
              statTitle="Programme"
            />
          </Col>
        <Col lg="6" sm="6" xs="6">
            <StatisticsCard
              hideChart
              iconBg="warning"
              icon={<FaFileDownload className="warning" size={22} />}
              statTitle="Download"
            />
          </Col>
        <Col lg="6" sm="6" xs="6">
            <StatisticsCard
              hideChart
              iconBg="danger"
              icon={<FaSignal className="danger" size={22} />}
              statTitle="Survey"
            />
          </Col>
          </Row>
        </Col>
        {/* <Col sm="12">
            <CommitteeMain />
          </Col> */}

        <SweetAlert success title="Registration Successful" show={this.state.successAlert}
          onConfirm={() => this.handleAlert("successAlert", false)} >
            {/* <p className="sweet-alert-text">You clicked the button!</p> */}
        </SweetAlert>
      </Row>
    )
  }
}
export default Banner
