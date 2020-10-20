import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Modal,  Row,  Col,  ModalHeader,  ModalBody, Form,
    Button, FormGroup,  Input,  Label, Collapse  } from "reactstrap"
import { ChevronDown } from "react-feather"
import classnames from "classnames"
import Radio from "../../../components/@vuexy/radio/RadioVuexy"

const collapseItems = [
  {
    id: 1,
    title: "Q01. Which of the following causes fatigue in men more than in women?",
    content:
      "Royalty free means you just need to pay for rights to use the item once per end product. You don't need to pay additional or ongoing fees for each person who sees or uses it. Please note that there may be some limits placed on uses under the different license types available on the marketplaces, such as our Photo and Music Licenses. The item is what you purchase from Envato Market. The end product is what you build with that item. Example: The item is a business card template the end product is the finalized business card. The item is a button graphic the end product is an app using the button graphic in the app's interface. The item is what you purchase from Envato Market. The end product is what you build with that item. Example: The item is a business card template the end product is the finalized business card. The item is a button graphic the end product is an app using the button graphic in the app's interface."
  },
  {
    id: 2,
    title: "Q02. Which of the following is not a correct statement ?",
    content:
      "The item is what you purchase from Envato Market. The end product is what you build with that item. Example: The item is a business card template the end product is the finalized business card. The item is a button graphic the end product is an app using the button graphic in the app's interface."
  },
  {
    id: 3,
    title: " Q03. A 58 year gentleman complains of fatigue, lack of motivation and disturbed sleep. He has slowing of movements and stiffness in legs, more on right with history of falls and occasional right hand tremors. There is no diurnal variation. What would be the next best step?",
    content:
      "Yes. You can customize our items to fit the needs of your end product. Example: You could change the colors, text, and layout of a flyer template or convert an HTML template into a WordPress theme for a single client."
  },
  {
    id: 4,
    title: "Q04. Which of the below mentioned variable is not a good measure of an individual’s exercise tolerance/functional capacity?",
    content:
      "Non-exclusive means that you are not the only person with access to the item. Others will also be licensing and using the same item."
  }
]

class SurveyQuestions extends React.Component {
  state = {
    collapseID: "",
    status: "Closed"
  }

  toggleCollapse = collapseID => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }))
  }

  onEntered = id => {
    if (id === this.state.collapseID) this.setState({ status: "Opened" })
  }
  onEntering = id => {
    if (id === this.state.collapseID) this.setState({ status: "Opening..." })
  }

  onExited = id => {
    if (id === this.state.collapseID) this.setState({ status: "Closed" })
  }

  onExiting = id => {
    if (id === this.state.collapseID) this.setState({ status: "Closing..." })
  }

  render() {
    const accordionMarginItems = collapseItems.map(collapseItem => {
      if (this.props.value > 0) {
        return (
          <div
            className="collapse-margin accordion vx-collapse"
            key={collapseItem.id}
          >
            
    <Card  onClick={this.toggleModal} style={{marginBottom: "1rem"}}>
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed w-100 pb-2">
                  {collapseItem.title}
                </CardTitle>
              </CardHeader>
              <Collapse
                isOpen={collapseItem.id === this.state.collapseID}
                onEntering={() => this.onEntering(collapseItem.id)}
                onEntered={() => this.onEntered(collapseItem.id)}
                onExiting={() => this.onExiting(collapseItem.id)}
                onExited={() => this.onExited(collapseItem.id)}
              >
                <CardBody><Card>
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
   </Card> </CardBody>
              </Collapse>
            </Card>
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered modal-lg" >
           <ModalHeader toggle={this.toggleModal}>
           Survey
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
          </div>
        )
      } else if (collapseItem.title.toLowerCase().includes(this.props.value)) {
        return (
          <div
            className="collapse-margin accordion vx-collapse"
            key={collapseItem.id}
          >
            
          <Card  onClick={this.toggleModal} style={{marginBottom: "1rem"}}>
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed w-100 pb-2">
                  {collapseItem.title}
                </CardTitle>
              </CardHeader>
              {/* <Collapse
                isOpen={collapseItem.id === this.state.collapseID}
                onEntering={() => this.onEntering(collapseItem.id)}
                onEntered={() => this.onEntered(collapseItem.id)}
                onExiting={() => this.onExiting(collapseItem.id)}
                onExited={() => this.onExited(collapseItem.id)}
              >
                <CardBody>{collapseItem.content}</CardBody>
              </Collapse> */}
            </Card>

            <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="modal-dialog-centered modal-lg" >
           <ModalHeader toggle={this.toggleModal}>
           Survey
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
           
          </div>
        )
      }else{
        return null
      }
      
    })
    return <div> {accordionMarginItems}  </div>
    
  }
}
export default SurveyQuestions
