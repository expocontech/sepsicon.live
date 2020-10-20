import React from "react"
import { Card, CardBody, Row, Col, Button, Form, Label, FormGroup, Modal, ModalHeader, ModalBody, Input } from "reactstrap"
import { Link } from "react-router-dom"
import { data } from "./DownloadData"
import falimg from "../../../assets/img/logo/banner.jpg"
import banner from "../../../assets/img/logo/banner.jpg"
import * as Icon from "react-feather"
import axios from "axios";
import { history } from "../../../../src/history"


class DownloadDesign extends React.Component {

  state = {
    modal: false,
    data: []
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  componentDidMount() {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}download`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          if (response.data.status == true) {
            this.setState({
              data: response.data.result
            });
          }
          else
          {
            this.setState({
              data: response.data.result
            });
          }
        }
      ).catch((error) => {
        console.log(error);
        // history.push('/')
      });
    }
    else {
      history.push('/');
    }


  }

  renderCards = () => {
    let result = this.state.data.map(item => {
      if (this.props.value.length < 1) {
        return (
          <Col md="3" sm="6" xs="6" className="search-content" key={item.id}>
            <Card>
              <CardBody className="text-center">
                {/* <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto mb-2"
                    width="100%"
                  /> */}
                <h4>{item.name.toUpperCase()}</h4>
                <a href={`${process.env.REACT_APP_BASENAME}` + item.document} target="_blank" >
                  <Button.Ripple className="btn-block gradient-light-primary" >
                    Download
                  </Button.Ripple></a>
              </CardBody>
            </Card>
          </Col>

        )
      } else if (item.name.includes(this.props.value)) {
        return (
          <Col md="3" sm="6" xs="6" className="search-content" key={item.id}>
            <Card>
              <CardBody className="text-center">
                {/* <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto mb-2"
                    width="100%"
                  /> */}
                <h4>{item.name.toUpperCase()}</h4>
                <a href={`${process.env.REACT_APP_BASENAME}` + item.document} target="_blank" >
                  <Button.Ripple className="btn-block gradient-light-primary" >
                    Download
                  </Button.Ripple></a>
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

    </Row>

  }
}
export default DownloadDesign
