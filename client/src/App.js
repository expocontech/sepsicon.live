import React from "react";
import Router from "./Router";
import "./components/@vuexy/rippleButton/RippleButton";

import "react-perfect-scrollbar/dist/css/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { useMediaQuery } from "react-responsive";
import RotateDevice from "./RotateDevice";

const App = (props) => {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return isPortrait ? <RotateDevice /> : <Router />;
};

export default App;

// import React from "react"
// import Router from "./Router"
// import "./components/@vuexy/rippleButton/RippleButton"

// import "react-perfect-scrollbar/dist/css/styles.css"
// import "prismjs/themes/prism-tomorrow.css"

// const App = props => {
//   return <Router />
// }

// export default App
