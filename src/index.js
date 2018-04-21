import React from "react";
import ReactDOM from "react-dom";
import { ComponentA } from "./ui/ComponentA";

const App = () => <ComponentA />;

ReactDOM.render(<App />, document.querySelector("#root"));
