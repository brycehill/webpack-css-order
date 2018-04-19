import css from "./ComponentOne.scss";
import React from "react";
import ComponentTwo from "../ComponentTwo/ComponentTwo";

export default props => {
  return (
    <div className={css.main}>
      Hi, from component one!
      <ComponentTwo />
    </div>
  );
};
