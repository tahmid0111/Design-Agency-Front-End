import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <div className="col-span-12 lg:col-span-6 text-center lg:text-left mb-10">
            <h1 className="text-[50px] font-bold lg:w-[80%] pt-10">
              {hero.Title}
            </h1>
            <p className="text-lg font-semibold lg:w-[75%] py-5">
              {hero.SubTitle}
            </p>
            <Link to="/service">
              <button className="btn bg-black text-white hover:bg-orange-500">
                Get Started
              </button>
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-6 mx-auto">
            <div className="flex mb-6">
              <div className="basis-8/12 pr-2">
                <img src={hero.ImageOne} className="h-full rounded-lg" alt="" />
              </div>
              <div className="basis-4/12">
                <img src={hero.ImageTwo} className="rounded-lg" alt="" />
              </div>
            </div>
            <div className="flex">
              <div className="basis-6/12 pr-4">
                <img src={hero.ImageThree} className="h-full rounded-lg" alt="" />
              </div>
              <div className="basis-6/12">
                <img src={hero.ImageFour} className="rounded-lg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
