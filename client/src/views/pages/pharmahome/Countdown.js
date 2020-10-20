import React from "react"
import {  Card,  CardHeader,  CardBody,  Col } from "reactstrap"
import "../../../assets/scss/pages/coming-soon.scss"
import Countdown from "react-countdown-now"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import "../../../assets/scss/pages/knowledge-base.scss"

class EventCountdown extends React.Component {

  renderTimer = ({ days, hours, minutes, seconds }) => {
    return (
      <React.Fragment>
        
        {/* <Col lg="6" sm="6" xs="6">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={days}
              statTitle="Days"
            />
          </Col>
        <Col lg="6" sm="6" xs="6">
            <StatisticsCard
              hideChart
              iconBg="success"
              icon={hours}
              statTitle="Hours"
            />
          </Col>
        <Col lg="6" sm="6" xs="6">
            <StatisticsCard
              hideChart
              iconBg="warning"
              icon={minutes}
              statTitle="Minutes"
            />
          </Col>
        <Col lg="6" sm="6" xs="6">
            <StatisticsCard
              hideChart
              iconBg="danger"
              icon={days}
              statTitle="Seconds"
            />
          </Col> */}
          {/* style={{border: "2px  solid #000", borderRadius: "10px", padding: "10px 0px 0px 0px"}} */}


        <div className="px-1" style={{border: "2px  solid #000", borderRadius: "10px", padding: "10px 0px 0px 0px"}}>
          <p style={{fontSize:"1.5rem", marginBottom:"0.5rem"}}>{days}</p>
          <p className="bg-amber clockFormat lead px-1 black"> Days </p>
        </div>
        <div className="px-1" style={{border: "2px  solid #000", borderRadius: "10px", padding: "10px 0px 0px 0px"}}>
          <p style={{fontSize:"1.5rem", marginBottom:"0.5rem"}}>{hours}</p>
          <p className="bg-amber clockFormat lead px-1 black"> Hrs </p>
        </div>
        <div className="px-1" style={{border: "2px  solid #000", borderRadius: "10px", padding: "10px 0px 0px 0px"}}>
          <p style={{fontSize:"1.5rem", marginBottom:"0.5rem"}}>{minutes}</p>
          <p className="bg-amber clockFormat lead px-1 black"> Mins </p>
        </div>
        <div className="px-1" style={{border: "2px  solid #000", borderRadius: "10px", padding: "10px 0px 0px 0px"}}>
          <p style={{fontSize:"1.5rem", marginBottom:"0.5rem"}}>{seconds}</p>
          <p className="bg-amber clockFormat lead px-1 black"> Secs </p>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      
        <Col xl="12" md="12">
          <Card className="text-center">
            <CardHeader className="justify-content-center">
              <h2>Next Event Countdown</h2>
            </CardHeader>
              <div className="text-center getting-started pt-2 pb-2 d-flex justify-content-center">
              <Countdown
                  date={Date.now() + 50000000000}
                  renderer={this.renderTimer}
                />
              </div>
          </Card>
        </Col>
    )
  }
}
export default EventCountdown
