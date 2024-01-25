import React from "react";
import { Link } from "react-router-dom";

const SingleProjects = (props) => {
  const { _id, Title, Image } = props.project;
  return (
    <div className="col-span-6 border-2 my-10 p-5">
      <Link to={`/singleproject/${_id}`}>
        <img className="rounded-xl" src={Image} alt="" />
        <h2 className="text-md py-5 font-bold">{Title}</h2>
      </Link>
    </div>
  );
};

export default SingleProjects;
