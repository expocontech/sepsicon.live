import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap"
import { MoreHorizontal, Facebook, Instagram, Twitter } from "react-feather"
import axios from "axios"
import { history } from "../../../history"
import axios from "axios"

class AboutCard extends React.Component {

  state = {
    data: []
  }

  componentDidMount = () => {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}sponsor/detail/${this.props.sidabout}`, { headers: authHeader }).then(
        response => {
          // console.log(response.data);
          this.setState({
            data: response.data.result
          });
        }
      ).catch((error) => {
        console.log(error)
        history.push('/')
      });
    }
    else {
      history.push('/')
    }

  }

  render() {
    let result = this.state.data.map(item => {
      return (
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
            {/* <MoreHorizontal size={15} className="cursor-pointer" /> */}
          </CardHeader>
          <CardBody>
            <p className="text-justify">{item.about}</p>
            <div className="mt-1">
              <h6 className="mb-0">Email: <a href={`mailto:` + item.email}>{item.email}</a></h6>
            </div>
            <div className="mt-1">
              <h6 className="mb-0">Website: <a href={`//` + item.website} target="_blank">{item.website}</a></h6>
            </div>
            <div className="mt-1">
              <a href={`//` + item.facebook} target="_blank">
                <Button color="primary" size="sm" className="btn-icon mr-25 p-25">
                  <Facebook />
                </Button>
              </a>
              <Button color="primary" size="sm" className="btn-icon mr-25 p-25">
                <Twitter />
              </Button>
              <Button color="primary" size="sm" className="btn-icon p-25">
                <Instagram />
              </Button>
            </div>
          </CardBody>
        </Card>
      )
    })
    return result;
  }

}
export default AboutCard
