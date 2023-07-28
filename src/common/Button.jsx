"use client";
import classNames from "classnames";
import React from "react";

const Button = ({ children, type, className }) => {
  return (
    <button
      className={classNames("py-2.5", {
        "button-border px-10 ": type === "outline",
        "button-filled px-12 rounded-full": type === "fill",
        "bg-light-orange": type === "fill-light",
        [className]: className,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
