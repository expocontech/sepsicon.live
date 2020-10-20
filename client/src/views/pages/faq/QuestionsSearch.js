import React from "react"
import { Card, CardBody, FormGroup, Input, Row, Col } from "reactstrap"
import { Search } from "react-feather"
import FaqQuestions from "./FaqQuestions"
class QuestionSearch extends React.Component {
  state = {
    value: ""
  }
  onChange = event => {
    let searchText = event.target.value.toLowerCase()
    this.setState({
      value: searchText
    })
  }
  render() {
    return (
      <Row>
        <Col sm="12">
          <Card className="mt-1">
            <CardBody className="knowledge-base-bg">
              <h1 className="white">FAQ</h1>
              <form>
                <FormGroup className="position-relative has-icon-left mb-0">
                  <Input
                    type="text"
                    placeholder="Search"
                    bsSize="lg"
                    value={this.state.value}
                    onChange={this.onChange}
                  />
                  <div className="form-control-position">
                    <Search size={14} />
                  </div>
                </FormGroup>
              </form>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <div className="faq">
            <Row>
              <Col lg="12" md="12" sm="12">
                <FaqQuestions value={this.state.value} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    )
  }
}
export default QuestionSearch
