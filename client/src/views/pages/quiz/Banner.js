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
import lobby from "../../../assets/img/sponsor/bg.jpg";
import "../Pulse_Red.css";
import Radio from "../../../components/@vuexy/radio/RadioVuexy";

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
    // tooltipOpen1: false,
    // tooltipOpen2: false,
    data: [],
    hicon: [],
  };

  toggleTooltip = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  };

  // toggleTooltip1 = () => {
  //   this.setState({
  //     tooltipOpen1: !this.state.tooltipOpen1
  //   })
  // }

  // toggleTooltip2 = () => {
  //   this.setState({
  //     tooltipOpen2: !this.state.tooltipOpen2
  //   })
  // }

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
      <Row className="quiz-background">
        {/* <img
          src={lobby}
          alt="lobby"
          width="100%"
          style={{
            backgroundSize: "107%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        /> */}
        <Col md="3" sm="12" xs="12"></Col>
        <Col
          md="6"
          sm="12"
          xs="12"
          style={{
            paddingTop: "8%",
            paddingBottom: "8%",
          }}
        >
          <Card>
            <CardBody>
              <h3>Quiz</h3>
              <br />
              <p>
                Q01. Which of the following causes fatigue in men more than in
                women Which of the following causes fatigue in men more than in
                women?
              </p>
              <Radio
                label="Thyrotoxic myopathy"
                color="primary"
                defaultChecked={false}
                name="exampleRadioSizes"
                className="py-50"
              />
              <Radio
                label="Myasthenia with Graves disease"
                color="primary"
                defaultChecked={false}
                name="exampleRadioSizes"
                className="py-50"
              />
              <Radio
                label="Primary hyperparathyroidism"
                color="primary"
                defaultChecked={false}
                name="exampleRadioSizes"
                className="py-50"
              />
              <Radio
                label="Diabetic amyotrophy"
                color="primary"
                defaultChecked={false}
                name="exampleRadioSizes"
                className="py-50"
              />
              <Col
                className="d-flex justify-content-end flex-wrap"
                sm="12"
                style={{ marginTop: "10px" }}
              >
                <Button.Ripple
                  className=""
                  color="primary"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button.Ripple>
              </Col>
            </CardBody>
          </Card>
        </Col>
        {/* {this.state.data.map(item => (
          <div id={item.id} className="exhihall" style={{ position: "absolute", left: item.dleft + "%", width: item.dwidth + "%", height: item.dheight + "%", top: item.dtop + "%", cursor: "pointer", WebkitTransform: "rotate(0deg)" }}
            onClick={() => { history.push(`/pages/scientifichall/${item.hallid}`) }}>
              <span className='hint' style={{ height: "15px", width: "15px" }}></span>
          </div>
        ))} */}
      </Row>
    );
  }
}

export default Banner;
