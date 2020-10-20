import React, { Component } from "react";
import { history } from "../../../../src/history";
import axios from "axios";


class BannerComponent extends React.Component {
  state = {
    footer: '',
    footerurl: '',
    footerstatus: ''
  }

  fetchBanner = () => {
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      fetch(`${process.env.REACT_APP_BASENAME}viewlive/footer`, { headers: authHeader }).then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
        this.setState({
          footer: `${process.env.REACT_APP_BASENAME}` + data.result[0].footerbanner,
          footerurl: data.result[0].footerurl
        });
      })
    }
    else {
      history.push('/');
    }

  }

  componentDidMount() {
    this.fetchBanner();

    axios.get(`${process.env.REACT_APP_BASENAME}eventsetting`).then(
      (response) => {

        if (response.data.status == true) {
          var footerstat
          if (response.data.footertab == 1) {
            footerstat = true
          }
          else {
            footerstat = false
          }
          this.setState({
            footerstatus: footerstat
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


  render = () => {

    return (

      <div>
        {this.state.footerstatus ? <a href={this.state.footerurl} target="_blank" >
          <img src={this.state.footer} width="100%" />
        </a> : null }

      </div >
    );
  }
}

export default BannerComponent;
