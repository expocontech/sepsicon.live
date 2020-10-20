import React from "react"
import { Card, CardBody, Row, Col } from "reactstrap"
// import { Link } from "react-router-dom"
import { data } from "./CommitteeData1"

class CommitteeDesign2 extends React.Component {
  renderCards = () => {
    let result = data.map(item => {
      if (this.props.value.length < 1) {
        return (
          <Col md="3" sm="12" xs="12" className="search-content" key={item.id}>
            <Card>
              <CardBody className="text-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto mb-2"
                    width="100%"
                  />
                  <h6>{item.title.toUpperCase()}</h6>
                  <p className="text-dark">{item.text}</p>
              </CardBody>
            </Card>
          </Col>
        )
      } else if (item.title.includes(this.props.value)) {
        return (
          <Col md="3" sm="12" xs="12" className="search-content" key={item.id}>
            <Card>
              <CardBody className="text-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mx-auto mb-2"
                    width="100%"
                  />
                  <h6>{item.title.toUpperCase()}</h6>
                  <p className="text-dark">{item.text}</p>
              </CardBody>
            </Card>
          </Col>
        )
      }
      return ""
    })
    return result
  }
  render() {
    return <Row>{this.renderCards()}</Row>
  }
}
export default CommitteeDesign2
