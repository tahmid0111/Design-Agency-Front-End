import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import SingleTeam from "../components/Team/SingleTeam";
import PageTitle from "../components/shared/PageTitle";
import SectionTitle from "../components/shared/SectionTitle";

const Team = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    setLoading(true);
    let result = await fetch("http://localhost:3000/api/v1/allmembers");
    const data = await result.json();

    setMembers(data.data);
    setLoading(false);
  }

  return (
    <Layout>
      <PageTitle title="Team" />
      <SectionTitle
        subTitle="Our Team Members"
        desc="Check our awesome team members"
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

        {members.map((member, i) => (
          <SingleTeam key={i} member={member} />
        ))}
      </div>
    </Layout>
  );
};

export default Team;
