import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Tooltip,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import Swiper from "react-id-swiper";
//import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard";
import * as Icon from "react-feather";
import "../../../assets/scss/pages/knowledge-base.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { history } from "../../../../src/history";
import lobby from "../../../assets/img/sponsor/infodisk.jpg";
import "../Pulse_Red.css";
import Radio from "../../../components/@vuexy/radio/RadioVuexy";
import Agenda from "./Agenda";

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

class Banner extends React.Component {
  state = {
    modal: false,
    tooltipOpen: false,
    tooltipOpen1: false,
    tooltipOpen2: false,
    data: [],
    hicon: [],
  };

  toggleTooltip = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  };

  toggleTooltip1 = () => {
    this.setState({
      tooltipOpen1: !this.state.tooltipOpen1
    })
  }

  toggleTooltip2 = () => {
    this.setState({
      tooltipOpen2: !this.state.tooltipOpen2
    })
  }

  toggleModal1 = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };
  componentDidMount = () => {
    if (sessionStorage.getItem("token") != undefined) {
      const authHeader = {
        Authorization: "Bearer " + sessionStorage.getItem("token").toString(),
      };
      axios
        .get(`${process.env.REACT_APP_BASENAME}scientific/get-lobby`, {
          headers: authHeader,
        })
        .then((response) => {
          console.log(response.data);
          this.setState({
            data: response.data.result,
          });
        })
        .catch((error) => {
          console.log(error);
          history.push("/");
        });
    } else {
      history.push("/");
    }
  };
  render() {
    return (
      // <Row style={{backgroundImage: `url(${require("../../../assets/img/sponsor/quiz.jpg")})`, backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize
      // :"cover"}}>
      <Row style={{ alignItems: "center !important" }}>
        <img
          src={lobby}
          alt="lobby"
          width="100%"
          style={{ backgroundSize: "107%" }}
          className={"infodex-background-image"}
        />
        <div
          className="conferencehall"
          id="conferencehall"
          style={{
            position: "absolute",
            left: "42.5%",
            width: "15.3%",
            height: "15.5%",
            top: "42.5%",
            cursor: "pointer",
          }}
          onClick={() => {
            history.push("/pages/scientifichall/1");
          }}
          // onClick={this.toggleModal}
        >
          <span
            className="hint"
            style={{ height: "12px", width: "12px" }}
          ></span>
          <Tooltip placement="top" isOpen={this.state.tooltipOpen1} target="conferencehall" toggle={this.toggleTooltip1}>
            Conference Hall
       </Tooltip>
        </div>

        <div
          className="infodisk"
          id="infodisk"
          style={{
            position: "absolute",
            left: "71%",
            width: "10%",
            height: "30.6%",
            top: "39.9%",
            cursor: "pointer",
          }}
          onClick={() => {
            history.push("/pages/sponsordetails/1");
          }}
        >
          <span
            className="hint"
            style={{ height: "12px ", width: "12px" }}
          ></span>
          <Tooltip
            placement="top"
            isOpen={this.state.tooltipOpen}
            target="infodisk"
            toggle={this.toggleTooltip}
          >
            SEPSIVAC Info 
          </Tooltip>
        </div>

        <div
          className="technical"
          id="technical"
          style={{
            position: "absolute",
            left: "33%",
            width: "36.6%",
            height: "10.3%",
            top: "69.3%",
            cursor: "pointer",
          }}
          onClick={this.toggleModal}
          // onClick={() => {
          //   history.push("/pages/sponsordetails/1");
          // }}
        >
          <span
            className="hint"
            style={{ height: "12px ", width: "12px" }}
          ></span>
          <Tooltip
            placement="top"
            isOpen={this.state.tooltipOpen2}
            target="technical"
            toggle={this.toggleTooltip2}
          >
            Technical Support
          </Tooltip>
        </div>

        {/* {this.state.data.map(item => (
          <div id={item.id} className="exhihall" style={{ position: "absolute", left: item.dleft + "%", width: item.dwidth + "%", height: item.dheight + "%", top: item.dtop + "%", cursor: "pointer", WebkitTransform: "rotate(0deg)" }}
            onClick={() => { history.push(`/pages/scientifichall/${item.hallid}`) }}>
              <span className='hint' style={{ height: "15px", width: "15px" }}></span>
          </div>
        ))} */}
        
        <Agenda />
      </Row>
    );
  }
}

export default Banner;
