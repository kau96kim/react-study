import classnames from "classnames";
import React from "react";
import "./Button.scss";

// size: small, medium, large
// color: violet, gray, blue
function Button({ children, size, color, ...rest }) {
  return (
    <button className={classnames("Button", size, color, { ...rest })}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "violet",
};

export default Button;
