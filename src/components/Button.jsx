import classNames from "classnames";
import React from "react";

const Button = ({ children, type }) => {
  return (
    <button
      className={classNames("py-2.5", {
        "button-border px-10 ": type === "border",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
