import React from "react";

const CustomButton = ({ classes, size, children, action }) => {
  return (
    <button
      className={`text-${
        size ? size : "sm"
      } font-semibold rounded px-4 py-2 ${classes}`}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default CustomButton;
