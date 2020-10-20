import React from "react"
import { Heart, MessageSquare } from "react-feather"
import videoimg from "../../../assets/img/sponsor/banner.jpg"
import postImg1 from "../../../assets/img/sponsor/document1.jpg"
import person1 from "../../../assets/img/portrait/small/avatar-s-1.jpg"
import { Card, CardBody, Row, Col, Button, Form, Label, FormGroup, Modal, ModalHeader, ModalBody, Input } from "reactstrap"

class Videos extends React.Component {

  state = {
    modal: false
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
}

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <p>Zoryl-M Forte - It's Small, Slim & Standard </p>
            <img src={videoimg} width="100%"  onClick={this.toggleModal} style={{cursor: "pointer"}}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p>Zoryl-M Forte - It's Small, Slim & Standard </p>
            <img src={videoimg} width="100%"  onClick={this.toggleModal} style={{cursor: "pointer"}}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p>Zoryl-M Forte - It's Small, Slim & Standard </p>
            <img src={videoimg} width="100%"  onClick={this.toggleModal} style={{cursor: "pointer"}}/>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p>Zoryl-M Forte - It's Small, Slim & Standard </p>
            <img src={videoimg} width="100%"  onClick={this.toggleModal} style={{cursor: "pointer"}}/>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered modal-lg" >
            <ModalHeader toggle={this.toggleModal}>
            Zoryl-M Forte - It's Small, Slim & Standard
            </ModalHeader>
            <ModalBody className="text-center">
            <Form>
            <Row >    
          <Col md="12" sm="12" xs="12" className="mt-2">
            <Card className="overflow-hidden">
            <iframe
              className="embed-responsive-item w-100 height-350"
              src="https://www.youtube.com/embed/0BNn-jfULME"
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
      </React.Fragment>
    )
  }
}
export default Videos
