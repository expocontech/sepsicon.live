import React, { Component } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  Table
} from "reactstrap"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check, Lock } from "react-feather"
import Radio from "../../../components/@vuexy/radio/RadioVuexy"
import axios from "axios";
import { history } from "../../../history"

class FeedbackForm extends React.Component {

  state = {
    o1: '',
    o2: '',
    o3: '',
    o4: '',
    o5: '',
    o6: '',
    message: ''
  }


  handleSubmit = (e) => {
    e.preventDefault();
    if (sessionStorage.getItem('token') != null) {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      var id = sessionStorage.getItem('uid').toString();
      const data = {
        uidval: id,
        o1: this.state.o1,
        o2: this.state.o2,
        o3: this.state.o3,
        o4: this.state.o4,
        o5: this.state.o5,
        o6: this.state.o6
      }
      console.log("Data", data)
      axios.post(`${process.env.REACT_APP_BASENAME}feedback/result`, data, { headers: authHeader })
        .then(response => {
          console.log(response.data)
          if (response.data.status) {
            this.setState({
              message: "Feedback submitted",
              o1: '',
              o2: '',
              o3: '',
              o4: '',
              o5: '',
              o6: ''
            })
          }
        })
        .catch(error => {
          console.log(error)
          this.setState({
            message: "Feedback not submitted"
          })
        })
    }
    else {
      history.push('/')
    }
  }
  render() {
    return (
      <Card>
        <CardBody>
          <Row>
            <Col sm="12">

              <Form >
                <Row>
                  <Col md="12" sm="12">
                    <p><br />Q01. Which of the following causes fatigue in men more than in women?Which of the following is your preferred therapy in high cardiovascular risk patients of Stable Coronary Artery Disease with no previous History of MI or stroke?</p>
                    <Radio label="a) Ticagrelor 90 mg + Aspirin 75 mg – 100 mg" color="primary" value="a" defaultChecked={false} name="o1" className="py-50" onChange={e => this.setState({ o1: e.target.value })} />
                    <Radio label="b) Ticagrelor 60 mg + Aspirin 75 mg – 100 mg" color="primary" value="b" defaultChecked={false} name="o1" className="py-50" onChange={e => this.setState({ o1: e.target.value })} />
                    <Radio label="c) Clopidogrel + Aspirin 75 mg – 100 mg" color="primary" value="c" defaultChecked={false} name="o1" className="py-50" onChange={e => this.setState({ o1: e.target.value })} />
                    <Radio label="d) Aspirin 75 mg" color="primary" defaultChecked={false} value="d" name="o1" className="py-50" onChange={e => this.setState({ o1: e.target.value })} />
                    <Radio label="e) Ticagrelor 90 mg" color="primary" defaultChecked={false} value="e" name="o1" className="py-50" onChange={e => this.setState({ o1: e.target.value })} />
                    <Radio label="f) Ticagrelor 60 mg" color="primary" defaultChecked={false} value="f" name="o1" className="py-50" onChange={e => this.setState({ o1: e.target.value })} />
                  </Col>

                  <Col md="12" sm="12">
                    <p><br />Q02. Which of the following is your preferred therapy in high cardiovascular risk patients of Stable Coronary Artery Disease with previous history of PCI?</p>
                    <Radio label="a) Ticagrelor 90 mg + Aspirin 75 mg – 100 mg" color="primary" value="a" defaultChecked={false} name="o2" className="py-50" onChange={e => this.setState({ o2: e.target.value })} />
                    <Radio label="b) Ticagrelor 60 mg + Aspirin 75 mg – 100 mg" color="primary" value="b" defaultChecked={false} name="o2" className="py-50" onChange={e => this.setState({ o2: e.target.value })} />
                    <Radio label="c) Prasugrel 10 mg + Aspirin 75 mg – 100 mg" color="primary" value="c" defaultChecked={false} name="o2" className="py-50" onChange={e => this.setState({ o2: e.target.value })} />
                    <Radio label="d) Aspirin 75 mg" color="primary" defaultChecked={false} value="d" name="o2" className="py-50" onChange={e => this.setState({ o2: e.target.value })} />
                    <Radio label="e) Ticagrelor 90 mg" color="primary" defaultChecked={false} value="e" name="o2" className="py-50" onChange={e => this.setState({ o2: e.target.value })} />
                    <Radio label="f) Ticagrelor 60 mg" color="primary" defaultChecked={false} value="f" name="o2" className="py-50" onChange={e => this.setState({ o2: e.target.value })} />
                  </Col>

                  <Col md="12" sm="12">
                    <p><br />Q03. What is the average duration of Ticagrelor 60 mg DAPT followed by you  in high cardiovascular risk patients of Stable Coronary Artery Disease with no previous History of MI or stroke?</p>
                    <Radio label="a) 6 months" color="primary" defaultChecked={false} name="o3" value="a" className="py-50" onChange={e => this.setState({ o3: e.target.value })} />
                    <Radio label="b) 12 months" color="primary" defaultChecked={false} name="o3" value="b" className="py-50" onChange={e => this.setState({ o3: e.target.value })} />
                    <Radio label="c) 24 months" color="primary" defaultChecked={false} name="o3" value="c" className="py-50" onChange={e => this.setState({ o3: e.target.value })} />
                    <Radio label="d) 48 months" color="primary" defaultChecked={false} name="o3" value="d" className="py-50" onChange={e => this.setState({ o3: e.target.value })} />
                  </Col>

                  <Col md="12" sm="12">
                    <p><br />Q04. Which of the following factors most commonly leads to discontinuation of Antiplatelet Therapy with Ticagrelor in your clinical practice?</p>
                    <Radio label="a) Dyspnoea" color="primary" defaultChecked={false} name="o4" value="a" className="py-50" onChange={e => this.setState({ o4: e.target.value })} />
                    <Radio label="b) GI Bleeding" color="primary" defaultChecked={false} name="o4" value="b" className="py-50" onChange={e => this.setState({ o4: e.target.value })} />
                    <Radio label="c) Bradycardia" color="primary" defaultChecked={false} name="o4" value="c" className="py-50" onChange={e => this.setState({ o4: e.target.value })} />
                    <Radio label="d) P2Y12 resistance" color="primary" defaultChecked={false} name="o4" value="d" className="py-50" onChange={e => this.setState({ o4: e.target.value })} />
                    <Radio label="e) Stent Thrombosis" color="primary" defaultChecked={false} name="o4" value="e" className="py-50" onChange={e => this.setState({ o4: e.target.value })} />
                  </Col>

                  <Col md="12" sm="12">
                    <p><br />Q05. Which of the following will be your preferred therapy in patients of Stable Coronary Artery Disease post 1 year of MI?</p>
                    <Radio label="a) Rivaroxaban 2.5 mg + Aspirin 100 mg" color="primary" defaultChecked={false} name="o5" value="a" className="py-50" onChange={e => this.setState({ o5: e.target.value })} />
                    <Radio label="b) Rivaroxaban 5 mg" color="primary" defaultChecked={false} name="o5" value="b" className="py-50" onChange={e => this.setState({ o5: e.target.value })} />
                    <Radio label="c) Aspirin 100 mg" color="primary" defaultChecked={false} name="o5" value="c" className="py-50" onChange={e => this.setState({ o5: e.target.value })} />
                    <Radio label="d) Rivaroxaban 2.5 mg + Aspirin 100 mg + Clopidogrel 75 mg" color="primary" defaultChecked={false} name="o5" value="d" className="py-50" onChange={e => this.setState({ o5: e.target.value })} />
                    <Radio label="e) Ticagrelor 60 mg + Aspirin 100 mg" color="primary" defaultChecked={false} name="o5" value="e" className="py-50" onChange={e => this.setState({ o5: e.target.value })} />
                  </Col>

                  <Col md="12" sm="12">
                    <p><br />Q06. Which of the following do you find true for Ticagrelor 60 mg in comparison to Ticagrelor 90 mg?</p>
                    <Radio label="a) Similar efficacy, less bleeding risk" color="primary" defaultChecked={false} name="o6" value="a" className="py-50" onChange={e => this.setState({ o6: e.target.value })} />
                    <Radio label="b) Less efficacy, less bleeding risk" color="primary" defaultChecked={false} name="o6" value="b" className="py-50" onChange={e => this.setState({ o6: e.target.value })} />
                    <Radio label="c) More efficacy, less bleeding risk" color="primary" defaultChecked={false} name="o6" value="c" className="py-50" onChange={e => this.setState({ o6: e.target.value })} />
                    <Radio label="d) Similar efficacy, similar bleeding risk" color="primary" defaultChecked={false} name="o6" value="d" className="py-50" onChange={e => this.setState({ o6: e.target.value })} />
                  </Col>
                  {/*  <Col md="12" sm="12">
                <FormGroup>
                  <Label for="mobile">Comments</Label>
                  <Input type="textarea" id="Comments" rows="6" placeholder="Comments" required />
                </FormGroup>
              </Col>  */}

                  <span className="text-danger">{this.state.message}</span>
                  <Col
                    className="d-flex justify-content-end flex-wrap" sm="12" >
                    <Button.Ripple className="" color="primary" type="submit" onClick={this.handleSubmit}>Submit</Button.Ripple>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default FeedbackForm
