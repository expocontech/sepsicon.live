import React from "react"
import { Modal, Button, ModalHeader, ModalBody, Table } from "reactstrap"
import { FaUsers, FaFileAlt } from "react-icons/fa";
import ViewDoc from "./ViewDoc"
import axios from "axios";
import { history } from "../../../history"

class DocList extends React.Component {
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
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor/doc/${this.props.siddoc}`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
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
          <FaFileAlt /> Document Info
      </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className} className="modal-dialog-centered modal-lg" >
          <ModalHeader toggle={this.toggleModal}>
            Document
                  </ModalHeader>
          <ModalBody>
            <Table responsive>

              <tbody>
                {this.state.data.map(item => (
                  <>
                    <tr>
                      <th scope="row"><FaFileAlt size={24} /></th>
                      <td> <ViewDoc docid={item.id} sponsorid={this.props.siddoc}/></td>
                      <td> {item.title}</td>
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
export default DocList
