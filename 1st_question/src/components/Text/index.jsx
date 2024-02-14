import React from "react";

const sizeClasses = {
  txtSwitzerRegular32: "font-normal font-switzer",
  txtSwitzerRegular20: "font-normal font-switzer",
  txtSwitzerRegular11: "font-normal font-switzer",
  txtSwitzerRegular14: "font-normal font-switzer",
  txtSwitzerRegular16: "font-normal font-switzer",
  txtSwitzerBold18: "font-bold font-switzer",
  txtSwitzerRegular15: "font-normal font-switzer",
  txtSwitzerMedium18: "font-medium font-switzer",
  txtSwitzerLight18: "font-light font-switzer",
  txtSwitzerBold32: "font-bold font-switzer",
  txtSwitzerBold24: "font-bold font-switzer",
  txtSwitzerRegular11Black9004c: "font-normal font-switzer",
  txtSwitzerRegular16Black900: "font-normal font-switzer",
  txtSwitzerLight10: "font-light font-switzer",
  txtSwitzerBold20: "font-bold font-switzer",
  txtSwitzerMedium18Black9003f: "font-medium font-switzer",
  txtSwitzerRegular20IndigoA20001: "font-normal font-switzer",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
