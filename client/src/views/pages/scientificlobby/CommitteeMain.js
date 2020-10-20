import React from "react"
import { Card, CardBody, FormGroup, Input, Row, Col } from "reactstrap"
import { Search } from "react-feather"
import axios from "axios";
import { history } from "../../../history"
class CommitteeMain extends React.Component {
  state = {
    value: "",
    comtype: [],
    com: []
  }

  onChange = event => {
    let searchText = event.target.value.toLowerCase()
    this.setState({
      value: searchText
    })
  }


  componentDidMount = () => {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}home/comtype`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            comtype: response.data.result
          });
        }
      ).catch((error) => {
        history.push('/pages/home')
        console.log(error)
      });


      axios.get(`${process.env.REACT_APP_BASENAME}home/committee`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            com: response.data.result
          });
        }
      ).catch((error) => {
        console.log(error)
        history.push('/pages/home')
      });
    }
    else {
      history.push('/')
    }
  }
  render = () => {

    let result = this.state.comtype.map(itemtype => {
      return (
        <Row>
          <Col sm="12">
            <h1 style={{ color: "#5385c5", marginBottom: "20px", fontWeight: "bolder" }}>{itemtype.typename}</h1>
            <Row>
              {this.state.com.map(item => {
                if (item.type == itemtype.id) {
                  return <Col md="3" sm="12" xs="12" className="search-content" key={item.id}>
                    <Card>
                      <CardBody className="text-center">
                        <img
                          src={`${process.env.REACT_APP_BASENAME}` + item.img}
                          alt={item.name}
                          className="mx-auto mb-2"
                          width="100%"
                        />
                        <h5>{item.name}</h5>
                        <p className="text-dark">{item.city}</p>
                      </CardBody>
                    </Card>
                  </Col>
                }
              })}
            </Row>
          </Col>
        </Row>
      )
    })
    return result;
  }

}
export default CommitteeMain
