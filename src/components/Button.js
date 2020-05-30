import classnames from "classnames";
import React from "react";
import "./Button.scss";

// size: small, medium, large
// color: violet, gray, blue
function Button({ children, size, color, outline, fullWidth }) {
  return (
    <button
      className={classnames("Button", size, color, {
        outline,
        fullWidth,
      })}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "violet",
};

export default Button;
