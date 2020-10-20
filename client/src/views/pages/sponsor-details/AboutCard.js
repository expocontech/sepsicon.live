import React from "react"
import { Modal, ModalHeader, ModalBody, Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap"
import { MoreHorizontal, Facebook, Instagram, Twitter } from "react-feather"
import { FaInfoCircle } from "react-icons/fa";
import axios from "axios"
import { history } from "../../../history"


class AboutCard extends React.Component {
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
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor/detail/${this.props.sidabout}`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            data: response.data.result
          });
        }
      ).catch((error) => {
        console.log(error)
        history.push('/')
      });
    }
    else {
      history.push('/')
    }

  }
  render() {
    let result = this.state.data.map(item => {
      return (
        <React.Fragment>
          <Button color="primary" className="btn-icon mr-1"
            onClick={this.toggleModal}>
            <FaInfoCircle /> About Us
    </Button>

          <Modal
            isOpen={this.state.modal}
            toggle={this.toggleModal}
            className={this.props.className} className="modal-dialog-centered modal-lg" >
            <ModalHeader toggle={this.toggleModal}>
              About Us
                </ModalHeader>
            <ModalBody>
              <Card>
                <CardHeader>
                  <CardTitle>About Us</CardTitle>
                  {/* <MoreHorizontal size={15} className="cursor-pointer" /> */}
                </CardHeader>
                <CardBody>
                  <p className="text-justify">{item.about}</p>
                  <div className="mt-1">
                    <h6 className="mb-0">Email: <a href={`mailto:` + item.email}>{item.email}</a></h6>
                  </div>
                  <div className="mt-1">
                    <h6 className="mb-0">Website: <a href={`//` + item.website} target="_blank">{item.website}</a></h6>
                  </div>
                </CardBody>
              </Card>
            </ModalBody>
          </Modal>
        </React.Fragment>
      )
    })
    return result;
  }
}
export default AboutCard
