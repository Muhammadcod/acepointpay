import React from "react";

const Block = ({ digit }) => {
  return (
    <div className="inline-flex w-6 h-8 bg-gray-700 rounded text-white justify-center items-center">
      {digit}
    </div>
  );
};

export default Block;
