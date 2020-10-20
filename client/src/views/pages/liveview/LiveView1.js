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
import banner from "../../../assets/img/logo/banner.jpg"
class LiveView extends React.Component {

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
        headerName: "Name",
        field: "name",
        filter: true,
        width: 275
        // ,
        // cellRendererFramework: params => {
        //   return (
        //     <div className="d-flex align-items-center cursor-pointer" >
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
        headerName: "Question",
        field: "question",
        filter: true,
        width: 750
      },
      {
        headerName: "Publish Date",
        field: "timing",
        filter: true,
        width: 200
      }
    ]
  }
  componentDidMount() {
    axios.get("http://localhost:3000/viewlive/getlist").then(response => {
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

          <Col sm="12" className="mb-2">
          <img src={banner} width="100%" />
          </Col>

        <Col sm="7">
          <Card className="overflow-hidden">
              <CardBody className="text-center">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/3dSXSkWmJ24"
                  frameBorder="0"
                  allow="accelerometer autoplay encrypted-media gyroscope picture-in-picture"
                  allowFullScreen
                  title="video"
                />
              </div>
              </CardBody>
            </Card>
        </Col>
        <Col sm="5">
        <Card>
          <CardBody>
            <div className="d-flex justify-content-start align-items-center mb-1">
              <div className="avatar mr-1">
                <img
                  src={profileImg}
                  alt="avtar img holder"
                  height="60"
                  width="60"
                />
              </div>
              <div className="user-page-info">
                <p className="mb-0">Shaik Basheer</p>
                <span className="font-small-2">AIIMS, Apollo, Osmania Medical Collage</span>
              </div>
              {/* <div className="ml-auto user-like">
                <Heart fill="#EA5455" stroke="#EA5455" />
              </div> */}
            </div>
            <fieldset className="form-label-group mb-50">
              <Input
                type="textarea"
                rows="11"
                placeholder="Ask a Questions"
                id="add-comment"
              />
              <Label for="add-comment">Ask a Questions</Label>
            </fieldset>
            <Button.Ripple color="success">
              Ask a question
            </Button.Ripple>
          </CardBody>
        </Card>
        </Col>

<Col sm="12">
          <Card>
            <CardBody>
              <div className="ag-theme-material ag-grid-table flex-wrap">
                <div className="ag-grid-actions d-flex justify-content-between flex-wrap mb-1">

                <div className="actions-left d-flex flex-wrap mt-1">

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
                    {/* <div className="export-btn mr-2">
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
                    </div>      */}
                  </div>

                 <div className="actions-right d-flex flex-wrap mt-1">
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
      {/* <Modal
        isOpen={this.state.modal}
        toggle={this.toggleModal}
        className="modal-dialog-centered modal-lg"
      >
        <ModalHeader toggle={this.toggleModal}>
          Add Registration
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
                  <Label for="email">Email</Label>
                  <Input type="email" id="email" placeholder="Enter your email" required />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="mobile">Mobile No</Label>
                  <Input type="number" id="mobile" placeholder="Enter your mobile no" required />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" id="password" placeholder="Enter your password" required />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="amount">Amount</Label>
                  <Input type="number" id="amount" placeholder="Enter your amount" required />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label for="bankdetails">Bank Details</Label>
                  <Input type="text" id="bankdetails" placeholder="Enter your bank details" required />
                </FormGroup>
              </Col>
              <Col md="6" sm="12">
              <Button.Ripple className="" color="primary" type="submit">Submit</Button.Ripple>
              <Button.Ripple color="warning" type="reset" className="ml-1">Reset</Button.Ripple>
              </Col>
            </Row>
            </Form>
        </ModalBody>
      </Modal> */}
      </Row>
    )
  }
}

export default LiveView
