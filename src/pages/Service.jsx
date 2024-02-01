import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";

import SingleService from "../components/service/SingleService";
import PageTitle from "../components/shared/PageTitle";
import SectionTitle from "../components/shared/SectionTitle";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    setLoading(true);
    let result = await fetch("http://localhost:3000/api/v1/allservices");
    const data = await result.json();

    setServices(data.data);
    setLoading(false);
  }

  return (
    <Layout>
      <PageTitle title="Service" />
      <SectionTitle
        subTitle="Our All Services"
        desc="We provide best web-design services"
      />
      <div className="mx-5 grid grid-cols-12">
        {loading && (
          <div className="col-span-12 mx-auto pt-[250px] mb-[700px]">
            <img
              className="w-20 h-20 animate-spin"
              src="https://www.svgrepo.com/show/474682/loading.svg"
              alt="Loading icon"></img>
          </div>
        )}

        {services.map((service, i) => (
          <SingleService key={i} service={service} />
        ))}
      </div>
    </Layout>
  );
};

export default Service;
