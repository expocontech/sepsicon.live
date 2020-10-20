import React from "react"
import { Card, CardBody, Row, Col, Form, Modal, ModalHeader, ModalBody } from "reactstrap"
import axios from "axios";
import { history } from "../../../history"

class Videos extends React.Component {

  state = {
    modal: false,
    data: [],
    datamodal: []
  }

  toggleModal = (vid) => {
    // console.log(`${vid}`)
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor/vmodal/${vid}`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            datamodal: response.data.result
          });
          console.log("datamodal", this.state.datamodal)
        }
      ).catch((error) => {
        console.log(error)
        // history.push('/')
      });

      const data = {
        "sponsorid": this.props.sidvideos,
        "videoid": vid,
        "userid": sessionStorage.getItem('uid').toString()
      }
      axios.post(`${process.env.REACT_APP_BASENAME}sponsor/video-count`, data, { headers: authHeader }).then(response =>
        console.log(response)
      ).catch((error) => {
        console.log(error);
        // history.push('/')
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
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor/video/${this.props.sidvideos}`, { headers: authHeader }).then(
        response => {
          this.setState({
            data: response.data.result
          });
        }
      ).catch((error) => {
        console.log(error);
        history.push('/')
      });
    }
    else {
      history.push('/')
    }

  }

  renderCards() {
    let result = this.state.data.map(item => {
      return (
        <React.Fragment>
          <Card>
            <CardBody>
              <p>{item.title}</p>
              <img src={`${process.env.REACT_APP_BASENAME}` + item.img} width="100%" onClick={() => this.toggleModal(item.id)} style={{ cursor: "pointer" }} />
            </CardBody>
          </Card>
        </React.Fragment>
      )
    })
    return result;
  }
  render() {
    return <Row>{this.renderCards()}
      {this.state.datamodal.map(item => (
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered modal-lg" >
          <ModalHeader toggle={this.toggleModal}>
            {item.title}
          </ModalHeader>
          <ModalBody className="text-center">
            <Form>
              <Row >
                <Col md="12" sm="12" xs="12" className="mt-2">
                  <Card className="overflow-hidden">
                    <iframe
                      className="embed-responsive-item w-100 height-350"
                      src={item.youtubelink}
                      allowFullScreen
                      title="post"
                      frameBorder="0"
                    />
                  </Card>
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
      ))}
    </Row>

  }
}
export default Videos
