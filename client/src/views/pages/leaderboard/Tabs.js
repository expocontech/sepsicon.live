import React from "react"
import {
  Card, Label, Button,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  Input,
  NavItem,
  NavLink, Table
} from "reactstrap"
import classnames from "classnames"
import LeaderboardList from "./LeaderboardList"   

import { GoReport } from "react-icons/go";
import { FiUsers } from "react-icons/fi";

class Tabs extends React.Component {
  state = {
    activeTab: "1",
    active: "1"
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  toggle = tab => {
    if (this.state.active !== tab) {
      this.setState({ active: tab })
    }
  }
  render() {
    return (
      <React.Fragment>
        <Card style={{backgroundImage: `url(${require("../../../assets/img/sponsor/bg.jpg")})`, backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize
        :"cover"}}>
          <CardBody>
            <TabContent className="py-50" activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Nav pills className="justify-content-center">
                  <NavItem className="col-md-4" style={{textAlign:"center"}}>
                    <NavLink style={{padding: "10px",border:"2px solid #fff"}}
                      className={classnames({
                        active: this.state.active === "1"
                      })}
                      onClick={() => {
                        this.toggle("1")
                      }}
                    >
                     Leaderboard
                    </NavLink>
                  </NavItem>
                  <NavItem className="col-md-4" style={{textAlign:"center"}}> 
                    <NavLink style={{padding: "10px",border:"2px solid #fff"}}
                      className={classnames({
                        active: this.state.active === "2"
                      })}
                      onClick={() => {
                        this.toggle("2")
                      }}
                    >
                   Points
                    </NavLink>
                  </NavItem>
                  <NavItem className="col-md-4" style={{textAlign:"center"}}>
                    <NavLink style={{padding: "10px",border:"2px solid #fff"}}
                      className={classnames({
                        active: this.state.active === "3"
                      })}
                      onClick={() => {
                        this.toggle("3")
                      }}
                    >
                    Leaderboard Criteria
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.active}>
                  <TabPane tabId="1">
            {/* <AttendeeList /> */}
            <LeaderboardList />
                  </TabPane>
                  <TabPane tabId="2">
                  <Table bordered  responsive style={{marginTop:"30px",background:"#fff"}}>
          <thead>
            <tr>
              <th>Activities Available for Points</th>
              <th>Point Value</th>
              <th>My Activity Count	</th>
              <th>My Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Booth Visit</td>
              <td>250</td>
              <td>8</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>Attending Sessions in Plenary</td>
              <td>200</td>
              <td>1</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Video Views</td>
              <td>50</td>
              <td>2</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Photo Booth</td>
              <td>50</td>
              <td>1</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Interaction Zone	</td>
              <td>50</td>
              <td>1</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Login</td>
              <td>25</td>
              <td>1</td>
              <td>25</td>
            </tr>
          </tbody>
        </Table>
                  </TabPane>
                  <TabPane tabId="3">
                  <Table bordered  responsive style={{marginTop:"30px",background:"#fff"}}>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Booth Visit</td>
              <td>250</td>
            </tr>
            <tr>
              <td>Attending Sessions in Plenary</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Video Views</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Photo Booth</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Interaction Zone	</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Login</td>
              <td>25</td>
            </tr>
          </tbody>
        </Table>
                  </TabPane>
                </TabContent>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default Tabs
