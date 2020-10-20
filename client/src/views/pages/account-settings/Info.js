import React from "react"
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap"
import Select from "react-select"
import chroma from "chroma-js"
import Radio from "../../../components/@vuexy/radio/RadioVuexy"
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import axios from "axios"
import { history } from "../../../../src/history"

const languages = [
  { value: "english", label: "English", color: "#7367f0" },
  { value: "french", label: "French", color: "#7367f0" },
  { value: "spanish", label: "Spanish", color: "#7367f0" },
  { value: "russian", label: "Russian", color: "#7367f0" },
  { value: "italian", label: "Italian", color: "#7367f0" }
]

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = data.color ? chroma(data.color) : "#7367f0"
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled && (isSelected ? data.color : "#7367f0")
      }
    }
  },
  multiValue: (styles, { data }) => {
    const color = data.color ? chroma(data.color) : "#7367f0"
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css()
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color ? data.color : "#7367f0"
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color ? data.color : "#7367f0",
      color: "white"
    }
  })
}

class InfoTab extends React.Component {
  state = {
    dob: new Date(),
    message: ""
  }

  handleDob = date => {
    this.setState({
      dob: date
    })
  }

  handleInfo = (e) => {
    e.preventDefault();
    // console.log("Info called");
    const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
    const uid = sessionStorage.getItem('uid').toString();
    const bio = sessionStorage.getItem('bio')
    const mobile = sessionStorage.getItem('mobile')
    const website = sessionStorage.getItem('web')
    const gender = sessionStorage.getItem('gen')
    var bioval, bioval, mobileval, web, gen
    if (this.state.bio == null) {
      bioval = bio
    }
    else {
      bioval = this.state.bio
      sessionStorage.setItem('bio', bioval)
    }
    if (this.state.mobile == null) {
      mobileval = mobile
    }
    else {
      mobileval = this.state.mobile
      sessionStorage.setItem('mobile', mobileval)
    }
    if (this.state.website == null) {
      web = website
    }
    else {
      web = this.state.website
      sessionStorage.setItem('web', web)
    }
    if (this.state.gen == null) {
      gen = gender
    }
    else {
      gen = this.state.gen
      sessionStorage.setItem('gen', gen)
    }
    const data = { uidval: uid, bioval: bioval, mobileval: mobileval, web: web, gen: gen };
    console.log("data", data)
    axios.post(`${process.env.REACT_APP_BASENAME}setting/personal`, data, { headers: authHeader }).then(
      (response) => {
        // console.log("response", response);
        if (response.data.status == true) {
          // console.log("message", response.data.message)
          this.setState({
            message: response.data.message
          })
        }
        else {
          // console.log("message", response.data.message)
          this.state.message = response.data.message
        }
      }
    ).catch((error) => {
      this.state.message = "Info Not Updated"
    })

  }
  render() {
    const bio = sessionStorage.getItem('bio')
    const mobile = sessionStorage.getItem('mobile')
    const website = sessionStorage.getItem('web')
    const gender = sessionStorage.getItem('gen')
    return (
      <React.Fragment>
        <Form onSubmit={this.handleInfo}>
          <Row>
            <Col sm="12">
              <span className="text-success" >{this.state.message}</span>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="bio">Bio</Label>
                <Input
                  type="textarea"
                  name="bio"
                  id="bio"
                  rows="3"
                  placeholder="Your bio data here..."
                  defaultValue={bio}
                  onChange={e => this.setState({ bio: e.target.value })}
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="number">Phone Number</Label>
                <Input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Phone Number"
                  defaultValue={mobile}
                  onChange={e => this.setState({ mobile: e.target.value })}
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="url">Website URL</Label>
                <Input
                  type="url"
                  name="url"
                  id="url"
                  placeholder="Website URL"
                  defaultValue={website}
                  onChange={e => this.setState({ website: e.target.value })}
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>

                <div className="d-inline-block mr-1">
                  <Radio label="Male" value="Male" name="gender" defaultChecked={gender === "Male"} onChange={e => this.setState({ gen: e.target.value })} />
                </div>
                <div className="d-inline-block mr-1">
                  <Radio label="Female" value="Female" name="gender" defaultChecked={gender === "Female"} onChange={e => this.setState({ gen: e.target.value })} />
                </div>
                <div className="d-inline-block">
                  <Radio label="Other" value="Other" name="gender" defaultChecked={gender === "Other"} onChange={e => this.setState({ gen: e.target.value })} />
                </div>

              </FormGroup>
            </Col>
            <Col className="d-flex justify-content-start flex-wrap" sm="12">
              <Button.Ripple className="mr-50" type="submit" color="primary">
                Save Changes
              </Button.Ripple>
              <Button.Ripple type="submit" color="danger" onClick={this.handleCancel}>
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </React.Fragment>
    )
  }
}
export default InfoTab
