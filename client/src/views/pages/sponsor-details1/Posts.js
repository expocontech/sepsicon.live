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
import axios from "axios";
import { history } from "../../../history"

class Posts extends React.Component {

  state = {
    data: []
  }
  componentDidMount = () => {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor/doc/${this.props.sidposts}`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            data: response.data.result
          });
        }
      ).catch((error) => {
        console.log(error);
        history.push('/')
      });
    }
    else {
      history.push('/')
    }

  }

  handleDocClick = (docid) => {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      const data = {
        "sponsorid": this.props.sidposts,
        "docid": docid,
        "userid": sessionStorage.getItem('uid').toString()
      }
      axios.post(`${process.env.REACT_APP_BASENAME}sponsor/doc-count`, data, { headers: authHeader }).then(response =>
        console.log(response)
      ).catch((error) => {
        console.log(error);
        // history.push('/')
      });
    }
    else {
      history.push('/')
    }
  }

  render() {

    return (

      <React.Fragment>

        <Row>
          {this.state.data.map(item => (
            <Col lg="6" md="12">
              <a href={`${process.env.REACT_APP_BASENAME}` + item.pdf} target="_blank" onClick={() => this.handleDocClick(item.id)}>
                <Card>
                  <CardBody>
                    <p> {item.title} </p>
                    <img
                      src={`${process.env.REACT_APP_BASENAME}` + item.img}
                      alt={item.title}
                      className="img-fluid rounded-sm"
                    />
                  </CardBody>
                </Card>
              </a>
            </Col>
          ))}
        </Row>

      </React.Fragment>

    )
  }
}
export default Posts
