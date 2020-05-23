import classnames from "classnames";
import React from "react";
import "./Button.scss";

function Button({ children, size }) {
  return <button className={classnames("Button", size)}>{children}</button>;
}

Button.defaultProps = {
  size: "medium",
};

export default Button;
