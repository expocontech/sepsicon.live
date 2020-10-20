import React from "react"
import { Modal, Button, ModalHeader, ModalBody, Table } from "reactstrap"
import {  FaVideo } from "react-icons/fa";
import ViewVideo from "./ViewVideo"
import axios from "axios";
import { history } from "../../../history"

class VideoList extends React.Component {
  state = {
    modal: false,
    data: [],
    spid: this.props.sidvideo
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  componentDidMount = () => {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor/video/${this.state.spid}`, { headers: authHeader }).then(
        response => {
          this.setState({
            data: response.data.result
          });
        }
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
          <FaVideo /> Videos
      </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className} className="modal-dialog-centered modal-lg" >
          <ModalHeader toggle={this.toggleModal}>
            Video List
                  </ModalHeader>
          <ModalBody>
            <Table responsive>
              <tbody>

                {this.state.data.map(item => (
                  <>
                    <tr>
                      <th scope="row"><FaVideo size={24} /></th>
                      <td> <ViewVideo vid={item.id} sponsorid={this.state.spid} /></td>
                      <td>{item.title}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </Table>
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}
export default VideoList
