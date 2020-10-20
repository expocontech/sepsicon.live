import React from "react";
import {
  Card,
  CardBody,
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
import img1 from "../../../assets/img/pages/banner.jpg";
import EventCountdown from "./Countdown";
//import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard";
import * as Icon from "react-feather";
import CommitteeMain from "./CommitteeMain";
import "../../../assets/scss/pages/knowledge-base.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { history } from "../../../../src/history";
import lobby from "../../../assets/img/sponsor/exhibitionlobby12.jpg";
import agendapdf from "../../../assets/img/sponsor/agenda.pdf";
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
    tooltipOpen3: false,
    tooltipOpen4: false,
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
      tooltipOpen1: !this.state.tooltipOpen1,
    });
  };

  toggleTooltip2 = () => {
    this.setState({
      tooltipOpen2: !this.state.tooltipOpen2,
    });
  };

  toggleTooltip3 = () => {
    this.setState({
      tooltipOpen3: !this.state.tooltipOpen3,
    });
  };

  toggleTooltip4 = () => {
    this.setState({
      tooltipOpen4: !this.state.tooltipOpen4,
    });
  };

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
      // axios.get(`${process.env.REACT_APP_BASENAME}home/banner`, { headers: authHeader }).then((response) => {
      //   // console.log(response.data);

      //   if (response.data.status == true) {
      //     this.setState({
      //       data: response.data.result
      //     })
      //   }
      // }).catch((error) => {
      //   console.log(error);
      //   history.push('/')
      // })
      axios
        .get(`${process.env.REACT_APP_BASENAME}exhibition/get-lobby`, {
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
      <Row>
        <img
          src={lobby}
          alt="lobby"
          width="100%"
          style={{ backgroundSize: "107%" }}
        />
        {/* <Agenda /> */}
        {this.state.data.map((item) => (
          <div
            id={item.id}
            className="exhihall"
            style={{
              position: "absolute",
              left: item.dleft + "%",
              width: item.dwidth + "%",
              height: item.dheight + "%",
              top: item.dtop + "%",
              cursor: "pointer",
              WebkitTransform: "rotate(0deg)",
            }}
            onClick={() => {
              history.push(`/pages/exhibitionstall/${item.ex_hallid}`);
            }}
          >
            <img
              src={process.env.REACT_APP_BASENAME + `${item.image}`}
              alt={item.name}
              width="100%"
              style={{ backgroundSize: "100%" }}
            />
          </div>
        ))}
        {/*
      <div id="exhihall" className="exhihall" style={{position: "absolute", left: "5.8%", width: "20.3%", height: "25%", top: "15.5%", cursor: "pointer", WebkitTransform: "rotate(0deg)"}}
      onClick={() => {history.push("/pages/exhibitionstall")}}>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="exhihall" toggle={this.toggleTooltip}>
          Exhibition Hall 1
       </Tooltip>
      </div> */}

        {/* <div id="exhihall1" className="exhihall1" style={{position: "absolute", left: "39.7%", width: "20.3%", height: "25%", top: "15.5%", cursor: "pointer", WebkitTransform: "rotate(0deg)"}}
      onClick={() => {history.push("/pages/exhibitionstall")}}>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen1} target="exhihall1" toggle={this.toggleTooltip1}>
          Exhibition Hall 2
       </Tooltip>
      </div>

      <div id="exhihall2" className="exhihall2" style={{position: "absolute", left: "73.5%", width: "20.3%", height: "25%", top: "15.5%", cursor: "pointer", WebkitTransform: "rotate(0deg)"}}
      onClick={() => {history.push("/pages/exhibitionstall")}}>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen2} target="exhihall2" toggle={this.toggleTooltip2}>
          Exhibition Hall 3
       </Tooltip>
      </div> */}
        {/* <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered modal-lg" >
          <ModalHeader toggle={this.toggleModal}>Welcome Message
           </ModalHeader>
          <ModalBody className="text-center">
            <iframe
              className="embed-responsive-item w-100"
              src="https://www.youtube.com/embed/_UafVmFJ2PU"
              allowFullScreen
              title="post"
              frameBorder="0"
              width="100%"
              height="350"
            />
          </ModalBody>
        </Modal> */}
      </Row>
    );
  }
}

export default Banner;
