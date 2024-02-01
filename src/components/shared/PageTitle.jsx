import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const PageTitle = (props) => {
  const { title } = props;
  return (
    <div className="w-full p-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="flex py-3 font-bold">
        <div className="text-lg pr-2">Home</div>
        <div className="pt-[7px]">
          <FaAngleRight className="text-lg" />
        </div>
        <div className="text-lg pl-2 text-orange-500">{title}</div>
      </div>
    </div>
  );
};

export default PageTitle;
