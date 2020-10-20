import React from "react"
import { Modal, Button, ModalHeader, ModalBody, Table, Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { FaPhoneAlt, FaPhoneSlash, FaVideo } from "react-icons/fa";
import ViewDoc from "./ViewDoc"
import axios from "axios"
import { history } from "../../../history"

class CallUs extends React.Component {
  state = {
    modal: false,
    data: []
  }
  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  componentDidMount = () => {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor/staff/${this.props.sidcall}`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            data: response.data.result
          });
        }
      ).catch((error) => {
        history.push('/')
      });
    }
    else {
      history.push('/')
    }

  }

  handleOnClick = (staffid) => {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      const data = {
        "sponsorid": this.props.sidcall,
        "staffid": staffid,
        "userid": sessionStorage.getItem('uid').toString()
      }
      axios.post(`${process.env.REACT_APP_BASENAME}sponsor/staff-count`, data, { headers: authHeader }).then(response =>
        console.log(response)
      ).catch((error) => {
        console.log(error);
        // history.push('/')
      });
    }
    else {
      history.push('/')
    }
  }

  render() {
    return (
      <React.Fragment>
        <Button color="primary" className="btn-icon mr-1"
          onClick={this.toggleModal}>
          <FaVideo /> Call Us
      </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className} className="modal-dialog-centered modal-lg" >
          <ModalHeader toggle={this.toggleModal}>
            Call Us
                  </ModalHeader>
          <ModalBody>
            <Card>
              <CardBody className="suggested-block">
                {this.state.data.map(item => {
                  if (item.isactive == 1) {
                    return <a href={item.link} target="_blank" onClick={() => { this.handleOnClick(item.id) }}><div className="d-flex justify-content-start align-items-center mb-1">
                      <div className="avatar mr-50">
                        <i style={{ width: "40px", height: "40px", background: "#06c506", borderRadius: "50%" }} >
                          <FaPhoneAlt className="avtar" style={{ width: "20px", height: "20px", position: "relative", top: "20%" }} /></i>
                      </div>
                      <div className="user-page-info">
                        <p>{item.name}</p>
                        <span className="font-small-2">{item.designation}</span>
                      </div>
                    </div></a>
                  }
                  else {
                    return <div className="d-flex justify-content-start align-items-center mb-1">
                      <div className="avatar mr-50">
                        <i style={{ width: "40px", height: "40px", background: "#c70303", borderRadius: "50%" }}><FaPhoneSlash className="avtar" style={{ width: "20px", height: "20px", position: "relative", top: "20%" }} /></i>
                      </div>
                      <div className="user-page-info">
                        <p>{item.name}</p>
                        <span className="font-small-2">{item.designation}</span>
                      </div>
                    </div>
                  }
                })}
                {/* <a href="https://us02web.zoom.us/j/7331131070?pwd=Q0oydFhyejZDYms5dFRsV1BEZmNTUT09" target="_blank"><div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
            <i style={{width: "50px", height: "50px",background: "#06c506",borderRadius:"50%"}}>
              <FaPhoneAlt className="avtar" style={{width: "25px", height: "25px",position: "relative",top: "20%"}} /></i>

            </div>
            <div className="user-page-info">
              <h4>Prof. Krishnan Balasubramaniam</h4>
              <span className="font-small">IIT Madras</span>
            </div>
          </div></a>
          <a href="https://us02web.zoom.us/j/7331131070?pwd=Q0oydFhyejZDYms5dFRsV1BEZmNTUT09" target="_blank"><div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
            <i style={{width: "50px", height: "50px",background: "#06c506",borderRadius:"50%"}}>
              <FaPhoneAlt className="avtar" style={{width: "25px", height: "25px",position: "relative",top: "20%"}} /></i>
            </div>
            <div className="user-page-info">
              <h4>Mr. Shridhar Nath</h4>
              <span className="font-small">General Electric Research Center</span>
            </div>
          </div> </a>
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
            <i style={{width: "50px", height: "50px",background: "#c70303",borderRadius:"50%"}}><FaPhoneSlash className="avtar" style={{width: "25px", height: "25px",position: "relative",top: "20%"}} /></i>
            </div>
            <div className="user-page-info">
              <h4>Mr. Ekkehard Zwicker</h4>
              <span className="font-small">PhD / CEO GE Inspection Robotics</span>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
            <i style={{width: "50px", height: "50px",background: "#c70303",borderRadius:"50%"}}><FaPhoneSlash className="avtar" style={{width: "25px", height: "25px",position: "relative",top: "20%"}} /></i>
            </div>
            <div className="user-page-info">
              <h4>Mr. Diwakar D. Joshi</h4>
              <span className="font-small">Insight Quality Services</span>
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mb-1">
            <div className="avatar mr-50">
            <i style={{width: "50px", height: "50px",background: "#c70303",borderRadius:"50%"}}><FaPhoneSlash className="avtar" style={{width: "25px", height: "25px",position: "relative",top: "20%"}} /></i>
            </div>
            <div className="user-page-info">
              <h4>Mr. Diwakar D. Joshi</h4>
              <span className="font-small">Insight Quality Services</span>
            </div>
          </div> */}
              </CardBody>
            </Card>
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}
export default CallUs
