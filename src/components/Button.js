import React from "react";
import classnames from "classnames";

const Button = ({ children, color, className, type, ...props }) => {
  return (
    <button className={classnames("w-full", className)} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
