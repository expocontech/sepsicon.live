import React from "react"
import {
  Card,
  CardBody,
  Row,
  Col, Button
} from "reactstrap"

//import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import "../../../assets/scss/pages/users.scss"
class Programme extends React.Component {

  state = {
    modal: false
  }

  componentDidMount() {
    this.fetchProgramme()
  }

  fetchProgramme = () => {
    const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
    fetch(`${process.env.REACT_APP_BASENAME}programme/`, { headers: authHeader }).then(results => {
      return results.json();
    }).then(data => {
      // console.log(data);
      this.setState({
        title: data.result[0].title,
        img: `${process.env.REACT_APP_BASENAME}` + data.result[0].image,
        pdf: `${process.env.REACT_APP_BASENAME}` + data.result[0].pdf
      });
    })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <React.Fragment>
        <Card className="mt-1">
          <CardBody className="knowledge-base-bg">
            <h1 className="white">Programme</h1>
          </CardBody>
        </Card>
        <Row>
          {/* <Col sm="1" md="1"></Col> */}
          <Col sm="12" md="12" style={{paddingLeft:"30px",paddingRight:"30px"}}>
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between">
                  <Button.Ripple color="primary" type="submit" style={{ display: "none" }}>Register Now</Button.Ripple>
                  <a href={this.state.pdf} target="_blank"><Button.Ripple color="primary" >Download PDF</Button.Ripple></a>
                </div>
                <img src={this.state.img} className="mx-auto mb-1" width="100%" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Programme
