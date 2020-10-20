import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import SurveySearch from "./SurveySearch"

import "../../../assets/scss/pages/faq.scss"

class Survey extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <SurveySearch />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Survey
