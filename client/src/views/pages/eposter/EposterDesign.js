import React from "react"
import { Card, CardBody, Row, Col, Button, Form, Label, FormGroup, Modal, ModalHeader, ModalBody, Input } from "reactstrap"
// import { Link } from "react-router-dom"
import { data } from "./EposterData"
//import falimg from "../../../assets/img/pages/Eposter/logo.png"
// import image from "../../../assets/img/logo/image.jpg"
import axios from "axios";
import { history } from "../../../history"

class EposterDesign extends React.Component {

  state = {
    modal: false,
    data: [],
    datamodal: [],
    mtitle: '',
    mimage: '',
    mpname: '',
    meid: '',
    mcategory: '',
    minstitute: ''
  }

  toggleModal = (eid) => {
    console.log(`${eid}`)
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}eposter/${eid}`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            datamodal: response.data.result,
            mtitle: response.data.result[0].title,
            mimage: response.data.result[0].image,
            mpname: response.data.result[0].pname,
            meid: response.data.result[0].eid,
            mcategory: response.data.result[0].category,
            minstitute: response.data.result[0].institute
          });
          // console.log("datamodal", this.state.datamodal)
        }
      ).catch((error) => {

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
      axios.get(`${process.env.REACT_APP_BASENAME}eposter`, { headers: authHeader }).then(
        response => {
          // console.log(response.data); 
          this.setState({
            data: response.data.result
          });
        }
      ).catch((error) => {

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
          <Col md="4" sm="12" xs="12" className="search-content" key={item.id} onClick={() => this.toggleModal(item.id)} style={{ cursor: "pointer" }}>
            <Card>
              <CardBody>
                <img src={`${process.env.REACT_APP_BASENAME}` + item.image} width="100%" />
                <h4 style={{ lineHeight: "1.5" }}>{item.title.toUpperCase()}</h4>
              </CardBody>
            </Card>
          </Col>

        )
      } else if (item.title.includes(this.props.value)) {
        return (
          <Col md="4" sm="12" xs="12" className="search-content" key={item.id} onClick={() => this.toggleModal(item.id)} style={{ cursor: "pointer" }}>
            <Card>
              <CardBody>
                <img src={`${process.env.REACT_APP_BASENAME}` + item.image} width="100%" />
                <h4 style={{ lineHeight: "1.5" }}>{item.title.toUpperCase()}</h4>
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

      <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered modal-lg" >
        <ModalHeader toggle={this.toggleModal}>
          {this.state.mpname}
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row >
              <Col>
                <p style={{ lineHeight: "2" }}
                ><b>Poster Id : </b> {this.state.meid}<br /><b>Presenter Name : </b>{this.state.mpname}<br /><b>Institute : </b>{this.state.minstitute}<br /><b>Category : </b>{this.state.mcategory}<br /><b>Title : </b>{this.state.mtitle}</p>

              </Col>
              <Col md="12" sm="12" xs="12">
                <Card className="overflow-hidden">
                  <img width="100%" src={`${process.env.REACT_APP_BASENAME}` + this.state.mimage} />
                </Card>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </Row>

  }
}
export default EposterDesign
