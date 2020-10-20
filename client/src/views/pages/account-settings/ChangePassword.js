import React from "react"
import { Button, FormGroup, Row, Col } from "reactstrap"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { history } from "../../../../src/history"

// const formSchema = Yup.object().shape({
//   oldpass: Yup.string().required("Required"),
//   newpass: Yup.string().required("Required"),
//   confirmpass: Yup.string()
//     .oneOf([Yup.ref("newpass"), null], "Passwords must match")
//     .required("Required")
// })
class ChangePassword extends React.Component {
  state = {
    opass: "",
    newpass: "",
    confpass: "",
    message: ""
  }

  handlePass = (e) => {
    e.preventDefault();

    //check old & new
    if (this.state.newpass != this.state.confpass) {
      this.setState({
        message: "Password not match"
      })
    }
    else {
      const authHeader = { 'Authorization': 'Bearer ' + sessionStorage.getItem('token').toString() };
      const uid = sessionStorage.getItem('uid').toString();
      const data = { uidval: uid, opass: this.state.opass, newpass: this.state.newpass };
      // console.log("data", data)
      axios.post(`${process.env.REACT_APP_BASENAME}setting/pass`, data, { headers: authHeader }).then(
        (response) => {
          // console.log("response", response);
          if (response.data.status == true) {
            this.setState({
              message: response.data.message,
              opass: "",
              newpass: "",
              confpass: ""
            })
          }
          else {
            this.setState({
              message: response.data.message
            })
          }
          // history.push('/pages/account-settings')
        }
      ).catch((error) => {
        this.setState({
          message: "Password not changed"
        })
      })

    }
  }

  handleCancel = () => {
    this.setState({
      opass: "",
      newpass: "",
      confpass: "",
      message: ""
    })
  }

  render() {
    return (
      <React.Fragment>
        <Row className="pt-1">
          <Col sm="12">
            <span className="text-success">{this.state.message}</span>
          </Col>
          <Col sm="12">
            <Formik
            // initialValues={{
            //   oldpass: "",
            //   newpass: "",
            //   confirmpass: ""
            // }}
            // validationSchema={formSchema}
            >
              {({ errors, touched }) => (
                <Form action="/pages/account-settings" onSubmit={this.handlePass}>
                  <FormGroup>
                    <Field
                      name="oldpass"
                      id="oldpass"
                      className="form-control"
                      // className={`form-control ${errors.oldpass &&
                      //   touched.oldpass &&
                      //   "is-invalid"}`}
                      placeholder="Old Password"
                      value={this.state.opass}
                      onChange={e => this.setState({ opass: e.target.value })}
                      required
                    />
                    {/* {errors.oldpass && touched.oldpass ? (
                      <div className="text-danger">{errors.oldpass}</div>
                    ) : null} */}
                  </FormGroup>
                  <FormGroup>
                    <Field
                      name="newpass"
                      placeholder="New Password"
                      id="newpass"
                      value={this.state.newpass}
                      onChange={e => this.setState({ newpass: e.target.value })}
                      required
                      className="form-control"
                    // className={`form-control ${errors.newpass &&
                    //   touched.newpass &&
                    //   "is-invalid"}`}
                    />
                    {/* {errors.newpass && touched.newpass ? (
                      <div className="text-danger">{errors.newpass}</div>
                    ) : null} */}
                  </FormGroup>
                  <FormGroup>
                    <Field
                      name="confirmpass"
                      id="confirmpass"
                      className="form-control"
                      // className={`form-control ${errors.confirmpass &&
                      //   touched.confirmpass &&
                      //   "is-invalid"}`}
                      placeholder="Confirm Password"
                      value={this.state.confpass}
                      onChange={e => this.setState({ confpass: e.target.value })}
                      required
                    />
                    {/* {errors.confirmpass && touched.confirmpass ? (
                      <div className="text-danger">{errors.confirmpass}</div>
                    ) : null} */}
                  </FormGroup>
                  <div className="d-flex justify-content-start flex-wrap">
                    <Button.Ripple
                      className="mr-1 mb-1"
                      color="primary"
                      type="submit"
                    >
                      Save Changes
                    </Button.Ripple>
                    <Button.Ripple
                      className="mb-1"
                      color="danger"
                      type="reset"
                      outline
                      onClick={this.handleCancel}
                    >
                      Cancel
                    </Button.Ripple>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </React.Fragment>
    )
  }

  // render() {

  //   return (
  //     <React.Fragment>
  //       <Row className="pt-1">
  //         <Col sm="12">
  //           <Formik
  //             initialValues={{
  //               oldpass: "",
  //               newpass: "",
  //               confirmpass: ""
  //             }}
  //             validationSchema={formSchema}
  //           >
  //             {({ errors, touched }) => (
  //               <Form>
  //                 <FormGroup>
  //                   <Field
  //                     name="oldpass"
  //                     id="oldpass"
  //                     className={`form-control ${errors.oldpass &&
  //                       touched.oldpass &&
  //                       "is-invalid"}`}
  //                     placeholder="Old Password"
  //                   />
  //                   {errors.oldpass && touched.oldpass ? (
  //                     <div className="text-danger">{errors.oldpass}</div>
  //                   ) : null}
  //                 </FormGroup>
  //                 <FormGroup>
  //                   <Field
  //                     name="newpass"
  //                     placeholder="New Password"
  //                     id="newpass"
  //                     className={`form-control ${errors.newpass &&
  //                       touched.newpass &&
  //                       "is-invalid"}`}
  //                   />
  //                   {errors.newpass && touched.newpass ? (
  //                     <div className="text-danger">{errors.newpass}</div>
  //                   ) : null}
  //                 </FormGroup>
  //                 <FormGroup>
  //                   <Field
  //                     name="confirmpass"
  //                     id="confirmpass"
  //                     className={`form-control ${errors.confirmpass &&
  //                       touched.confirmpass &&
  //                       "is-invalid"}`}
  //                     placeholder="Confirm Password"
  //                   />
  //                   {errors.confirmpass && touched.confirmpass ? (
  //                     <div className="text-danger">{errors.confirmpass}</div>
  //                   ) : null}
  //                 </FormGroup>
  //                 <div className="d-flex justify-content-start flex-wrap">
  //                   <Button.Ripple
  //                     className="mr-1 mb-1"
  //                     color="primary"
  //                     type="submit"
  //                   >
  //                     Save Changes
  //                   </Button.Ripple>
  //                   <Button.Ripple
  //                     className="mb-1"
  //                     color="danger"
  //                     type="reset"
  //                     outline
  //                   >
  //                     Cancel
  //                   </Button.Ripple>
  //                 </div>
  //               </Form>
  //             )}
  //           </Formik>
  //         </Col>
  //       </Row>
  //     </React.Fragment>
  //   )
  // }
}
export default ChangePassword
