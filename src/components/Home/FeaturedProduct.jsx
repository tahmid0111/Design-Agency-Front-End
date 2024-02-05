import { useState, useEffect } from "react";
import SectionTitle from "../shared/SectionTitle";

const FeaturedProduct = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    setLoading(true);
    let result = await fetch("http://localhost:3000/api/v1/allfeatures");
    const data = await result.json();

    setFeatures(data.data);
    setLoading(false);
  }

  return (
    <div className="bg-blue-200 py-10">
      <SectionTitle
        subTitle="Featured Project"
        desc="We provide the Perfect Solution to your business growth"
      />
      <div className="grid grid-cols-12 mx-5">
        <div className="col-span-6">
          {features.slice(0, 1).map((item, i) => (
            <div className="pt-3">
              <img src={item.Image} alt="" className="rounded-lg w-full mb-5" />
              <p>{item.SubTitle}</p>
              <h2 className="text-xl font-bold">{item.Title}</h2>
            </div>
          ))}
        </div>
        <div className="col-span-6 ml-5">
          <div className="grid grid-cols-12">
            {features.slice(1).map((item, i) => (
              <div className="col-span-6 p-3">
                <img src={item.Image} alt="" className="w-[90%] rounded-lg mb-3" />
                <p>{item.SubTitle}</p>
                <h2 className="font-bold">{item.Title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
