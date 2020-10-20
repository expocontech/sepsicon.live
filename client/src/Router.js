import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import knowledgeBaseCategory from "./views/pages/knowledge-base/Category"
import knowledgeBaseQuestion from "./views/pages/knowledge-base/Questions"
import { ContextLayout } from "./utility/context/Layout"
import axios from "axios"
import { CometChat } from '@cometchat-pro/chat';


// Route-based code splitting
const chatRoom = lazy(() => import("./views/pages/CometChatUnified/index"))
const photoBooth = lazy(() => import("./views/pages/PhotoBooth"))
const faq = lazy(() => import("./views/pages/faq/FAQ"))
const accountSettings = lazy(() => import("./views/pages/account-settings/AccountSettings"))
const invoice = lazy(() => import("./views/pages/invoice/Invoice"))
const email = lazy(() => import("./views/apps/email/Email"))
const chat = lazy(() => import("./views/apps/chat/Chat"))
const todo = lazy(() => import("./views/apps/todo/Todo"))
const Login = lazy(() => import("./views/pages/authentication/Newpage"))
const validateOTP = lazy(() => import("./views/pages/authentication/ValidateOTP"))
const forgotPassword = lazy(() => import("./views/pages/authentication/ForgotPassword"))
const lockScreen = lazy(() => import("./views/pages/authentication/LockScreen"))
const resetPassword = lazy(() => import("./views/pages/authentication/ResetPassword"))
const index = lazy(() => import("./views/pages/authentication/register/index"))
const addregistration = lazy(() => import("./views/forms/formik/AddRegistration"))
const registrationlist = lazy(() => import("./views/tables/data-tables/Registration"))
const registrationlist1 = lazy(() => import("./views/tables/data-tables/Registration1"))
const scientificlobby = lazy(() => import("./views/pages/scientificlobby/Index"))
const exhibitionlobby = lazy(() => import("./views/pages/exhibitionlobby/Index"))
const exhibitionstall = lazy(() => import("./views/pages/exhibitionstall/Index"))
const sponsor = lazy(() => import("./views/pages/sponsor/Sponsor"))
const sponsordetails = lazy(() => import("./views/pages/sponsor-details/SponsorDetails"))
const liveview = lazy(() => import("./views/pages/liveview/Live"))
const programme = lazy(() => import("./views/pages/programme/Programme"))
const awards = lazy(() => import("./views/pages/awards/Index"))
const home = lazy(() => import("./views/pages/home/Index"))
const pharmahome = lazy(() => import("./views/pages/pharmahome/Index"))
const pastevents = lazy(() => import("./views/pages/pastevents/Pastevents"))
const questions = lazy(() => import("./views/pages/questions/Question"))
const delegate = lazy(() => import("./views/pages/delegate/Delegate"))
const upcomingevents = lazy(() => import("./views/pages/upcomingevents/Upcomingevents"))
const download = lazy(() => import("./views/pages/download/Download"))
const eposter = lazy(() => import("./views/pages/eposter/Eposter"))
const certificate = lazy(() => import("./views/pages/certificate/Certificate"))
// const scientifichall0 = lazy(() => import("./views/pages/scientific-hall0/ScientificHall"))
const scientifichall1 = lazy(() => import("./views/pages/scientific-hall1/ScientificHall"))
// const scientifichall2 = lazy(() => import("./views/pages/scientific-hall2/ScientificHall"))
// const scientifichall3 = lazy(() => import("./views/pages/scientific-hall3/ScientificHall"))
// const scientifichall4 = lazy(() => import("./views/pages/scientific-hall4/ScientificHall"))
// const scientifichall5 = lazy(() => import("./views/pages/scientific-hall5/ScientificHall"))
// const scientifichall6 = lazy(() => import("./views/pages/scientific-hall6/ScientificHall"))
// const scientifichall7 = lazy(() => import("./views/pages/scientific-hall7/ScientificHall"))
const survey = lazy(() => import("./views/pages/survey/Survey"))
const feedback = lazy(() => import("./views/pages/feedback/Feedback"))
const faculty = lazy(() => import("./views/pages/faculty/Faculty"))
const committee = lazy(() => import("./views/pages/committee/Committee"))
const error404 = lazy(() => import("./views/pages/misc/error/404"))
const accessControl = lazy(() =>
  import("./extensions/access-control/AccessControl")
)
// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                  ? context.horizontalLayout
                  : context.VerticalLayout
            // : context.state.activeLayout === "vertical"
            //    : context.state.activeLayout === "horizontal"
            //   ? context.VerticalLayout
            //   : context.horizontalLayout
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {

  handleLogout = () => {
    const data = { email: sessionStorage.getItem('email') };
    console.log(data)
    axios.get(`${process.env.REACT_APP_BASENAME}logout/${sessionStorage.getItem('email')}`, data).then(response => {
      if (response.data.status == true) {
        console.log("Logout called")
        CometChat.logout();
        sessionStorage.clear();
        sessionStorage.setItem('rstatus', response.data.message);
      }
    })
      .catch(error => {
        console.log(error)
      })
    return <Redirect to="/" />
  }
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
        <AppRoute path="/pages/photoBooth" component={photoBooth} />
        <AppRoute path="/pages/chatRoom" component={chatRoom} />
          <AppRoute path="/misc/error/404" component={error404} fullLayout />
          <AppRoute path="/pages/account-settings" component={accountSettings} />
          <AppRoute path="/pages/faq" component={faq} />
          <AppRoute path="/pages/invoice" component={invoice} />
          <AppRoute path="/email" exact component={() => <Redirect to="/email/inbox" />} />
          <AppRoute path="/email/:filter" component={email} />
          <AppRoute path="/chat" component={chat} />
          <AppRoute path="/todo" exact component={() => <Redirect to="/todo/all" />} />
          <AppRoute path="/todo/:filter" component={todo} />
          <AppRoute exact path="/pages/register" component={index} fullLayout />
          <AppRoute path="/forms/addregistration" component={addregistration} />
          <AppRoute path="/pages/forgot-password" component={forgotPassword} fullLayout />
          <AppRoute path="/pages/faculty" component={faculty} exact />
          <AppRoute path="/pages/committee" component={committee} exact />
          <AppRoute path="/pages/scientificlobby" component={scientificlobby} exact />
          <AppRoute path="/pages/exhibitionlobby" component={exhibitionlobby} exact />
          <AppRoute path="/pages/exhibitionstall" component={exhibitionstall} exact />
          <AppRoute path="/pages/exhibitionstall/:ex_hallid" component={exhibitionstall} exact />
          <AppRoute path="/pages/sponsor" component={sponsor} exact />
          {/* <AppRoute path="/pages/sponsordetails" component={sponsordetails} exact /> */}
          <AppRoute path="/pages/sponsordetails/:sid" component={sponsordetails} exact />
          <AppRoute path="/pages/liveview" component={liveview} exact />
          <AppRoute path="/pages/programme" component={programme} exact />
          <AppRoute path="/tables/registration1" component={registrationlist1} />
          <AppRoute path="/pages/certificate" component={certificate} exact />
          <AppRoute path="/pages/survey" component={survey} exact />
          <AppRoute path="/pages/feedback" component={feedback} exact />
          <AppRoute path="/pages/questions" component={questions} exact />
          <AppRoute path="/pages/delegatelist" component={delegate} exact />
          <AppRoute path="/pages/upcomingevents" component={upcomingevents} exact />
          <AppRoute path="/pages/download" component={download} exact />
          <AppRoute path="/pages/eposter" component={eposter} exact />
          <AppRoute path="/pages/pastevents" component={pastevents} exact />
          <AppRoute path="/pages/pharmahome" component={pharmahome} exact />
          <AppRoute path="/pages/awards" component={awards} exact />
          <AppRoute path="/pages/home" component={home} exact />
          <AppRoute path="/pages/validate-otp" component={validateOTP} fullLayout />
          {/* <AppRoute path="/pages/scientifichall0" component={scientifichall0} exact /> */}
          <AppRoute path="/pages/scientifichall/:id" component={scientifichall1} exact />
          {/* <AppRoute path="/pages/scientifichall2" component={scientifichall2} exact /> */}
          {/* <AppRoute path="/pages/scientifichall3" component={scientifichall3} exact />
          <AppRoute path="/pages/scientifichall4" component={scientifichall4} exact />
          <AppRoute path="/pages/scientifichall5" component={scientifichall5} exact />
          <AppRoute path="/pages/scientifichall6" component={scientifichall6} exact />
          <AppRoute path="/pages/scientifichall7" component={scientifichall7} exact /> */}
          <AppRoute path="/logout" component={this.handleLogout} exact />
          <AppRoute path="/" component={Login} fullLayout />

          <AppRoute path="/pages/lock-screen" component={lockScreen} fullLayout />
          <AppRoute path="/pages/reset-password" component={resetPassword} fullLayout />

          <AppRoute component={error404} fullLayout />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
