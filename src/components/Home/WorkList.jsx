import { useState, useEffect } from "react";

import SingleWorkList from "./SingleWorkList";
import SingleWorkList2 from "./SingleWorkList2";
import SectionTitle from "../shared/SectionTitle";

const WorkList = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    setLoading(true);
    let result = await fetch("http://localhost:3000/api/v1/allworks");
    const data = await result.json();

    setWorks(data.data);
    setLoading(false);
  }

  return (
    <div className="lg:container lg:mx-auto py-10 px-5">
      <SectionTitle
        subTitle="Work List"
        desc="We provide the Perfect Solution to your business growth"
      />
      {loading && (
        <div className="col-span-12 mx-auto pt-[250px] mb-[700px]">
          <img
            className="w-20 h-20 animate-spin"
            src="https://www.svgrepo.com/show/474682/loading.svg"
            alt="Loading icon"></img>
        </div>
      )}
      <div className="grid grid-cols-12">
        {works.map((item, i) => (
          <SingleWorkList key={i} item={item} />
        ))}
      </div>

      <div className="grid grid-cols-12 py-[100px]">
        {works.map((item, i) => (
          <SingleWorkList2 key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WorkList;
