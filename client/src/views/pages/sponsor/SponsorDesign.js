import React from "react"
import { Card, CardBody, Row, Col, Button } from "reactstrap"
import axios from "axios"
import { history } from "../../../history"
class SponsorDesign extends React.Component {

  state = {
    modal: false,
    data: []
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  handleReadmore = (sid) => {
    sessionStorage.setItem('spid', sid)
    if (sessionStorage.getItem('spid') != '') {
      history.push('/pages/sponsordetails')
    }
  }

  componentDidMount = () => {

    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            data: response.data.result
          });
        }
      ).catch((error) => {
        console.log(error)
      });
    }
    else {
      history.push('/')
    }

  }

  renderCards = () => {
    let result = this.state.data.map(item => {
      if (this.props.value.length < 1) {
        return (
          // <Col md="4" sm="12" xs="12" className="search-content" key={item.id} onClick={() => this.handleReadmore(item.id)}>
          <Col md="4" sm="12" xs="12" className="search-content" key={item.id} onClick={history.push(`/pages/sponsordetails/${item.id}`)}>
            <div className="text-center" style={{ backgroundColor: "none" }}>
              <img
                src={`${process.env.REACT_APP_BASENAME}` + item.logo}
                alt={item.company}
                className="mx-auto mb-2"
                width="100%"
              />
            </div>
          </Col>

        )
      } else if (item.company.includes(this.props.value)) {
        return (
          <Col md="6" sm="12" xs="12" className="search-content" key={item.id}>
            <Card>
              <CardBody className="text-center">
                <img
                  src={`${process.env.REACT_APP_BASENAME}` + item.logo}
                  alt={item.company}
                  className="mx-auto mb-2"
                  width="100%"
                />
                <h5>{item.company.toUpperCase()}</h5>
                <p className="text-dark">{item.type}</p>
                <Button.Ripple className="btn-block gradient-light-primary" onClick={history.push(`/pages/sponsordetails/${item.id}`)}>
                  Read More
                  </Button.Ripple>
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
    return <Row>{this.renderCards()} </Row>


  }
}
export default SponsorDesign
