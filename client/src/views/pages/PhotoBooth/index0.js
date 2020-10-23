import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Webcam from "react-webcam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import "./photoBooth.css";
import lobby from "../../../assets/img/sponsor/photobooth.jpg";
import { AutoWidthCalculator } from "ag-grid-community";

class PhotoBooth extends React.Component {
  state = {
    imageData: null,
    image_name: "",
    saveImage: false,
  };

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      imageData: imageSrc,
    });
  };

  onClickRetake = (e) => {
    e.persist();
    this.setState({
      imageData: null,
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
  render() {
    const videoConstraints = {
      width: 720,
      height: 720,
      facingMode: "user",
    };

    return (
       <Row className={"photo-booth-background"}>
      {/* <Row> */}
         {/* <img
          src={lobby}
          alt="lobby"
          width="100%"
          style={{ backgroundSize: "107%" }}
        /> */}
        <div
          style={{
            paddingTop: "8%",
            paddingBottom: "8%",
          }}
        >
          {!this.state.imageData ? (
            <div>
              <Webcam
                audio={false}
                height={300}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={300}
                videoConstraints={videoConstraints}
                className="disp-img"
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
            <div className="button-container">
              <p className="disp-img">
                <img src={this.state.imageData} alt="" />
              </p>
              <span>
                <button className="btn-camera" onClick={this.onClickRetake}>
                  <FontAwesomeIcon
                    className="icon-camera"
                    icon={faCameraRetro}
                  />
                </button>
              </span>
              <button className="btn-download">
                <a href={this.state.imageData} download>
                  <FontAwesomeIcon className="icon-camera" icon={faDownload} />
                </a>
              </button>
            </div>
          )}
        </div>
      </Row>
    );
  }
}

export default PhotoBooth;
