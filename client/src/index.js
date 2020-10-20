import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { Auth0Provider } from "./authServices/auth0/auth0Service"
//  import config from "./authServices/auth0/auth0Config.json"
import { IntlProviderWrapper } from "./utility/context/Internationalization";
import { Layout } from "./utility/context/Layout";
import * as serviceWorker from "./serviceWorker";
import { store } from "./redux/storeConfig/store";
import Spinner from "./components/@vuexy/spinner/Fallback-spinner";
import "./index.scss";
import "./@fake-db";


import { CometChat } from "@cometchat-pro/chat"
import { COMETCHAT_CONSTANTS } from './consts';
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import 'bootstrap-css-only/css/bootstrap.min.css';
//import 'mdbreact/dist/css/mdb.css';

const LazyApp = lazy(() => import("./App"));

// configureDatabase()

var appID = COMETCHAT_CONSTANTS.APP_ID;
var region = COMETCHAT_CONSTANTS.REGION;

var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(() => {

    if(CometChat.setSource) {
      CometChat.setSource("ui-kit", "web", "reactjs");
    }
    console.log("Initialization completed successfully");

ReactDOM.render(
  // <Auth0Provider
  //   domain={config.domain}
  //   client_id={config.clientId}
  //   redirect_uri={window.location.origin + process.env.REACT_APP_PUBLIC_PATH}>
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <Layout>
        <IntlProviderWrapper>
          <LazyApp />
        </IntlProviderWrapper>
      </Layout>
    </Suspense>
  </Provider>,
  //{// </Auth0Provider>,
  document.getElementById("root")
)},
error => {
  console.log("Initialization failed with error:", error);
  // Check the reason for error and take appropriate action.
}
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
