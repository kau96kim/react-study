import React from "react";
import "./components/Wrapper.scss";

function Wrapper({ children }) {
  return <div className="Wrapper">{children}</div>;
}

export default React.memo(Wrapper);
