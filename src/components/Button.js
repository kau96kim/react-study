import classnames from "classnames";
import React from "react";
import "./Button.scss";

function Button({ children, size, color }) {
  return (
    <button className={classnames("Button", size, color)}>{children}</button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "violet",
};

export default Button;
