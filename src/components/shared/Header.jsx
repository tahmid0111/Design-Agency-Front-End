import { Link, NavLink } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="hidden md:block bg-orange-500 border-b-2 border-black">
        <div className="header-area px-2 lg:px-10 grid grid-cols-12 ">
          <div className="col-span-4">
            <h3 className="py-8 xl:py-10 text-2xl 2xl:text-4xl font-bold xl:text-center">
              Design<span className="text-white">Agency</span>
            </h3>
          </div>

          <div className="col-span-8">
            <ul className="flex float-right">
              <li className="py-10 px-2 lg:px-5">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "active text-lg 2xl:text-xl font-semibold"
                      : "text-lg 2xl:text-xl font-semibold"
                  }>
                  Home
                </NavLink>
              </li>
              <li className="py-10 px-2 lg:px-5">
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    isActive
                      ? "active text-lg 2xl:text-xl font-semibold"
                      : "text-lg 2xl:text-xl font-semibold"
                  }>
                  Team
                </NavLink>
              </li>
              <li className="py-10 px-2 lg:px-5">
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive
                      ? "active text-lg 2xl:text-xl font-semibold"
                      : "text-lg 2xl:text-xl font-semibold"
                  }>
                  Service
                </NavLink>
              </li>
              <li className="py-10 px-2 lg:px-5">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? "active text-lg 2xl:text-xl font-semibold"
                      : "text-lg 2xl:text-xl font-semibold"
                  }>
                  Projects
                </NavLink>
              </li>
              <li className="py-10 px-2 lg:px-5">
                <NavLink
                  to="/testimonials"
                  className={({ isActive }) =>
                    isActive
                      ? "active text-lg 2xl:text-xl font-semibold"
                      : "text-lg 2xl:text-xl font-semibold"
                  }>
                  Testimonials
                </NavLink>
              </li>
              <li className="py-8 px-2 lg:px-5">
                <button className="btn btn-outline btn-success">
                  <Link to="" className="text-black 2xl:text-lg">
                    Login
                  </Link>
                </button>
              </li>
              <li className="py-8 px-2 lg:px-5">
                <button className="btn btn-success">
                  <Link className="2xl:text-lg" to="">Register</Link>
                </button>
              </li>
            </ul>
            {/* not used yet */}
          </div>
        </div>
      </div>
      <div className="small-navbar px-10 md:hidden grid grid-cols-12">
        <div className="col-span-8">
          <h3 className="py-5 xl:py-10 text-2xl font-bold xl:text-center">
            Design<span className="text-orange-500">Agency</span>
          </h3>
        </div>
        <div className="col-span-4">
          <div className="dropdown float-right">
            <label tabIndex={0} className="btn btn-ghost btn-circle mt-4">
              <FaAlignJustify className="text-2xl text-orange-500" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 ml-[-200px] z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/team">Team</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/testimonials">Testimonials</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
