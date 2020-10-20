import React from "react"
import { Card, CardBody, Row, Col, Button, Form, Label, FormGroup, Modal, ModalHeader, ModalBody, Input } from "reactstrap"
// import { Link } from "react-router-dom"
import { data } from "./FacultyData"
import falimg from "../../../assets/img/pages/committee/4.jpg"
import axios from "axios";
import { history } from "../../../history"
class FacultyDesign extends React.Component {

  state = {
    modal: false,
    data: [],
    fac: [],
    factype: [],
    dname: '',
    dphoto: '',
    ddesignation: '',
    dinstitute: '',
    dbio: ''
  }

  toggleModal = (fid) => {
    console.log(`${fid}`)
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}faculty/${fid}`, { headers: authHeader }).then(
        response => {
          this.setState({
            dname: response.data.result[0].name,
            dphoto: response.data.result[0].photo,
            ddesignation: response.data.result[0].designation,
            dinstitute: response.data.result[0].institute,
            dbio: response.data.result[0].bio
          });
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
      axios.get(`${process.env.REACT_APP_BASENAME}faculty/factype`, { headers: authHeader }).then(
        response => {
          console.log(response.data);
          this.setState({
            factype: response.data.result
          });
        }
      ).catch((error) => {
        history.push('/pages/home')
        console.log(error)
      });

      axios.get(`${process.env.REACT_APP_BASENAME}faculty`, { headers: authHeader }).then(
        response => {
          this.setState({
            fac: response.data.result
          });
        }
      ).catch((error) => {
        console.log(error)
      });
    }
    else {
      history.push('/')
    }

  }

  renderCards = () => {
    let result = this.state.factype.map(itemtype => {
      return (
        <Col sm="12" style={{paddingLeft:"30px",paddingRight:"30px"}}>
          <h1 style={{ color: "#5385c5", marginBottom: "20px", fontWeight: "bolder" }}>{itemtype.typename}</h1>
          <Row>
            {this.state.fac.map(item => {
              if (item.type == itemtype.id) {
                if (this.props.value.length < 1) {
                  return <Col md="3" sm="12" xs="12" className="search-content" key={item.id}>
                    {/* <Card onClick={() => this.toggleModal(item.id)} style={{ cursor: "pointer" }}> */}
                     <Card>
                      <CardBody className="text-center">
                        <img
                          src={`${process.env.REACT_APP_BASENAME}` + item.photo}
                          alt={item.name}
                          className="mx-auto mb-2"
                          width="100%"
                        />
                        <h5>{item.name.toUpperCase()}</h5>
                        <small className="text-dark">{item.institute}</small>
                      </CardBody>
                    </Card>
                  </Col>
                } else if (item.name.includes(this.props.value)) {
                  return (
                    <Col md="3" sm="12" xs="12" className="search-content" key={item.id}>
                    {/* <Card onClick={() => this.toggleModal(item.id)} style={{ cursor: "pointer" }}> */}
                     <Card>
                        <CardBody className="text-center">
                          <img
                            src={`${process.env.REACT_APP_BASENAME}` + item.photo}
                            alt={item.name}
                            className="mx-auto mb-2"
                            width="100%"
                          />
                          <h5>{item.name.toUpperCase()}</h5>
                          <small className="text-dark">{item.institute}</small>
                        </CardBody>
                      </Card>
                    </Col>

                  )
                }
                return ""
              }
            })}
          </Row>
        </Col>
      )
    })
    return result
  }
  render() {
    return <Row>{this.renderCards()}

      <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered modal-lg" >
        <ModalHeader toggle={this.toggleModal}>
          Faculty Details
            </ModalHeader>
        <ModalBody>
          <Form>
            <Row >
              <Col md="12" sm="12" xs="12">
                <img src={`${process.env.REACT_APP_BASENAME}` + this.state.dphoto} className="mr-2" width="170" style={{ float: "left", height: "auto" }} />
                <h4>{this.state.dname}</h4>
                <p className="text-dark" style={{ textAlign: "justify", lineHeight: "2" }}>Designation : {this.state.ddesignation}<br />
                Institute : {this.state.dinstitute}</p>
                <p style={{ textAlign: "justify", lineHeight: "2" }}> {this.state.dbio}</p>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </Row>
  }
}
export default FacultyDesign
