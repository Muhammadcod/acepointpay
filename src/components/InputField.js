import React from "react";
import classnames from "classnames";

const InputField = ({ leftIcon, rightIcon, className, ...props }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        {leftIcon}
      </div>
      <input
        className={classnames(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          className
        )}
        {...props}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        {rightIcon}
      </div>
    </div>
  );
};

export default InputField;
