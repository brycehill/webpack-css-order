import React from "react";
import ReactDOM from "react-dom";
import { util } from "./lib";
import ComponentOne from "./ui/ComponentOne/ComponentOne";

console.log(util("hi"));
ReactDOM.render(<ComponentOne />, document.querySelector("#root"));
