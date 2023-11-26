import { NavLink, Outlet } from "react-router-dom";
import SectionContainer from "../../pages/Shared/SectionContainer/SectionContainer";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoAddCircle } from "react-icons/io5";
import useUserRole from "../../hooks/useUserRole";

const Dashboard = () => {
  const { organizer, healthcare_professional, participant } = useUserRole();

  return (
    <>
      <SectionContainer>
        <div className="p-6 md:grid md:grid-cols-4 md:gap-6 min-h-[calc(100vh-72px)]">
          <div className="col-span-1 w-full bg-violet-800 text-white rounded-md font-bold px-3 lg:px-8 py-12 space-y-2">
            <>
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "w-full p-2 block rounded-md" : "p-2 block"
                  }
                  to="/dashboard"
                >
                  <span className="flex items-center gap-3">
                    <MdDashboard />
                    Dashboard
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
                  to="/dashboard/profile"
                >
                  <span className="flex items-center gap-3">
                    <CgProfile />
                    Profile
                  </span>
                </NavLink>
              </div>
              {organizer && (
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
              )}
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
