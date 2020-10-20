import React from "react"
import Select from "react-select"
import {
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardBody,
  Button,
  Input,
  Row,
  Col,
  Label,
  FormGroup, Badge
} from "reactstrap"
import DataTable from "react-data-table-component"
import axios from "axios";
import { history } from "../../../history"
import { Star, Search } from "react-feather"
// import SweetAlert from 'react-bootstrap-sweetalert';
import { FaThumbsUp, FaThumbsDown, FaUsers, FaRegQuestionCircle } from "react-icons/fa"
import { Link } from 'react-router-dom'
// import SubscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
// import RevenueGenerated from "../../ui-elements/cards/statistics/RevenueGenerated"
// import QuaterlySales from "../../ui-elements/cards/statistics/QuaterlySales"
// import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
// import { history } from "../../../history"



const colourOptions = [
  { value: "", label: "--Select--" },
  { value: "read", label: "Read" },
  { value: "notread", label: "Not Read" }
]

const CustomHeader = props => {
  return (
    <div className="d-flex flex-wrap justify-content-between ">
      {/* <div className="add-new">
        <Button.Ripple color="primary">Add New</Button.Ripple>
      </div> */}
      <Input value={props.value} onChange={e => props.handleFilter(e)} placeholder="Search..." />
    </div>
  )
}

class DelegatesList extends React.Component {

  // state = {
  //   model:false,
  //   data: null
  // }
  state = {
    columns: [
      {
        name: "Name",
        selector: "name",
        sortable: true,
        minWidth: "200px",
        cell: row => (
          <p className="text-bold-500 mb-0">{row.name}</p>
        )
      },
      {
        name: "City",
        selector: "designation",
        sortable: true,
        cell: row => (
          <p className="text-bold-500 text-truncate mb-0">{row.designation}</p>
        )
      },
      {
        name: "State",
        selector: "institute",
        sortable: true,
        minWidth: "500px",
        cell: row => (
          <p className="text-bold-500 mb-0">{row.institute}</p>
        )
      },
      {
        name: "Email",
        selector: "email",
        sortable: true,
        minWidth: "250px",
        cell: row => (
          <p className="text-bold-500 text-truncate mb-0">{row.email}</p>
        )
      }
    ],
    data: [],
    filteredData: [],
    value: ""
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_BASENAME}delegate/`).then(
      response => {
        console.log(response.data);
        this.setState({
          data: response.data.result
        });
      }
    ).catch((error) => {
      // history.push('/')
      console.log(error)
    });
  }

  handleFilter = e => {
    let value = e.target.value
    let data = this.state.data
    let filteredData = this.state.filteredData
    this.setState({ value })

    if (value.length) {
      filteredData = data.filter(item => {
        let startsWithCondition =
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.designation.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          // item.regno.toLowerCase().startsWith(value.toLowerCase()) ||
          item.institute.toLowerCase().startsWith(value.toLowerCase())
        let includesCondition =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.designation.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          // item.regno.toLowerCase().includes(value.toLowerCase()) ||
          item.institute.toLowerCase().includes(value.toLowerCase())

        if (startsWithCondition) {
          return startsWithCondition
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition
        } else return null
      })
      this.setState({ filteredData })
    }
  }

  render() {
    let { data, columns, value, filteredData } = this.state
    return (
      <Row>

        <Col>
          <Card>
            <CardBody className="rdt_Wrapper">
              <CustomHeader value={value} handleFilter={this.handleFilter} />
              <DataTable
                className="dataTable-custom"
                data={value.length ? filteredData : data}
                columns={columns}
                noHeader
                fixedHeaderScrollHeight="500px"
                pagination
              />
            </CardBody>

            <Modal
              isOpen={this.state.modal}
              toggle={this.toggleModal}
              className="modal-dialog-centered modal-lg"
            >
              <ModalHeader toggle={this.toggleModal}>
                Update Status
        </ModalHeader>
              <ModalBody>
                <Form>
                  <Row >
                    <Col md="12" sm="12">
                      <FormGroup>
                        <Label for="status">Stauts</Label>
                        <Select className="React" classNamePrefix="select" defaultValue={colourOptions[0]} name="status" options={colourOptions} />
                      </FormGroup>
                    </Col>
                    <Col md="12" sm="12">
                      <Button.Ripple className="" color="primary" type="submit">Submit</Button.Ripple>
                      <Button.Ripple color="warning" type="reset" className="ml-1">Reset</Button.Ripple>
                    </Col>
                  </Row>
                </Form>
              </ModalBody>
            </Modal>
          </Card>
          {/* <SweetAlert success title="Registration Successful"
          show={this.state.successAlert}
          onConfirm={() => this.handleAlert("successAlert", false)}
        >
        </SweetAlert> */}
        </Col>
      </Row>

    )
  }
}

export default DelegatesList
