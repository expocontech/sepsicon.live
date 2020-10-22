import React from "react"
import axios from "axios"
import ScrollToTop from "react-scroll-up"
import { Button,Row,Col } from "reactstrap"
import { Heart, ArrowUp } from "react-feather"
import classnames from "classnames"
import banner from "../../../assets/img/logo/banner.jpg"
import BannerComponent from "./BannerComponent"

const Footer = props => {

  let footerTypeArr = ["sticky", "static", "hidden"]
  return (

    <footer
      className={classnames("footer footer-light", {
        "footer-static": props.footerType === "static" || !footerTypeArr.includes(props.footerType),
        "d-none": props.footerType === "hidden"
      })} style={{background:"#fff",color:"#000",padding:"0.4rem 2rem"}}>
      {/* <Row>padding:"10px 20px 10px 20px", 
       <Col sm="12" className="mb-2">
          <BannerComponent />
          </Col>
          </Row> */}
      <p className="mb-0 clearfix">
        <span className="float-md-left d-block d-md-inline-block mt-25">
          COPYRIGHT © {new Date().getFullYear()}
          <a href="https://awokesolutions.com/" target="_blank" rel="noopener noreferrer" style={{color:"#000"}}>
          Awoke - Awakening Experiences,
          </a>All rights reserved
        </span>
        <span className="float-md-right d-none d-md-block">
          <span className="align-middle">Powered by <a href="https://expocon.tech/" target="_blank" rel="noopener noreferrer" style={{color:"#000"}}>ExpoCon.Tech</a></span>{" "}
          {/* <Heart className="text-danger" size={15} /> */}
        </span>
      </p>
      {props.hideScrollToTop === false ? (
        <ScrollToTop showUnder={160}>
          <Button color="primary" className="btn-icon scroll-top">
            <ArrowUp size={15} />
          </Button>
        </ScrollToTop>
      ) : null}
    </footer>
  )
}

export default Footer
