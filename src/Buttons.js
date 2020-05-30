import React from "react";
import Button from "./components/Button";

function Buttons({ children, color, outline }) {
  return (
    <>
      <Button size="large" color={color} outline>
        {children}
      </Button>
      <Button color={color} outline>
        {children}
      </Button>
      <Button size="small" color={color} outline>
        {children}
      </Button>
    </>
  );
}

Buttons.defaultProps = {
  outline: false,
};

export default Buttons;
