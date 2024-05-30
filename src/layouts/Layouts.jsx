import React from "react";

import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

function Layouts({ children }) {
  return (
    <>
      <div className="max-w-[100%]  min-h-[100vh] flex justify-between">
        <LeftSide></LeftSide>
        {children}
        <RightSide></RightSide>
      </div>
    </>
  );
}

export default Layouts;
