import React from "react";
import { Link } from "react-router-dom";

const SingleHero = (props) => {
  const { Title, SubTitle, ImageOne, ImageTwo, ImageThree, ImageFour } =
    props.item;
  return (
    <>
      <div className="col-span-12 lg:col-span-6 text-center lg:text-left mb-10">
        <h1 className="text-[50px] font-bold lg:w-[80%] pt-10">{Title}</h1>
        <p className="text-lg font-semibold lg:w-[75%] py-5">{SubTitle}</p>
        <Link to="/service">
          <button className="btn bg-black text-white hover:bg-orange-500">
            Get Started
          </button>
        </Link>
      </div>
      <div className="col-span-12 lg:col-span-6 mx-auto">
        <div className="flex mb-6">
          <div className="basis-8/12 pr-2">
            <img src={ImageOne} className="h-full rounded-lg" alt="" />
          </div>
          <div className="basis-4/12">
            <img src={ImageTwo} className="h-full rounded-lg" alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="basis-6/12 pr-4">
            <img src={ImageThree} className="h-full rounded-lg" alt="" />
          </div>
          <div className="basis-6/12">
            <img src={ImageFour} className="rounded-lg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHero;
