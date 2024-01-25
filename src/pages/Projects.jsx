import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";

import SingleProjects from "../components/projects/SingleProjects";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    setLoading(true);
    let result = await fetch("http://localhost:3000/api/v1/allprojects");
    const data = await result.json();

    setProjects(data.data);
    setLoading(false);
  }

  return (
    <Layout>
      <div className="grid grid-cols-12 container mx-auto gap-5">

        {loading && (
          <div className="col-span-12 mx-auto pt-[250px] mb-[700px]">
            <img
              className="w-20 h-20 animate-spin"
              src="https://www.svgrepo.com/show/474682/loading.svg"
              alt="Loading icon"></img>
          </div>
        )}

        {projects.map((project, i) => (
          <SingleProjects key={i} project={project} />
        ))}

      </div>
    </Layout>
  );
};

export default Projects;
