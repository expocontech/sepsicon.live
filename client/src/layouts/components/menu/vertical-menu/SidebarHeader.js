import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Disc, X, Circle } from "react-feather"
//import logo from "../../../../assets/img/logo/logo11222.jpg" 
import logo from "../../../../assets/img/logo/logo.png" 

import classnames from "classnames"
import axios from "axios"
class SidebarHeader extends Component {

state = {
  shorttitle:''
}
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BASENAME}eventsetting`).then(
      // history.push('/pages/liveview')
      (response) => {
        console.log("response", response);
        if (response.data.status == true) {
          this.setState({
            shorttitle: response.data.titleshort,

          })

          // console.log('logo', this.state.logo)
          // console.log('web', this.state.weburl)
        }

      }

    ).catch((error) => {
      // history.push('/')
      this.setState({
        message: "Some error"
      })
    })
  }


  render() {
    let {
      toggleSidebarMenu,
      activeTheme,
      collapsed,
      toggle,
      sidebarVisibility,
      menuShadow
    } = this.props
    return (
      <div className="navbar-header" style={{paddingLeft:"0px"}}>
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item mr-auto">
            
          <div className="mr-50">
                <img src={logo} style={{width:"100%"}}/>
              </div>
            {/* <NavLink to="/" className="navbar-brand"> 
    <h2 className="brand-text mb-0">{this.state.shorttitle.toLocaleUpperCase()}</h2>
            </NavLink> */}
          </li>
          <li className="nav-item nav-toggle">
            <div className="nav-link modern-nav-toggle">
              {collapsed === false ? (
                <Disc
                  onClick={() => {
                    toggleSidebarMenu(true)
                    toggle()
                  }}
                  className={classnames(
                    "toggle-icon icon-x d-none d-xl-block font-medium-4",
                    {
                      "text-primary": activeTheme === "primary",
                      "text-success": activeTheme === "success",
                      "text-danger": activeTheme === "danger",
                      "text-info": activeTheme === "info",
                      "text-warning": activeTheme === "warning",
                      "text-dark": activeTheme === "dark"
                    }
                  )}
                  size={20}
                  data-tour="toggle-icon"
                />
              ) : (
                  <Circle
                    onClick={() => {
                      toggleSidebarMenu(false)
                      toggle()
                    }}
                    className={classnames(
                      "toggle-icon icon-x d-none d-xl-block font-medium-4",
                      {
                        "text-primary": activeTheme === "primary",
                        "text-success": activeTheme === "success",
                        "text-danger": activeTheme === "danger",
                        "text-info": activeTheme === "info",
                        "text-warning": activeTheme === "warning",
                        "text-dark": activeTheme === "dark"
                      }
                    )}
                    size={20}
                  />
                )}
              <X
                onClick={sidebarVisibility}
                className={classnames(
                  "toggle-icon icon-x d-block d-xl-none font-medium-4",
                  {
                    "text-primary": activeTheme === "primary",
                    "text-success": activeTheme === "success",
                    "text-danger": activeTheme === "danger",
                    "text-info": activeTheme === "info",
                    "text-warning": activeTheme === "warning",
                    "text-dark": activeTheme === "dark"
                  }
                )}
                size={20}
              />
            </div>
          </li>
        </ul>
        <div
          className={classnames("shadow-bottom", {
            "d-none": menuShadow === false
          })}
        />
      </div>
    )
  }
}

export default SidebarHeader
