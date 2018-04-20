import React from "react";
import { ComponentThree } from "../";
import css from "./ComponentOne.scss";

export default props => {
  return (
    <div className={css.main}>
      Hi, from component one!
      <ComponentThree />
    </div>
  );
};
