import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap"
import classnames from "classnames"
import SignupForm from "./SignupForm"
import registerImg from "../../../../assets/img/pages/logo.png"
import registrationleft from "../../../../assets/img/pages/registrationleft.jpg" 
import loginmiddle from "../../../../assets/img/pages/loginmiddle.png" 
import loginbottom from "../../../../assets/img/pages/loginbottom.png" 
import "../../../../assets/scss/pages/authentication.scss"
import { history } from "../../../../history"
import axios from "axios"
class Register extends React.Component {
  state = {
    activeTab: "1",
    logo: '',
    rtext: ''
  }
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }


  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BASENAME}eventsetting`).then(
      (response) => {
        console.log("response", response);
        if (response.data.status == true) {
          this.setState({
            logo: `${process.env.REACT_APP_BASENAME}` + response.data.logo,
            rtext: response.data.registertext
          })
        }

      }

    ).catch((error) => {
      history.push('/')
      this.setState({
        message: "Some error in login"
      })
    })
  }
  render() {
    return (
      <div style={{background:"#bae7ff",padding:"20px"}}>
      <Row className="m-0 justify-content-center" style={{background:"#fff",borderRadius:"15px"}}>
        <Col lg="7" md="7" style={{textAlign:"center"}}>
          <img src={registrationleft} style={{width:"100%"}} />
        </Col>
        <Col lg="5" md="5" style={{textAlign:"center"}}>
            <Row className="m-0">
              <Col lg="12" className="p-0" style={{background:"#bae7ff"}}>
                {/* <Card className="rounded-0 mb-0 p-2"> */}
                  {/* <CardHeader className="pb-1 pt-50">
                    <CardTitle>
                      <h4 className="mb-0">Create an Account</h4>
                    </CardTitle>
                  </CardHeader> */}
                  <p className="px-2 auth-title mb-0">
                    {this.state.rtext}
                  </p>
                  <CardBody className="pt-1 pb-50">
                    <SignupForm />
                  </CardBody>
                {/* </Card> */}
              </Col>
            </Row>
          <img src={loginbottom} style={{width:"100%"}} style={{marginTop:"20px"}} />
        </Col>
      </Row>
        </div>
    )
  }
}
export default Register
