import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Tooltip,
} from "reactstrap";
import classnames from "classnames";
import { Eye, Code, Tool } from "react-feather";
import { carouselBasic } from "./CarouselSourceCode";
import sliderImage1 from "../../../assets/img/slider/01.jpg";
import sliderImage2 from "../../../assets/img/slider/02.jpg";
import sliderImage3 from "../../../assets/img/slider/03.jpg";
import { useState } from "react";

// url = onClick push location
const CarouselHint = ({
  index,
  top,
  left,
  pointsValueIn,
  name,
  message,
  url,
}) => {
  let ptop = top,
    pleft = left;
  const [show, setShow] = useState(false);

  const tooltipToggler = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        id={name && name}
        className="hint carousel-basic-hint"
        style={{
          top: `${ptop}${pointsValueIn}`,
          left: `${pleft}${pointsValueIn}`,
        }}
        onMouseEnter={tooltipToggler}
        onMouseLeave={tooltipToggler}
      />
      <Tooltip
        target={name && name}
        autohide={true}
        toggle={tooltipToggler}
        isOpen={show}
      >
        {message && message}
      </Tooltip>
    </>
  );
};

const images = [
  {
    // name must be unique, message is for tooltip
    src: sliderImage1,
    id: 1,
    pointsValueIn: "%",
    points: [
      {
        name: "Stall1",
        message: "This is a tooltip message",
        top: "12",
        left: "20",
      },
      {
        name: "Stall2",
        message: "This is another tooltip message",
        top: "16",
        left: "20",
      },
    ],
  },
  {
    src: sliderImage2,
    id: 2,
    pointsValueIn: "%",

    points: [
      {
        message: "This is a tooltip message  --1",
        top: "20",
        left: "10",
        name: "Stall3",
      },
      {
        message: "This is a tooltip message  --2",
        top: "30",
        left: "70",
        name: "Stall4",
      },
    ],
  },
  {
    src: sliderImage3,
    id: 3,
    pointsValueIn: "%",
    points: [
      {
        message: "This is a tooltip message --3",
        top: "10",
        left: "50",
        name: "Stall5",
      },
      {
        message: "This is a tooltip message --4",
        top: "50",
        left: "10",
        name: "Stall6",
      },
    ],
  },
];

class CarouselBasic extends React.Component {
  state = {
    activeTab: "1",
    activeIndex: 0,
  };

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === images.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? images.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  render() {
    const { activeIndex } = this.state;

    const slides = images.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.id}
        >
          <img src={item.src} className="img-fluid" alt={item.id} />
          {item.points?.map((point, index) => {
            return (
              <CarouselHint
                top={point.top}
                left={point.left}
                index={index}
                pointsValueIn={item.pointsValueIn}
                name={point.name}
                message={point.message}
              />
            );
          })}
        </CarouselItem>
      );
    });
    return (
      <React.Fragment>
        <Card>
          <CardHeader>
            <CardTitle>Basic Example</CardTitle>
            <div className="views">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1",
                    })}
                    onClick={() => {
                      this.toggleTab("1");
                    }}
                  >
                    <Eye size={15} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2",
                    })}
                    onClick={() => {
                      this.toggleTab("2");
                    }}
                  >
                    <Code size={15} />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </CardHeader>
          <CardBody>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Carousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                  allowFullScreen
                >
                  <CarouselIndicators
                    items={images}
                    activeIndex={activeIndex}
                    onClickHandler={this.goToIndex}
                    className="carousel-controls"
                  />
                  {slides}
                  <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={this.previous}
                  />
                  <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={this.next}
                  />
                </Carousel>
              </TabPane>
              <TabPane className="component-code" tabId="2">
                {carouselBasic}
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default CarouselBasic;
