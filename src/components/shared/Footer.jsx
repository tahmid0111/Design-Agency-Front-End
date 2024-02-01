import { Link } from "react-router-dom";
// icons are imported
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-black grid grid-cols-12">
        <div className="col-span-4 pl-10">
          <h3 className="py-8 xl:py-10 text-2xl text-orange-500 font-bold xl:text-center">
            Design<span className="text-white">Agency</span>
          </h3>
          <p className="text-white text-center">
            An innovative design agency software company seamlessly blends
            creativity with technology, offering cutting-edge solutions to
            elevate visual storytelling and enhance user experiences.
          </p>
          <ul className="flex w-[60%] my-5 mx-auto">
            <li className="bg-white w-[40px] h-[40px] rounded-[50%] mx-2 group">
              <Link>
                <FaFacebookF className="mx-auto mt-[12px] group-hover:text-orange-500" />
              </Link>
            </li>
            <li className="bg-white w-[40px] h-[40px] rounded-[50%] mx-2 group">
              <Link>
                <FaXTwitter className="mx-auto mt-[12px] group-hover:text-orange-500" />
              </Link>
            </li>
            <li className="bg-white w-[40px] h-[40px] rounded-[50%] mx-2 group">
              <Link>
                <FaLinkedinIn className="mx-auto mt-[12px] group-hover:text-orange-500" />
              </Link>
            </li>
            <li className="bg-white w-[40px] h-[40px] rounded-[50%] mx-2 group">
              <Link>
                <FaInstagram className="mx-auto mt-[12px] group-hover:text-orange-500" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 py-[50px] text-center text-white">
          <h3 className="text-xl mb-5">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:underline">
              <Link>Team</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link>Service</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link>Projects</Link>
            </li>
            <li className="mb-2 hover:underline">
              <Link>Testimonials</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 pr-10 py-[50px] text-center text-white">
          <h3 className="text-xl mb-5">Address</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            molestias voluptatibus suscipit sed earum? Molestiae, hic dolore
            nobis laborum non!
          </p>
        </div>
        <div className="col-span-12 text-center bg-gray-600">
          <p className="text-lg text-white">
            All right reserved by @Tahmid Emam
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
