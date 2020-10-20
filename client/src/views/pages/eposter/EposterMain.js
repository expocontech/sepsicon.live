import React from "react"
import { Card, CardBody, FormGroup, Input, Row, Col } from "reactstrap"
import { Search } from "react-feather"
import EposterDesign from "./EposterDesign"

class EposterMain extends React.Component {
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
      <Row >
        <Col sm="12">
          <Card className="mt-1">
            <CardBody className="knowledge-base-bg">
              <h1 className="white">ePoster</h1>
              {/* <p className="mb-2 white">
              style={{backgroundImage: `url(${require("../../../assets/img/sponsor/exhibition_bg.jpg")})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}
                Bonbon sesame snaps lemon drops marshmallow ice cream carrot
                cake croissant wafer.
              </p> */}
              <form>
                <FormGroup className="position-relative has-icon-left mb-0">
                  <Input
                    type="text"
                    placeholder="Search a name"
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
        <Col sm="12" style={{paddingLeft:"30px",paddingRight:"30px"}}>
          <EposterDesign value={this.state.value} />
        </Col>
      </Row>
    )
  }
}
export default EposterMain
