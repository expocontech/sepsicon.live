import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Star } from "react-feather"
import rockRose from "../../../assets/img/profile/pages/page-09.jpg"
import theDevils from "../../../assets/img/profile/pages/page-08.jpg"
import theMagician from "../../../assets/img/profile/pages/page-03.jpg"
import acDc from "../../../assets/img/profile/pages/page-02.jpg"
import eatHard from "../../../assets/img/profile/pages/page-07.jpg"
import b4B from "../../../assets/img/profile/pages/page-04.jpg"
import kylieJenner from "../../../assets/img/profile/pages/page-05.jpg"
import rDJ from "../../../assets/img/profile/pages/page-01.jpg"
import taylorSwift from "../../../assets/img/profile/pages/page-06.jpg"
import { FaPhoneAlt, FaPhoneSlash, FaCogs, FaSignal, FaCertificate, FaChalkboardTeacher, FaMoneyCheck, FaTicketAlt, FaAward, FaFileDownload } from "react-icons/fa"

class SuggestedPages extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Video Call to Exhibitor</CardTitle>
        </CardHeader>
        <CardBody className="suggested-block">
        <a href="https://us02web.zoom.us/j/7331131070?pwd=Q0oydFhyejZDYms5dFRsV1BEZmNTUT09" target="_blank"><div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
            <i style={{width: "40px", height: "40px",background: "#06c506",borderRadius:"50%"}}>
              <FaPhoneAlt className="avtar" style={{width: "20px", height: "20px",position: "relative",top: "20%"}} /></i>
              {/* <img
                src={rockRose}
                alt="avtar img holder"
                height="60"
                width="60"
              /> */}
            </div>
            <div className="user-page-info">
              <p>Prof. Krishnan Balasubramaniam</p>
              <span className="font-small-2">IIT Madras</span>
            </div>
          </div></a>
          <a href="https://us02web.zoom.us/j/7331131070?pwd=Q0oydFhyejZDYms5dFRsV1BEZmNTUT09" target="_blank"><div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
            <i style={{width: "40px", height: "40px",background: "#06c506",borderRadius:"50%"}}>
              <FaPhoneAlt className="avtar" style={{width: "20px", height: "20px",position: "relative",top: "20%"}} /></i>
            </div>
            <div className="user-page-info">
              <p>Mr. Shridhar Nath</p>
              <span className="font-small-2">General Electric Research Center</span>
            </div>
          </div> </a>
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
            <i style={{width: "40px", height: "40px",background: "#c70303",borderRadius:"50%"}}><FaPhoneSlash className="avtar" style={{width: "20px", height: "20px",position: "relative",top: "20%"}} /></i>
            </div>
            <div className="user-page-info">
              <p>Mr. Ekkehard Zwicker</p>
              <span className="font-small-2">PhD / CEO GE Inspection Robotics</span>
            </div>
          </div> 
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
            <i style={{width: "40px", height: "40px",background: "#c70303",borderRadius:"50%"}}><FaPhoneSlash className="avtar" style={{width: "20px", height: "20px",position: "relative",top: "20%"}} /></i>
            </div>
            <div className="user-page-info">
              <p>Mr. Diwakar D. Joshi</p>
              <span className="font-small-2">Insight Quality Services</span>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
            <i style={{width: "40px", height: "40px",background: "#c70303",borderRadius:"50%"}}><FaPhoneSlash className="avtar" style={{width: "20px", height: "20px",position: "relative",top: "20%"}} /></i>
            </div>
            <div className="user-page-info">
              <p>Mr. Diwakar D. Joshi</p>
              <span className="font-small-2">Insight Quality Services</span>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default SuggestedPages
