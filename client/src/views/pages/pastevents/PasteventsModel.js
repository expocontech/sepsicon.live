import React from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Input,
  Row,
  Form, Col
} from "reactstrap"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import { GoReport } from "react-icons/go";
import axios from "axios";
import { history } from "../../../history"

class PasteventsModel extends React.Component {
  state = {
    modal: false,
    datamodal: [],
    title:'',
    detail:'',
    youtube:'',
    date:''
  }
  toggleModal = (eid) => {
    console.log(`${eid}`)
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}event/${eid}`, { headers: authHeader }).then(
        response => {
          console.log(response.data);
          this.setState({
            datamodal: response.data.result,
            title:response.data.result[0].title,
            detail:response.data.result[0].detail,
            youtube: response.data.result[0].youtube,
            date:response.data.result[0].date
          });
          console.log("datamodal", this.state.datamodal)
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

  render() {
    return (
      <React.Fragment>
        <div className="text-center">
          <Button.Ripple className="btn-block gradient-light-primary" onClick={() => this.toggleModal(this.props.eid)}>
            Read More
      </Button.Ripple> </div>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered modal-lg" >
          <ModalHeader toggle={this.toggleModal}>
            {/* Thursday, 30 January 2020 : 11:30 - 12:00 */}
            {this.state.title} {this.state.date}
            </ModalHeader>
          <ModalBody>
            <Form>
              <Row >
                <Col>
                  {/* <p>Bridging Barriers to Therapeutic inertia: Focus on Indian Patient Centric Insulin Therapy” Bridging Barriers to Therapeutic inertia: Focus on Indian Patient Centric Insulin Therapy”</p>
                   */}
                   <p>{this.state.detail}</p>
                </Col>
                <Col md="12" sm="12" xs="12">
                  <Card className="overflow-hidden">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        width="100%"
                        height="315"
                        // src="https://www.youtube.com/embed/3dSXSkWmJ24"
                        src={this.state.youtube}
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
      </React.Fragment>
    )
  }
}
export default PasteventsModel
