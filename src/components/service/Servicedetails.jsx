import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";

const ServiceDetails = () => {
  let { id } = useParams();

  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    setLoading(true); // making loader animation active

    let result = await fetch(
      `http://localhost:3000/api/v1/singleservice/${id}`
    );
    let data = await result.json();
    setService(data.data); // adding data in the current state
    setLoading(false); // making loader animation false
  };
  const { _id, Title, SubTitle, Desc, Review, ImageOne, ImageTwo, ImageThree, ImageFour } = service;
  return (
    <Layout>
      <div className="px-5 grid grid-cols-12">
        {loading && (
          <div className="col-span-12 mx-auto pt-[250px] mb-[700px]">
            <img
              className="w-20 h-20 animate-spin"
              src="https://www.svgrepo.com/show/474682/loading.svg"
              alt="Loading icon"></img>
          </div>
        )}
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
            className="w-full h-[400px] overflow-hidden mr-2 mt-4 rounded-lg"
          />
        </div>
        <div className="col-span-6">
          <img
            src={ImageFour}
            alt=""
            className="w-full h-[400px] overflow-hidden ml-2 mt-4 rounded-lg"
          />
        </div>
        <div className="col-span-12">
            <h1>{Title}</h1>
        </div>
        <div className="col-span-12">
            <h1 className="text-justify">{Desc}</h1>
        </div>
        <div className="col-span-12">
            <h1>{Review}</h1>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
