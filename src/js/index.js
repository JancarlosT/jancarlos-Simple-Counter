//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
import Home from "./component/home.jsx";

let secons = 0

setInterval(() => {
    const one = Math.floor((secons / 1) % 10);
    const two = Math.floor((secons / 10) % 10);
    const three = Math.floor((secons / 100) % 10);
    const four = Math.floor((secons / 1000) % 10);
    const five = Math.floor((secons / 10000) % 10);
    const six = Math.floor((secons / 100000) % 10);
    secons += 1

    //render your react application
    ReactDOM.render(<Home 
        uno = {one}
        dos = {two}
        tree = {three}
        cuatro = {four}
        cinco = {five}
        seis = {six} 
    />, document.querySelector("#app"));

},1000)