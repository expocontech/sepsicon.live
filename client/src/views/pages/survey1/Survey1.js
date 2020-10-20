import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Modal,  Row,  Col,  ModalHeader,  ModalBody, Form,
  Button, FormGroup,  Input,  Label } from "reactstrap"
//import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import * as Icon from "react-feather"
import { Search } from "react-feather"
import "../../../assets/scss/pages/knowledge-base.scss"
import Radio from "../../../components/@vuexy/radio/RadioVuexy"
import SurveyQuestions from "./SurveyQuestions"

class Survey extends React.Component {

  state = {
    modal: false
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  render() {
    return (
      <Row>
        <Col sm="12">
          <Card className="mt-1">
            <CardBody className="knowledge-base-bg">
              <h1 className="white">Survey</h1>
              <form>
                <FormGroup className="position-relative has-icon-left mb-0">
                  <Input
                    type="text"
                    placeholder="Search"
                    bsSize="lg"
                    value={this.state.value}
                    onChange={this.onChange}
                  />
                  <div className="form-control-position">
                    <Search size={14} />
                  </div>
                </FormGroup>
              </form>
            </CardBody>
          </Card>
        </Col>
        
        <Col sm="12">
          <div className="faq">
            <Row>
              <Col lg="12" md="12" sm="12">
                <SurveyQuestions value={this.state.value} />
              </Col>
            </Row>
          </div>
        </Col>
    <Col sm="12">
    <Card  onClick={this.toggleModal} style={{marginBottom: "1rem"}}>
     <CardHeader>
      <CardTitle className="lead collapse-title collapsed w-100 pb-2">
      Q01. Which of the following causes fatigue in men more than in women?
      </CardTitle>
      </CardHeader>
    </Card>
    <Card  onClick={this.toggleModal} style={{marginBottom: "1rem"}}>
     <CardHeader>
      <CardTitle className="lead collapse-title collapsed w-100 pb-2">
      Q02. Which of the following is not a correct statement ?
      </CardTitle>
      </CardHeader>
    </Card>
    <Card  onClick={this.toggleModal} style={{marginBottom: "1rem"}}>
     <CardHeader>
      <CardTitle className="lead collapse-title collapsed w-100 pb-2">
      Q03. A 58 year gentleman complains of fatigue, lack of motivation and disturbed sleep. He has slowing of movements and stiffness in legs, more on right with history of falls and occasional right hand tremors. There is no diurnal variation. What would be the next best step?
      </CardTitle>
      </CardHeader>
    </Card>
    <Card  onClick={this.toggleModal} style={{marginBottom: "1rem"}}>
     <CardHeader>
      <CardTitle className="lead collapse-title collapsed w-100 pb-2">
      Q04. Which of the below mentioned variable is not a good measure of an individual’s exercise tolerance/functional capacity?
      </CardTitle>
      </CardHeader>
    </Card>
    <Card  onClick={this.toggleModal} style={{marginBottom: "1rem"}}>
     <CardHeader>
      <CardTitle className="lead collapse-title collapsed w-100 pb-2">
      Q05. 54 year diabetic female complaints of excessive fatigue & dryness of mouth since 6 months associated with arthralgias, myalgias and morning stiffness lasting 5-10mins. She also has memory & sleep disturbances. On examination she has extremely tender muscular points with mild joint tenderness. Her lab parameters reveal : ESR 20, CRP 0.6mg/L, TSH 6, HbA1c 9%, RF 20 (cut off 15), Anti CCP negative , ANA 1:100 1+ speckled, ENA negative.Which of the following disorders best explains her recent symptoms ?
      </CardTitle>
      </CardHeader>
    </Card>
      
      </Col>

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
    </Row>
      
    )
  }
}
export default Survey
