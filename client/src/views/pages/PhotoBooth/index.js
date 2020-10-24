import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Webcam from "react-webcam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import "./photoBooth.css";
import lobby from "../../../assets/img/sponsor/photobooth.jpg";
import { AutoWidthCalculator } from "ag-grid-community";

import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import { icon } from "@fortawesome/fontawesome-svg-core";

class PhotoBooth extends React.Component {
  state = {
    imageData: null,
    image_name: "",
    saveImage: false,
    count: "3",
    showCount: false
  };

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    this.setState({
      showCount: true,
    });
    setTimeout(() => {
      this.setState({ count: "2" });
      setTimeout(() => {
        this.setState({ count: "1" });
        setTimeout(() => {
          const imageSrc = this.webcam.getScreenshot();
          this.setState({
            imageData: imageSrc,
            showCount: false
          });
        }, 1000);
      }, 1000);
    }, 1000);
  };

  onClickRetake = (e) => {
    e.persist();
    this.setState({
      imageData: null,
      count: "3"
    });
  };

  onClickSave = (e) => {
    e.persist();
    this.setState((previousState) => {
      return {
        saveImage: !previousState.saveImage,
      };
    });
  };

  handleChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let imageObject = {
      image_name: this.state.image_name,
      job_id: this.props.job.id,
      image_data: this.state.imageData,
    };
    this.props.saveJobImage(imageObject);
  };

  saveForm = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Image Name: </label>
            <input
              type="text"
              name="image_name"
              value={this.state.image_name}
              onChange={this.handleChange}
            />
            <input type="submit" value="Save" />
          </p>
        </form>
      </div>
    );
  };

  printDocument = () => {
    const input = document.getElementById('photobooth');
    html2canvas(input, { scrollY: -window.scrollY,scrollX: -window.scrollX})
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg');
        const pdf = new jsPDF("landscape", "mm", [canvas.width, canvas.height]);
        pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width,canvas.height);
        // const pdf = new jsPDF("l", "mm", "a2");
        // pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("download.pdf");
      })
      ;
  }

  render() {
    const videoConstraints = {
      width: 1050,
      height: 560,
      facingMode: "user",
    };

    return (
      <Row id="photobooth">
        <img src={lobby} alt="lobby" width="100%" style={{ backgroundSize: "107%" }} />
        {/* <Row className={"photo-booth-background"}> */}
        {/* <Row> */}
        {/* <img
          src={lobby}
          alt="lobby"
          width="100%"
          style={{ backgroundSize: "107%" }}
        /> */}
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            width: "100%",
            height: "50%",
            top: "22%",
            paddingLeft: "2%",
            paddingTop: "6%",
            paddingBottom: "8%",
          }}
        >
          {!this.state.imageData ? (
            <div>
              <Webcam
                audio={false}
                height={440}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={700}
                videoConstraints={videoConstraints}
              // className="disp-img"
              />
              <div className="button-container">
                <button className="btn-camera" onClick={this.capture}>
                  <FontAwesomeIcon
                    className="icon-camera"
                    icon={faCameraRetro}
                  />
                </button>
              </div>
            </div>
          ) : (
              <div>
                <img src={this.state.imageData} alt="" width={700} height={440}/>

                <div className="button-container">
                  <span>
                    <button className="btn-camera" onClick={this.onClickRetake}>
                      <FontAwesomeIcon
                        className="icon-camera"
                        icon={faCameraRetro}
                      />
                    </button>
                  </span>
                  <button className="btn-download" onClick={this.printDocument}>
                    <FontAwesomeIcon className="icon-camera" icon={faDownload} />
                  </button>
                </div>
              </div>
            )}
        </div>
        {this.state.showCount && <div className="countDown" style={{
          color: 'white',
          fontSize: '150px',
          left: "50%",
          top: "40%",
          position: "fixed"
        }}>
          {this.state.count}
        </div>}

      </Row>
    );
  }
}

export default PhotoBooth;