import React, { Component } from "react";
import { history } from "../../../../src/history";
import axios from "axios";


class TitleComponent extends React.Component {
  state = {
    title:''
  }



  componentDidMount() {
    axios.get(`${process.env.REACT_APP_BASENAME}eventsetting`).then(
      (response) => {
        if (response.data.status == true) {
          this.setState({
            title: response.data.middletitle
          })
        }
      }
    ).catch((error) => {
      history.push('/')
      this.setState({
        message: "Some error in Server"
      })
    })
  }


  render() {
    return (
      <div className="logo d-flex align-items-center">
      <div className="mr-50">
      </div>
      <h2 className="text-primary brand-text mb-0">{this.state.title}</h2>
    </div>
    )
  }
}

export default TitleComponent;
