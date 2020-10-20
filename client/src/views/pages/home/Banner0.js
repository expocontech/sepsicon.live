// import React from "react"
// import { Card, CardBody, CardHeader, CardTitle, Row, Col, Tooltip, Modal, ModalHeader, ModalBody } from "reactstrap"
// import Swiper from "react-id-swiper"
// import img1 from "../../../assets/img/pages/banner.jpg"
// import EventCountdown from "./Countdown"
// //import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
// import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
// import * as Icon from "react-feather"
// import CommitteeMain from "./CommitteeMain"
// import "../../../assets/scss/pages/knowledge-base.scss"
// import { Link } from "react-router-dom"
// import axios from "axios"
// import { history } from "../../../../src/history"
// import lobby from "../../../assets/img/sponsor/newlobby11.jpg"
// import agendapdf from "../../../assets/img/sponsor/agenda.pdf"
// import Agenda from "./Agenda"

// const params = {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   }
// }

// class Banner extends React.Component {

//   state = {
//     modal: false,
//     tooltipOpen: false,
//     tooltipOpen1: false,
//     tooltipOpen2: false,
//     tooltipOpen0: false,
//     data: [],
//     hicon:[]
//     }
//     toggleTooltip0 = () => {
//       this.setState({
//         tooltipOpen0: !this.state.tooltipOpen0
//       })
//     }

//     toggleTooltip = () => {
//       this.setState({
//         tooltipOpen: !this.state.tooltipOpen
//       })
//     }

//   toggleTooltip1 = () => {
//     this.setState({
//       tooltipOpen1: !this.state.tooltipOpen1
//     })
//   }

//   toggleTooltip2 = () => {
//     this.setState({
//       tooltipOpen2: !this.state.tooltipOpen2
//     })
//   }

//   toggleModal1 = () => {
//     this.setState(prevState => ({
//       modal: !prevState.modal
//     }))
// }

//   toggleModal = () => {
//     this.setState(prevState => ({
//       modal: !prevState.modal
//     }))
// }
//   componentDidMount = () => {
//     if (sessionStorage.getItem('token') != undefined) {
//       const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
//       axios.get(`${process.env.REACT_APP_BASENAME}home/banner`, { headers: authHeader }).then((response) => {
//         if(response.data.status == true){
//           this.setState({
//             data: response.data.result
//           })
//         }
//       }).catch((error) => {
//         console.log(error);
//         history.push('/')
//       })

//       // axios.get(`${process.env.REACT_APP_BASENAME}home/icon`, { headers: authHeader }).then((response) => {
//       //   // console.log(response.data);

//       //   if(response.data.status == true){
//       //     this.setState({
//       //       hicon: response.data.result
//       //     })
//       //   }
//       // }).catch((error) => {
//       //   console.log(error);
//       //   history.push('/')
//       // })

//       axios.get(`${process.env.REACT_APP_BASENAME}home/message`, { headers: authHeader }).then((response) => {
//         // console.log(response.data.result[0].image);
//         // const res = response.data
//         this.setState({
//           message: response.data.result[0].message
//         })
//         // console.log("img",img)

//       }).catch((error) => {
//         console.log(error);
//         history.push('/')
//       })
//     }
//     else {
//       history.push('/')
//     }



//   }
//   render() {
//     // const { img1, img2, img3, img4 } = this.state

//     return (

//       <Row>
//       <img src={lobby} alt="lobby" width="100%" style={{backgroundSize: "107%"}}/>
//       <div className="welcomvideo" id="welcomvideo" style={{position: "absolute", left: "40.8%", width: "18.3%", height: "22.1%", top: "39.7%", cursor: "pointer"}} onClick={this.toggleModal} >
//       <Tooltip placement="top" isOpen={this.state.tooltipOpen1} target="welcomvideo" toggle={this.toggleTooltip1}>
//           Welcome Message
//        </Tooltip>
//       </div>
//       <div className="mainhall" id="mainhall" style={{position: "absolute", left: "40.8%", width: "18.4%", height: "8.3%", top: "65.7%", cursor: "pointer"}}
//        onClick={() => {history.push("/pages/scientifichall")}}>
//       <Tooltip placement="top" isOpen={this.state.tooltipOpen0} target="mainhall" toggle={this.toggleTooltip0}>
//           Main Auditorium
//        </Tooltip>
//       </div>


//       </Row>


//     )
//   }
// }

// export default Banner
import React from "react"
import { Card, CardBody, CardHeader, CardTitle, Row, Col, Tooltip, Modal, ModalHeader, ModalBody } from "reactstrap"
import Swiper from "react-id-swiper"
import img1 from "../../../assets/img/pages/banner.jpg"
import EventCountdown from "./Countdown"
//import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import * as Icon from "react-feather"
import CommitteeMain from "./CommitteeMain"
import "../../../assets/scss/pages/knowledge-base.scss"
import { Link } from "react-router-dom"
import axios from "axios"
import { history } from "../../../../src/history"
import lobby from "../../../assets/img/sponsor/newlobby12.jpg"
import agendapdf from "../../../assets/img/sponsor/agenda.pdf"
import Agenda from "./Agenda"
import Stalls from "./Stalls"

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
    tooltipOpen: false,
    tooltipOpen1: false,
    tooltipOpen2: false,
    tooltipOpen0: false,
    data: [],
    hicon: []
  }
  toggleTooltip0 = () => {
    this.setState({
      tooltipOpen0: !this.state.tooltipOpen0
    })
  }

  toggleTooltip = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  toggleTooltip1 = () => {
    this.setState({
      tooltipOpen1: !this.state.tooltipOpen1
    })
  }

  toggleTooltip2 = () => {
    this.setState({
      tooltipOpen2: !this.state.tooltipOpen2
    })
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
      axios.get(`${process.env.REACT_APP_BASENAME}home-lobby/get-scientific`, { headers: authHeader }).then((response) => {
        console.log(response.data)
        this.setState({
          data: response.data.result
        })
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
    // const { img1, img2, img3, img4 } = this.state

    return (

      <Row>
        <img src={lobby} alt="lobby" width="100%" style={{ backgroundSize: "107%" }} />
        <div className="welcomvideo" id="welcomvideo" style={{ position: "absolute", left: "40.8%", width: "18.3%", height: "22.1%", top: "39.7%", cursor: "pointer" }} onClick={this.toggleModal} >
          <Tooltip placement="top" isOpen={this.state.tooltipOpen1} target="welcomvideo" toggle={this.toggleTooltip1}>
            Welcome Message
       </Tooltip>
        </div>

        {this.state.data.map(item => (
          <div className="mainhall" id="mainhall" style={{ position: "absolute", left: item.dleft + "%", width: item.dwidth + "%", height: item.dheight + "%", top: item.dtop + "%", cursor: "pointer" }}
            onClick={() => { history.push(`${item.url}`) }}>
          </div>
        ))}
        <Stalls />
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered modal-lg" >
          <ModalHeader toggle={this.toggleModal}>Welcome Message
           </ModalHeader>
          <ModalBody className="text-center">
            <iframe
              className="embed-responsive-item w-100"
              src="https://www.youtube.com/embed/_UafVmFJ2PU"
              allowFullScreen
              title="post"
              frameBorder="0"
              width="100%"
              height="350"
            />
          </ModalBody>
        </Modal>
      </Row>
    )
  }
}

export default Banner
