import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const SingleTeam = (props) => {
  const { Name, Image, Position, _id } = props.member;

  return (
    <div className="col-span-4 mx-5 my-5 text-center">
      <Link to={`/member/${_id}`}>
        <img className="w-full rounded-t-xl hover:grayscale" src={Image} alt="" />
        <div className="bg-orange-500 w-full py-2">
          <h1 className="text-xl font-bold py-2 text-white">{Name}</h1>
          <h1 className="font-bold">{Position}</h1>
        </div>
      </Link>
    </div>
  );
};

export default SingleTeam;
