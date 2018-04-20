import React from "react";
import { ShakeMe } from "../ShakeMe";
import css from "./ComponentTwo.scss";

export default props => {
  return (
    <div className={css.main}>
      Hi, from component two!<ShakeMe />
    </div>
  );
};
