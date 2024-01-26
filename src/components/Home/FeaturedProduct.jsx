import { useState, useEffect} from "react";
import { featured, featuredData } from "../../database/data";

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
    <div className="bg-blue-200">
      <div className="px-5">
        <div className="py-10">
          {featured.map((item, i) => (
            <div key={i}>
              <p className="text-orange-500 font-semibold text-lg">
                {item.title}
              </p>
              <p className="pt-5 md:w-[50%] lg:w-[40%] text-2xl font-bold">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
