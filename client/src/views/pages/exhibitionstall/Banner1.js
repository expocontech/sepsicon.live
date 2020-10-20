import React from "react"
import { Card, CardBody, CardHeader, CardTitle, Row, Col } from "reactstrap"
import Swiper from "react-id-swiper"
import img1 from "../../../assets/img/pages/banner.jpg"
import EventCountdown from "./Countdown"
//import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import * as Icon from "react-feather"
import CommitteeMain from "./CommitteeMain"
import "../../../assets/scss/pages/knowledge-base.scss"
import { Link } from "react-router-dom"
import axios from "axios"
import { history } from "../../../../src/history"

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
    modal: false,
    data: [],
    hicon:[]
  }
  componentDidMount = () => {
    if (sessionStorage.getItem('token') != undefined) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}home/banner`, { headers: authHeader }).then((response) => {
        // console.log(response.data);

        if(response.data.status == true){
          this.setState({
            data: response.data.result
          })
        }
      }).catch((error) => {
        console.log(error);
        history.push('/')
      })

      // axios.get(`${process.env.REACT_APP_BASENAME}home/icon`, { headers: authHeader }).then((response) => {
      //   // console.log(response.data);

      //   if(response.data.status == true){
      //     this.setState({
      //       hicon: response.data.result
      //     })
      //   }
      // }).catch((error) => {
      //   console.log(error);
      //   history.push('/')
      // })

      axios.get(`${process.env.REACT_APP_BASENAME}home/message`, { headers: authHeader }).then((response) => {
        // console.log(response.data.result[0].image);
        // const res = response.data
        this.setState({
          message: response.data.result[0].message
        })
        // console.log("img",img)

      }).catch((error) => {
        console.log(error);
        history.push('/')
      })
    }
    else {
      history.push('/')
    }



  }
  render() { 
    // const { img1, img2, img3, img4 } = this.state

    return (

      <Row>
        <Col sm="12">
          <Card>
            <CardBody>

              <Swiper {...params}>

                {this.state.data.map(item => (
                  <div>
                    <img src={`${process.env.REACT_APP_BASENAME}` + item.image} alt="swiper " className="img-fluid" />
                  </div>
                ))}
                {/* <div>
                  <img src={img2} alt="swiper 2" className="img-fluid" />
                </div>
                <div>
                  <img src={img3} alt="swiper 3" className="img-fluid" />
                </div>
                <div>
                  <img src={img4} alt="swiper 4" className="img-fluid" />
                </div> */}
                {/* <div>
                  <img src={img5} alt="swiper 5" className="img-fluid" />
                </div> */}
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

        <Col sm="8">
          <Card>
            <CardHeader>
              <CardTitle>Welcome Message</CardTitle>
            </CardHeader>
            <CardBody>
              <p style={{ textAlign: "justify", fontWeight: "500", letterSpacing: "2" }}>{this.state.message}</p>
              {/* <p style={{ textAlign: "justify", fontWeight: "500", letterSpacing: "2" }}>Digital Diabetes Summit 2020 (DDS) is committed to promoting development and use of technology in the fight against diabetes.<br /><br />
      The DDS mission is to spearhead collaborative efforts by experts in academia, clinical practice, industry, and Govt. agencies to accelerate development of practical technology for treating, monitoring, diagnosing, and preventing diabetes mellitus and its complications.<br /><br />
      DDS is an annual conference where the best of the minds in diabetes care get together in order to re-examine existing methods and their efficacy, and to enable practitioners to provide exceptional diabetes care with newer technologies.<br /><br />
      DDS is an ideal platform to share and exchange innovative ideas that can improve clinical outcomes in diabetes care. It is a conclave for Practitioners, Govt. agencies, Scientists, Tech. companies and Industry leaders to share advances in technology and translate it into improved clinical outcomes. </p> */}
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Row>
            {/* <EventCountdown /> */}
            <Col lg="6" sm="6" xs="6">
              <Link to="/pages/scientifichall1"><StatisticsCard
                hideChart
                iconBg="primary"
                icon={<Icon.Video className="primary" size={22} />}
                statTitle="View Live"
              /></Link>
            </Col>
            <Col lg="6" sm="6" xs="6">
              <Link to="/pages/programme"><StatisticsCard
                hideChart
                iconBg="success"
                icon={<Icon.FileText className="success" size={22} />}
                statTitle="Programme"
              /></Link>
            </Col>

            {/* {this.state.hicon.map(item => (
              <Col lg="6" sm="6" xs="6">
                <Link to={item.iconlink}><StatisticsCard
                  hideChart
                  iconBg={item.iconbg}
                  icon={"<"+item.iconsetting+" />"}
                  statTitle={item.title}
                /></Link>
              </Col>
            ))} */}
            {/* <Col lg="6" sm="6" xs="6">
              <Link to="/pages/faculty"><StatisticsCard
                hideChart
                iconBg="warning"
                icon={<Icon.Users className="warning" size={22} />}
                statTitle="Faculty"
              /></Link>
            </Col>
            <Col lg="6" sm="6" xs="6">
              <Link to="/pages/sponsor"><StatisticsCard
                hideChart
                iconBg="danger"
                icon={<Icon.Star className="danger" size={22} />}
                statTitle="Sponsor"
              /></Link>
            </Col> */}
          </Row>
        </Col>
        <Col sm="12">
          <CommitteeMain />
        </Col>
      </Row>

    )
  }
}

export default Banner
