import React from "react"
import { Row, Col } from "reactstrap"
import ProfileHeader from "./ProfileHeader"


import "../../../assets/scss/pages/users-profile.scss"

class ScientificHall extends React.Component {
  state = {
    isLoading: false
  }

  componentDidMount = () => {
    console.log("Hall id", this.props.match.params.id)
  }


  toggleLoading = () => {
    this.setState({
      isLoading: true
    })

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000)
  }

  render() {


    return (
      <React.Fragment>
        <div id="user-profile">
          <ProfileHeader hallid={this.props.match.params.id}/>
        </div>
      </React.Fragment>
    )
  }
}

export default ScientificHall
