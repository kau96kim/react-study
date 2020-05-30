import React from "react";
import Button from "./Button";

function Buttons({ children, ...rest }) {
  return (
    <>
      <Button size="large" {...rest}>
        {children}
      </Button>
      <Button {...rest}>{children}</Button>
      <Button size="small" {...rest}>
        {children}
      </Button>
    </>
  );
}

export default Buttons;
