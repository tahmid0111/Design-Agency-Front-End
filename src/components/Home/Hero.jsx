import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleHero from "./SingleHero";

const Hero = () => {
  const [hero, setHero] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    setLoading(true);
    let result = await fetch("http://localhost:3000/api/v1/hero");
    const data = await result.json();

    setHero(data.data);
    setLoading(false);
  }

  return (
    <>
      <div className="hero-area py-10 bg-orange-500">
        <div className="container mx-auto px-5 grid grid-cols-12">
          {loading && (
            <div className="col-span-12 mx-auto pt-[250px] mb-[700px]">
              <img
                className="w-20 h-20 animate-spin"
                src="https://www.svgrepo.com/show/474682/loading.svg"
                alt="Loading icon"></img>
            </div>
          )}

          <SingleHero item={hero} />
        </div>
      </div>
    </>
  );
};

export default Hero;
