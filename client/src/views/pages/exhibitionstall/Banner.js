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
import lobby from "../../../assets/img/sponsor/exhibiton_hall.jpg";
import bluestall from "../../../assets/img/sponsor/bluestall.png";
import organgestall from "../../../assets/img/sponsor/organgestall.png";
import agendapdf from "../../../assets/img/sponsor/agenda.pdf";
import Agenda from "./Agenda";
import "../Pulse_Red.css";
import VideoPlayer from "../../ui-elements/VideoPlayer/VideoPlayer";
import CarouselBasic from "../../../components/reactstrap/carousel/CarouselBasic";

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
    tooltipOpen5: false,
    data: [],
    hicon: [],
    showEntranceVideo: true,
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

  toggleTooltip5 = () => {
    this.setState({
      tooltipOpen5: !this.state.tooltipOpen5,
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
      let ex_hallid = this.props.ex_hallid;
      const authHeader = {
        Authorization: "Bearer " + sessionStorage.getItem("token").toString(),
      };
      axios
        .get(
          `${process.env.REACT_APP_BASENAME}exhibition/get-stall/${ex_hallid}`,
          { headers: authHeader }
        )
        .then((response) => {
          // console.log(response.data);

          if (response.data.status == true) {
            this.setState({
              data: response.data.result,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          // history.push('/')
        });
    } else {
      history.push("/");
    }
  };

  entranceVideoToggler = () => {
    this.setState({ showEntranceVideo: !this.state.showEntranceVideo });
  };

  render() {
    let content = (
      <VideoPlayer
        playVideo={this.state.showEntranceVideo}
        hideVideo={this.entranceVideoToggler}
        url={"https://live.iamicon.in/videos/exhibition.mp4"}
mute={true}
      />
    );

    if (!this.state.showEntranceVideo) {
      content = <CarouselBasic />;
    }

    return content;
  }
}

const oldContent = () => {
  return (
    <Row>
      {/* <img src={lobby} alt="lobby" width="100%" style={{ backgroundSize: "107%" }} /> */}
      {this.state.data.map((item) => (
        <div
          id="stalldetails"
          className="stalldetails"
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
            history.push(`/pages/sponsordetails/${item.sponsorid}`);
          }}
        >
          <span
            className="hint"
            style={{ height: "12px", width: "12px" }}
          ></span>
          {/* <img src={process.env.REACT_APP_BASENAME + `${item.image}`} alt={item.name} width="100%" style={{ backgroundSize: "100%" }} /> */}
        </div>
      ))}

      <Modal
        isOpen={this.state.modal}
        toggle={this.toggleModal}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader toggle={this.toggleModal}>Welcome Message</ModalHeader>
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
      </Modal>
    </Row>
  );
};

export default Banner;
