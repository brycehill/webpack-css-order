import React from "react";
import { ComponentB } from "../ComponentB";

export default props => {
  return (
    <div>
      Hi, from component A!
      <ComponentB />
    </div>
  );
};
