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
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import {
  siteTraffic,
  siteTrafficSeries,
  activeUsers,
  activeUsersSeries,
  newsLetter,
  newsLetterSeries
} from "../../ui-elements/cards/statistics/StatisticsData2"
import SubscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
import RevenueGenerated from "../../ui-elements/cards/statistics/RevenueGenerated"
import QuaterlySales from "../../ui-elements/cards/statistics/QuaterlySales"
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
import {
  Monitor,
  UserCheck,
  Mail,
  Edit,
  Trash2,
  Plus,
  ChevronDown,
  Clipboard,
  Printer,
  Download,
  RotateCw,
  X
} from "react-feather"
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import "../../../assets/scss/pages/users.scss"
class CommitteeList extends React.Component {

  state = {
    modal: false
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  state = {
    rowData: null,
    pageSize: 10,
    isVisible: true,
    reload: false,
    collapse: true,
    status: "Opened",
    role: "All",
    selectStatus: "All",
    verified: "All",
    department: "All",
    defaultColDef: {
      sortable: true
    },
    searchVal: "",
    columnDefs: [
      {
        headerName: "ID",
        field: "id",
        width: 100,
        filter: true
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true
      },
    //   {
    //     headerName: "Actions",
    //     field: "transactions",
    //     width: 150,
    //     cellRendererFramework: params => {
    //       return (
    //         <div className="actions cursor-pointer">
    //           <Edit
    //             className="mr-50"
    //             size={15}
    //             onClick={() => history.push("/app/user/edit")}
    //           />
    //           <Trash2
    //             size={15}
    //             onClick={() => {
    //               let selectedData = this.gridApi.getSelectedRows()
    //               this.gridApi.updateRowData({ remove: selectedData })
    //             }}
    //           />
    //         </div>
    //       )
    //     }
    //   },
    
      {
        headerName: "Name",
        field: "name",
        filter: true,
        width: 275
        // cellRendererFramework: params => {
        //   return (
        //     <div
        //       className="d-flex align-items-center cursor-pointer"
        //        onClick={() => history.push("/app/user/edit")}
        //     >
        //       <img
        //         className="rounded-circle mr-50"
        //         src={params.data.avatar}
        //         alt="user avatar"
        //         height="30"
        //         width="30"
        //       />
        //       <span>{params.data.name}</span>
        //     </div>
        //   )
        // }
      },
      {
        headerName: "Designation",
        field: "designation",
        filter: true,
        width: 250
      },
      {
        headerName: "Institute",
        field: "institute",
        filter: true,
        width: 300
      },
      {
        headerName: "Email",
        field: "email",
        filter: true,
        width: 275
      },
      {
        headerName: "Mobile",
        field: "mobile",
        filter: true,
        width: 200
      },
      {
        headerName: "Password",
        field: "password",
        filter: true,
        width: 200
      }
    ]
  }
  componentDidMount() {
    axios.get("/api/aggrid1/data1").then(response => {
      let rowData = response.data.data
      JSON.stringify(rowData)
      this.setState({ rowData })
    })
  }

//   async componentDidMount() {
//     await axios.get("/api/aggrid1/data1").then(response => {
//       let rowData = response.data
//       this.setState({ rowData })
//     })
//   }

  onGridReady = params => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
  }

  filterData = (column, val) => {
    var filter = this.gridApi.getFilterInstance(column)
    var modelObj = null
    if (val !== "all") {
      modelObj = {
        type: "equals",
        filter: val
      }
    }
    filter.setModel(modelObj)
    this.gridApi.onFilterChanged()
  }

