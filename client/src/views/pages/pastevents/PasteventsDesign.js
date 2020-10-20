import React from "react"
import { Card, CardBody, Row, Col, Button, Form, Label, FormGroup, Modal, ModalHeader, ModalBody, Input } from "reactstrap"
// import { Link } from "react-router-dom"
import { data } from "./PasteventsData"
//import falimg from "../../../assets/img/pages/Pastevents/logo.png"
// import image from "../../../assets/img/logo/image.jpg"
import PasteventsModel from './PasteventsModel'
import axios from "axios";
import { history } from "../../../history"
class PasteventsDesign extends React.Component {

  state = {
    modal: false,
    data: [],
    datamodal: []
  }

  toggleModal = (eid) => {
    // console.log(`${eid}`)
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}event/${eid}`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            datamodal: response.data.result
          });
          // console.log("datamodal",  this.state.datamodal)
        }
      ).catch((error) => {
        console.log(error)
      });
    }
    else {
      history.push('/')
    }

    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }


  componentDidMount = () => {

    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}event/past`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          if (response.data.status == true) {
            this.setState({
              data: response.data.result
            });
          }
        }
      ).catch((error) => {
        console.log("error", error)
      });
    }
    else {
      history.push('/')
    }
  }

  renderCards = () => {
    let result = this.state.data.map(item => {
      if (this.props.value.length < 1) {
        return (
          <Col md="4" sm="12" xs="12" className="search-content" key={item.id} style={{ cursor: "pointer" }}>
            <Card>
              <CardBody>
                <p className="text-dark">{item.date} {item.time}</p>
                <img src={`${process.env.REACT_APP_BASENAME}` + item.image} width="100%" />
                <h4 style={{ lineHeight: "1.5" }}>{item.title.toUpperCase()}</h4>
              </CardBody>
              <PasteventsModel eid={item.id} />
            </Card>
          </Col>

        )
      } else if (item.title.includes(this.props.value)) {
        return (
          <Col md="4" sm="12" xs="12" className="search-content" key={item.id} style={{ cursor: "pointer" }}>
            <Card>
              <CardBody>
                <p className="text-dark">{item.date} {item.time}</p>
                <img src={`${process.env.REACT_APP_BASENAME}` + item.image} width="100%" />
                <h4 style={{ lineHeight: "1.5" }}>{item.title.toUpperCase()}</h4>
                <PasteventsModel eid={item.id} />
              </CardBody>
            </Card>
          </Col>
        )
      }
      return ""
    })
    return result
  }
  render() {
    return <Row>{this.renderCards()}
      {/* {this.state.datamodal.map(item => (
      <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered modal-lg" >
        <ModalHeader toggle={this.toggleModal}>
          {item.title}
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row >
              <Col>
                <p>{item.detail}</p>
              </Col>
              <Col md="12" sm="12" xs="12">
                <Card className="overflow-hidden">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      width="100%"
                      height="315"
                      src={item.youtube}
                      frameBorder="0"
                      allow="accelerometer autoplay encrypted-media gyroscope picture-in-picture"
                      allowFullScreen
                      title="video"
                    />
                  </div>
                </Card>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    ))} */}
    </Row>

  }
}
export default PasteventsDesign
