import React from "react"
import { Row } from "reactstrap"
import "../../../assets/scss/pages/knowledge-base.scss"
import axios from "axios"
import { history } from "../../../../src/history"

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}

class Banner extends React.Component {

  state = {
    modal: false,
    data: [],
    hicon: []
  }
  toggleModal1 = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  componentDidMount = () => {
    if (sessionStorage.getItem('token') != undefined) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      axios.get(`${process.env.REACT_APP_BASENAME}home-lobby/get-sponsor`, { headers: authHeader }).then((response) => {
        if (response.data.status == true) {
          this.setState({
            data: response.data.result
          })
        }
      }).catch((error) => {
        console.log(error);
        history.push('/')
      })
    }
    else {
      history.push('/')
    }
  }
  render() {
    return (
      <Row>
        {this.state.data.map(item => (
          <div id="stalldetails1" className="stalldetails1" style={{ position: "absolute", left: item.dleft + "%", width: item.dwidth + "%", height: item.dheight + "%", top: item.dtop + "%", cursor: "pointer", WebkitTransform: "rotate(0deg)" }}
            onClick={() => { history.push(`${item.url}`) }}>
            <img src={process.env.REACT_APP_BASENAME + `${item.image}`} alt="organgestall" width="100%" style={{ backgroundSize: "100%" }} />
          </div>
        ))}
      </Row>
    )
  }
}

export default Banner
