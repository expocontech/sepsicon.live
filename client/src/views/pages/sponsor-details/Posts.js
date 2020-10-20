import React from "react"
import {
  Card,
  CardBody,
  UncontrolledTooltip,
  Input,
  Label,
  Button,
  Col,
  Row
} from "reactstrap"
import { Heart, MessageSquare } from "react-feather"
import profileImg from "../../../assets/img/profile/user-uploads/user-01.jpg"
import postImg1 from "../../../assets/img/sponsor/document1.jpg"
import person1 from "../../../assets/img/portrait/small/avatar-s-1.jpg"

class Posts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
        <Col lg="6" md="12">
        <Card>
          <CardBody>
            <p> Reniva Product Monograph </p>
            <img
              src={postImg1}
              alt="postImg1"
              className="img-fluid rounded-sm"
            />            
          </CardBody>
        </Card>
        </Col>
        
        <Col lg="6" md="12">
        <Card>
          <CardBody>
            <p> Reniva Product Monograph </p>
            <img
              src={postImg1}
              alt="postImg1"
              className="img-fluid rounded-sm"
            />            
          </CardBody>
        </Card>
        </Col>
        
        <Col lg="6" md="12">
        <Card>
          <CardBody>
            <p> Reniva Product Monograph </p>
            <img
              src={postImg1}
              alt="postImg1"
              className="img-fluid rounded-sm"
            />            
          </CardBody>
        </Card>
        </Col>
        
        <Col lg="6" md="12">
        <Card>
          <CardBody>
            <p> Reniva Product Monograph </p>
            <img
              src={postImg1}
              alt="postImg1"
              className="img-fluid rounded-sm"
            />            
          </CardBody>
        </Card>
        </Col>
        </Row>
        
      </React.Fragment>
    )
  }
}
export default Posts
