import React, { Component } from "react";
import { history } from "../../../../src/history";
import axios from "axios";
import cadila from "./cadila_logo.jpg"
import logo from "../../../assets/img/logo/cadila_logo.jpg"


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
      <div className="logo d-flex align-items-center" style={{width:"65%"}}>
      <div className="mr-50" style={{textAlign:"center"}}>
        {/* <img src={logo} style={{width:"50%"}}/> */}
      </div>
      <h2 className="text-primary brand-text mb-0" style={{textAlign:"center",width:"70%"}}>{this.state.title}</h2>
      <div className="mr-50" style={{textAlign:"center"}}>
        <img src={logo} style={{width:"50%"}}/>
      </div>
    </div>
    )
  }
}

export default TitleComponent;
