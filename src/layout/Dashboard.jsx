import { NavLink, Outlet } from "react-router-dom";
import SectionContainer from "../pages/Shared/SectionContainer/SectionContainer";
import { MdDashboard, MdHome, MdList, MdManageHistory } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoAddCircle } from "react-icons/io5";
import useUserRole from "../hooks/useUserRole";

const Dashboard = () => {
  const { organizer, healthcare_professional, participant } = useUserRole();

  return (
    <>
      <SectionContainer>
        <div className="p-6 md:grid md:grid-cols-4 md:gap-6 min-h-screen">
          <div className="col-span-1 w-full bg-violet-800 text-white rounded-md font-bold px-3 lg:px-8 py-12 space-y-2">
            <>
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black w-full p-2 block rounded-md"
                      : "p-2 block"
                  }
                  to="/dashboard"
                  end
                >
                  <span className="flex items-center gap-3">
                    <MdDashboard />
                    Dashboard
                  </span>
                </NavLink>
              </div>
              {organizer && (
                <>
                  <div>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "bg-black w-full p-2 block rounded-md"
                          : "p-2 block"
                      }
                      to="/dashboard/organizer-profile"
                      end
                    >
                      <span className="flex items-center gap-3">
                        <CgProfile />
                        Organizer Profile
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "bg-black w-full p-2 block rounded-md"
                          : "p-2 block"
                      }
                      to="/dashboard/add-a-camp"
                    >
                      <span className="flex items-center gap-3">
                        <IoAddCircle />
                        Add a Camp
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "bg-black w-full p-2 block rounded-md"
                          : "p-2 block"
                      }
                      to="/dashboard/manage-camps"
                      end
                    >
                      <span className="flex items-center gap-3">
                        <MdManageHistory />
                        Manage Camps
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "bg-black w-full p-2 block rounded-md"
                          : "p-2 block"
                      }
                      to="/dashboard/add-upcoming-camp"
                    >
                      <span className="flex items-center gap-3">
                        <IoAddCircle />
                        Add Upcoming Camp
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "bg-black w-full p-2 block rounded-md"
                          : "p-2 block"
                      }
                      to="/dashboard/manage-upcoming-camps"
                      end
                    >
                      <span className="flex items-center gap-3">
                        <MdManageHistory />
                        Manage Upcoming Camps
                      </span>
                    </NavLink>
                  </div>
                </>
              )}
              <hr />

              <div>
                <NavLink className="block p-2" to="/">
                  <span className="flex items-center gap-3">
                    <MdHome />
                    Home
                  </span>
                </NavLink>
              </div>
              <div>
                <NavLink className="block p-2" to="/available-camps">
                  <span className="flex items-center gap-3">
                    <MdList />
                    Available Camps
                  </span>
                </NavLink>
              </div>
            </>
          </div>
          <div className="md:col-span-3">
            <Outlet />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Dashboard;