  filterSize = val => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val))
      this.setState({
        pageSize: val
      })
    }
  }
  updateSearchQuery = val => {
    this.gridApi.setQuickFilter(val)
    this.setState({
      searchVal: val
    })
  }

  render() {
    const { rowData, columnDefs, defaultColDef, pageSize } = this.state
    return (
      <Row className="app-user-list">
       
       <Col lg="3" md="6" sm="12">
            <SubscribersGained />
          </Col>
          <Col lg="3" md="6" sm="12">
            <RevenueGenerated />
          </Col>
          <Col lg="3" md="6" sm="12">
            <QuaterlySales />
          </Col>
          <Col lg="3" md="6" sm="12">
            <OrdersReceived />
          </Col>
          
          {/* <Col lg="4" md="6" sm="12">
            <StatisticsCard
              iconRight
              icon={<Monitor className="primary" size={22} />}
              stat="78.9k"
              statTitle="Site Traffic"
              options={siteTraffic}
              series={siteTrafficSeries}
              type="line"
            />
          </Col>
          <Col lg="4" md="6" sm="12">
            <StatisticsCard
              iconRight
              icon={<UserCheck className="success" size={22} />}
              iconBg="success"
              stat="659.8k"
              statTitle="Active Users"
              options={activeUsers}
              series={activeUsersSeries}
              type="line"
            />
          </Col>
          <Col lg="4" md="6" sm="12">
            <StatisticsCard
              iconRight
              icon={<Mail className="warning" size={22} />}
              iconBg="warning"
              stat="28.7k"
              statTitle="Newsletter"
              options={newsLetter}
              series={newsLetterSeries}
              type="line"
            />
          </Col> */}

        <Col sm="12">
          <Card>
            <CardBody>
              <div className="ag-theme-material ag-grid-table flex-wrap">
                <div className="ag-grid-actions d-flex justify-content-between flex-wrap mb-1">
                  
                <div className="actions-left d-flex flex-wrap mt-1">             
                    <div className="export-btn mr-2">
                      <Button.Ripple
                        color="primary"
                        onClick={() => this.gridApi.exportDataAsCsv()}
                      >
                        Export CSV
                      </Button.Ripple>
                    </div>         
                    <div className="export-btn">
                    <Button.Ripple color="success" onClick={this.toggleModal}>Add New
                    </Button.Ripple>
                    </div>     
                  </div> 

                 <div className="actions-right d-flex flex-wrap mt-1">
                  <div className="sort-dropdown">
                    <UncontrolledDropdown className="ag-dropdown " style={{padding:"0.6rem", borderRadius:"0"}}>
                      <DropdownToggle tag="div">
                        1 - {pageSize} of 150
                        <ChevronDown className="ml-50" size={15} />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(10)}
                        >
                          10
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(50)}
                        >
                          50
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(100)}
                        >
                          100
                        </DropdownItem>
                        <DropdownItem
                          tag="div"
                          onClick={() => this.filterSize(150)}
                        >
                          150
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <div className="filter-section ml-2">
                    <Input
                      type="text"
                      placeholder="search..."
                      onChange={e => this.updateSearchQuery(e.target.value)}
                      value={this.state.searchVal}
                    />  
                  </div>   
                  </div>  
                   
                    {/* <div className="dropdown actions-dropdown">
                      <UncontrolledButtonDropdown>
                        <DropdownToggle className="px-2 py-75" color="white">
                          Actions
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem tag="a">
                            <Trash2 size={15} />
                            <span className="align-middle ml-50">Delete</span>
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Clipboard size={15} />
                            <span className="align-middle ml-50">Archive</span>
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Printer size={15} />
                            <span className="align-middle ml-50">Print</span>
                          </DropdownItem>
                          <DropdownItem tag="a">
                            <Download size={15} />
                            <span className="align-middle ml-50">CSV</span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div> */}
                </div>
                {this.state.rowData !== null ? (
                  <ContextLayout.Consumer>
                    {context => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={true}
                        pagination={true}
                        pivotPanelShow="always"
                        paginationPageSize={pageSize}
                        resizable={true}
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                ) : null}
              </div>
            </CardBody>
          </Card>
        </Col>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggleModal}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader toggle={this.toggleModal}>
          Add Committee
        </ModalHeader>
        <ModalBody>
        <Form>
        <Row >

        <Col md="6" sm="12">
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" id="name" placeholder="Enter your name" required />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="designation">Designation</Label>
                  <Input type="text" id="designation" placeholder="Enter your designation" required />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="institute">Institute</Label>
                  <Input type="text" id="institute" placeholder="Enter your institute" required />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="file">Photo</Label>
                  <Input type="file" id="file" placeholder="Enter your email" required />
                </FormGroup>
              </Col>
              <Col md="12" sm="12">
                <FormGroup>
                  <Label for="details">Details</Label>
                  <Input type="textarea" id="details" placeholder="Enter faculty details" rows="3" required />
                </FormGroup>
              </Col>           
              <Col md="6" sm="12">
              <Button.Ripple className="" color="primary" type="submit">Submit</Button.Ripple>
              <Button.Ripple color="warning" type="reset" className="ml-1">Reset</Button.Ripple>
              </Col>
            </Row>
            </Form>
        </ModalBody>
      </Modal>
      </Row>
    )
  }
}

export default CommitteeList
