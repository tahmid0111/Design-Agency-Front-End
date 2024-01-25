import React from "react";
import { Link } from "react-router-dom";

const SingleService = (props) => {
  const { _id, Title, SubTitle, ImageOne, ImageTwo, ImageThree, ImageFour } =
    props.service;
  return (
    <div className="col-span-6 m-5 mb-[100px] border-2 border-orange-200 hover:shadow-lg hover:shadow-orange-500 p-5 rounded-lg">
      <Link to={`/singleservice/${_id}`}>
        <h2 className="text-xl font-bold">{Title}</h2>
        <p className="text-md py-5">{SubTitle}</p>
        <div className="image-area grid grid-cols-12">
          <div className="col-span-8">
            <img src={ImageOne} alt="" className="w-full mr-2 rounded-lg" />
          </div>
          <div className="col-span-4">
            <img
              src={ImageTwo}
              alt=""
              className="w-full h-full overflow-hidden ml-2 rounded-lg"
            />
          </div>
          <div className="col-span-6">
            <img
              src={ImageThree}
              alt=""
              className="w-full h-[200px] overflow-hidden mr-2 mt-4 rounded-lg"
            />
          </div>
          <div className="col-span-6">
            <img
              src={ImageFour}
              alt=""
              className="w-full h-[200px] overflow-hidden ml-2 mt-4 rounded-lg"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleService;
