import React from "react";
import { ComponentTwo } from "../ComponentTwo";
import css from "./ComponentThree.scss";

export default props => {
  return (
    <div className={css.main}>
      Hi, from component three!
      <ComponentTwo />
    </div>
  );
};
