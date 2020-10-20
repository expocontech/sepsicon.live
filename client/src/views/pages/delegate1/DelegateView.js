// export default LiveView
import React from "react"
import {
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  Button,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  Label,
  FormGroup,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap"
import axios from "axios"
import { ContextLayout } from "../../../utility/context/Layout"
import { AgGridReact } from "ag-grid-react"
import {
  ChevronDown
} from "react-feather"
import profileImg from "../../../assets/img/profile/user-uploads/user-01.jpg"
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../assets/scss/pages/users.scss"
import { history } from "../../../history"
//import banner from "../../../assets/img/logo/banner.jpg"
import DelegatesList from "./DelegatesList"
// import { withRouter } from "react-router-dom";
class DelegateView extends React.Component {


  state = {
    modal: false,
    data: []
  }


  // handleQuestion = (event) => {
  //   this.setState({
  //     question: event.target.value
  //   });
  // }

  render() {
    const { rowData, columnDefs, defaultColDef, pageSize } = this.state
    return (
      <Row className="app-user-list">
        <Col sm="12">
          <DelegatesList />
        </Col>
      </Row>
    )
  }
}

export default DelegateView
