import React from "react"
import {
  Card,
  CardBody,
  Row,
  Col,
  Media,
  Table,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap"
import ExtensionsHeader from "../../../extensions/extensionsHeader"
import certificate from "../../../assets/img/pages/certificate/file.jpg"
import { Mail, Phone, FileText, Download } from "react-feather"

import "../../../assets/scss/pages/invoice.scss"

class Certificate extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <Row>
          {/* <Col className="mb-1 invoice-header" md="5" sm="12">
            <InputGroup>
              <Input placeholder="Email" />
              <InputGroupAddon addonType="append">
                <Button.Ripple color="primary" outline>
                  Send Invoice
                </Button.Ripple>
              </InputGroupAddon>
            </InputGroup>
          </Col> */}
          <Col className="mb-1 invoice-header" md="5" sm="12">
            <h1>Certificate</h1>
          {/* <ExtensionsHeader title="Certificate"  /> */}
          </Col>
          <Col
            className="d-flex flex-column flex-md-row justify-content-end invoice-header mb-1"
            md="7"
            sm="12"
          >
            <Button
              className="mr-1 mb-md-0 mb-1"
              color="primary"
              onClick={() => window.print()}
            >
              <FileText size="15" />
              <span className="align-middle ml-50">Print</span>
            </Button>
            <Button.Ripple color="primary" outline>
              <Download size="15" />
              <span className="align-middle ml-50">Download</span>
            </Button.Ripple>
          </Col>
          <Col className="invoice-wrapper" sm="12">
            <Card className="invoice-page text-center">
              {/* <CardBody style={{backgroundImage: "url(" + certificate + ")", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}> */}
              <CardBody>
                <Row>
                    <img src={certificate} alt="certificate" style={{width: "100%"}} />
                </Row>
                <Row>
                  <Col md="12" sm="12" className="text-center" style={{position: "absolute", top: "35%"}}>
                    <h1 style={{fontStyle: "italic", fontFamily: "Open Sans"}}>Certificate of Participation</h1>
                    <h5 className="mt-2">This is to certify that</h5>
                    <h2 className="mt-2">Shaik Basheeruddin</h2>
                    <div className="company-info my-2">
                      <p>has attend the eConference at Digital Diabetes Summit 2020, held at Hyderabad, Telengana.</p>
                      <p>This academic event has been awarded “4 (Four) credit hours” by The Telangana State Medical Council.</p>
                      <p>(Vide Letter No. TSMC/CME/1064/2019 Dated : 17/07/2019)</p>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Certificate
