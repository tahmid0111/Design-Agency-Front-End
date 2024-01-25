import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";

const ProjectDetails = () => {
  let { id } = useParams();

  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    setLoading(true); // making loader animation active

    let result = await fetch(`http://localhost:3000/api/v1/singleproject/${id}`);
    let data = await result.json();
    setProject(data.data); // adding data in the current state
    setLoading(false); // making loader animation false
  };
  const { Title, Image, Desc, Duration } = project;
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
            <img className="w-full rounded-md" src={Image} alt={Title} />
          </div>
          <h1 className="text-6xl font-bold">{Title}</h1>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
