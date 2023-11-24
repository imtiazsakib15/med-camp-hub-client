import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/med-camp-logo.png";
import SectionContainer from "../SectionContainer/SectionContainer";

const Navbar = () => {
  const user = false;
  return (
    <nav className="bg-white border-b border-gray-200">
      <SectionContainer>
        <div className="flex flex-wrap items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} className="h-8" alt="Logo" />
            <span className="text-2xl font-semibold font-mono whitespace-nowrap">
              MedCamp Hub
            </span>
          </Link>
          <div className="flex gap-5 md:order-2">
            {user && (
              <div className="flex items-center md:order-2 space-x-3 md:space-x-0 ">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full border-2 border-violet-800"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="user photo"
                  />
                </button>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900">
                      Bonnie Green
                    </span>
                    <span className="block text-sm  text-gray-500 truncate">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-5 md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-violet-800" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-violet-800" : ""
                      }
                      to="/available-camps"
                    >
                      Available Camps
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-violet-800" : ""
                      }
                      to="/dashboard"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                </>
              )}

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-violet-800" : ""
                  }
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
              </li>

              {!user && (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-violet-800" : ""
                      }
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-violet-800" : ""
                      }
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </nav>
  );
};

export default Navbar;
