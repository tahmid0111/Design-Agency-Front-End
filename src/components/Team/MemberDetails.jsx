import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";

const MemberDetails = () => {
  let { id } = useParams();

  const [member, setMember] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    setLoading(true); // making loader animation active

    let result = await fetch(`http://localhost:3000/api/v1/singlemember/${id}`);
    let data = await result.json();
    setMember(data.data); // adding data in the current state
    setLoading(false); // making loader animation false
  };
  const { Name, Image, Position, About, Review } = member;
  return (
    <Layout>
      <div className={"px-5 grid grid-cols-12"}>
        {loading && (
          <div className="col-span-12 mx-auto pt-[250px] mb-[700px]">
            <img
              className="w-20 h-20 animate-spin"
              src="https://www.svgrepo.com/show/474682/loading.svg"
              alt="Loading icon"></img>
          </div>
        )}

        <div className="col-span-6 p-10">
          <img className="w-full rounded-md" src={Image} alt={Name} />
        </div>

        <div className="col-span-6 p-10 text-center">
          <h1 className="text-6xl font-bold">{Name}</h1>
          <h2 className="text-3xl font-bold py-10 border-b-2 border-black">Position: {Position}</h2>
          <h2 className="text-2xl bg-orange-500 text-white font-bold border-l-8 border-black mt-20 p-2">
            {Review}
          </h2>
        </div>

        <div className="col-span-12 pt-5 pb-10">
          <span className="text-6xl text-orange-500">**</span>
          <h1 className="text-xl text-justify">{About}</h1>
          <span className="text-6xl float-right text-orange-500">**</span>
        </div>
      </div>
    </Layout>
  );
};

export default MemberDetails;
