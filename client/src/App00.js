import React,{useEffect,useState} from "react";
import Router from "./Router";
import "./components/@vuexy/rippleButton/RippleButton";

import "react-perfect-scrollbar/dist/css/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { useMediaQuery } from "react-responsive";
import RotateDevice from "./RotateDevice";
import {history} from './history';

const App = (props) => {
const [rotator, setRotator] = useState(false);

const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });


  useEffect(()=>{
    history.listen((location) => {
    console.log('Path changed',{location, isPortrait})
    if(location.pathname === "/" || location.pathname.indexOf('/pages/register') !== -1){
      setRotator(false);
    }else{
      if(isPortrait){
        setRotator(true)
      }else{
        setRotator(false);
      }
    }
  }
    )},[])

    useEffect(()=>
    {
      console.log('Portrait changed',{window, isPortrait})
      if(window.location.pathname === "/" || window.location.pathname.indexOf('/pages/register') !== -1){
        setRotator(false);
      }else{
        if(isPortrait){
          setRotator(true)
        }else{
          setRotator(false);
        }
      }
    },[isPortrait])
  

  return rotator ? <RotateDevice/> : <Router/> 
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
