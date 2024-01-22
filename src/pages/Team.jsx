import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import SingleTeam from "../components/Team/SingleTeam";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
      <div className="mx-5 grid grid-cols-12">

      {loading && (
        <div className="col-span-4">
            <Skeleton count={5} />
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
