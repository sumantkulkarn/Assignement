import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none" };
const variants = {
  fill: {
    indigo_A200_75: "bg-indigo-A200_75",
    indigo_A200: "bg-indigo-A200 text-gray-100",
    black_900_33: "bg-black-900_33 text-black-900_7f",
    white_A700: "bg-white-A700 text-indigo-A200",
  },
};
const sizes = { xs: "p-1", sm: "p-2", md: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "indigo_A200_75",
    "indigo_A200",
    "black_900_33",
    "white_A700",
  ]),
};

export { Button };
