import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SingleWorkList = (props) => {
  const { item } = props;
  return (
    <div className="col-span-12 md:col-span-4 text-center mb-10">
      <img className="mx-auto" src={item.Image} alt="" />
      <h1 className="text-xl 2xl:text-2xl font-bold py-5">{item.Title}</h1>
      <p className="text-md 2xl:text-lg pb-5 mx-12">{item.SubTitle}</p>
      <Link to='/projects'>
        <button className="flex mx-auto 2xl:text-xl">
          Learn More <FaArrowRight className="mt-[7px] ml-4" />
        </button>
      </Link>
    </div>
  );
};

export default SingleWorkList;
