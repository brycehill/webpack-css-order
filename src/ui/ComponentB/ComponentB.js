import React from "react";
import { ComponentC } from "../ComponentC";
import css from "./ComponentB.css";

export default props => {
  return (
    <div className={css.main}>
      Hi, from component B!
      <ComponentC />
    </div>
  );
};
