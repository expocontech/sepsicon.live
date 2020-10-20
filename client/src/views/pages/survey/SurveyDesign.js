import React from "react"
import { Card, CardBody, Row, Col, Button, Form, Label, FormGroup, Modal, ModalHeader, ModalBody, Input } from "reactstrap"
// import { Link } from "react-router-dom"
import { data } from "./SurveyData"
//import falimg from "../../../assets/img/pages/Survey/logo.png"
import banner from "../../../assets/img/logo/banner.jpg"
import Radio from "../../../components/@vuexy/radio/RadioVuexy"

class SurveyDesign extends React.Component {

  state = {
    modal: false
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  renderCards = () => {
    let result = data.map(item => {
      if (this.props.value.length < 1) {
        return (
          <Col md="12" sm="12" xs="12" className="search-content" key={item.id} onClick={this.toggleModal}>
            <Card>
              <CardBody> 
                  {/* <p className="text-dark">{item.date}</p>                  */}
                  <h4 style={{lineHeight:"1.5"}}>{item.title.toUpperCase()}</h4>
                  {/* <p className="text-dark">{item.institute}</p>   */}
              </CardBody>
            </Card>
          </Col>

        )
      } else if (item.title.includes(this.props.value)) {
        return (
          <Col md="12" sm="12" xs="12" className="search-content" key={item.id} onClick={this.toggleModal}>
            <Card>
              <CardBody>
                  {/* <p className="text-dark">{item.date}</p> */}
                  <h4 style={{lineHeight:"1.5"}}>{item.title.toUpperCase()}</h4>
              </CardBody>
            </Card>
          </Col>
        )
      }
      return ""
    })
    return result
  }
  render() {
    return <Row>{this.renderCards()}
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered modal-lg" >
            <ModalHeader toggle={this.toggleModal}>Survey
            </ModalHeader>
            <ModalBody>
            <Form>
           <Row >  
         <Col md="12" sm="12" xs="12">     
           <Card>
     <CardBody>
       <p>Q01. Which of the following causes fatigue in men more than in women?</p>
       <Radio
         label="Thyrotoxic myopathy"
         color="primary"
         defaultChecked={false}
         name="exampleRadioSizes"
         className="py-50"
       />
       <Radio
         label="Myasthenia with Graves disease"
         color="primary"
         defaultChecked={false}
         name="exampleRadioSizes"
         className="py-50"
       />
       <Radio
         label="Primary hyperparathyroidism"
         color="primary"
         defaultChecked={false}
         name="exampleRadioSizes"
         className="py-50"
       />
       <Radio
         label="Diabetic amyotrophy"
         color="primary"
         defaultChecked={false}
         name="exampleRadioSizes"
         className="py-50"
       />

       <fieldset className="form-label-group mb-50">
             <Label for="add-comment">Comments</Label>
             <Input
               type="textarea"
               rows="6"
               placeholder="Comments"
               id="add-comment"
             />
             </fieldset>
             <Button.Ripple color="success">
             Submit
           </Button.Ripple>
     </CardBody>
   </Card> 
   </Col>
             </Row>
             </Form>
          </ModalBody>
        </Modal>
    
    </Row>
    
  }
}
export default SurveyDesign
