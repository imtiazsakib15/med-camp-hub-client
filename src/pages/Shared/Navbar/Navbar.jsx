import { Link, NavLink } from "react-router-dom";
import logo from "/med-camp-logo.png";
import SectionContainer from "../SectionContainer/SectionContainer";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [showUserInfo, setShowUserInfo] = useState(false);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            title: "Log Out Successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
        });
      }
    });
    setShowUserInfo(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <SectionContainer>
        <div className="flex flex-wrap items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} className="h-7 sm:h-8" alt="Logo" />
            <span className="text-xl sm:text-2xl font-semibold font-mono whitespace-nowrap">
              MedCamp Hub
            </span>
          </Link>
          <div className="flex gap-5 md:order-2">
            {user && (
              <div className="flex items-center md:order-2 space-x-3 md:space-x-0 ">
                <button
                  onClick={() => setShowUserInfo(!showUserInfo)}
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                >
                  <img
                    className="w-8 h-8 rounded-full border-2 border-violet-800"
                    src={user?.photoURL}
                    alt="user photo"
                  />
                </button>
                <div
                  className={`z-50 mt-3 text-base absolute top-14 right-8 list-none bg-white divide-y divide-gray-100 rounded-lg shadow ${
                    showUserInfo ? "block" : "hidden"
                  }`}
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900">
                      {user?.displayName}
                    </span>
                    <span className="block text-sm  text-gray-500 truncate">
                      {user?.email}
                    </span>
                  </div>
                  <ul className="py-2">
                    <li onClick={() => setShowUserInfo(false)}>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Sign out
                      </button>
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
