import React from "react";

const SectionTitle = (props) => {
    const { subTitle, desc } = props
  return (
    <div className="text-center">
      <h1 className="uppercase text-orange-500 text-2xl font-bold">
        {subTitle}
      </h1>
      <h1 className="text-xl pt-5">{desc}</h1>
    </div>
  );
};

export default SectionTitle;
