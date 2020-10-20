import React from "react";
//import ExtensionsHeader from "../../../extensions/extensionsHeader"
//import { Row, Col } from "reactstrap"
import Banner from "./Banner";
import "swiper/css/swiper.css";
import "../../../assets/scss/plugins/extensions/swiper.scss";

class Index extends React.Component {
  render() {
    return (
      <div className="exhibition-hall-carousel">
        <Banner ex_hallid={this.props.match.params.ex_hallid} />
      </div>
    );
  }
}

export default Index;
