import { NavLink, Outlet } from "react-router-dom";
import SectionContainer from "../../pages/Shared/SectionContainer/SectionContainer";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoAddCircle } from "react-icons/io5";
import useUserRole from "../../hooks/useUserRole";

const Dashboard = () => {
  const data = useUserRole();
  console.log(data);
  return (
    <>
      <SectionContainer>
        <div className="p-6 grid grid-cols-4 gap-6 min-h-[calc(100vh-72px)]">
          <div className="col-span-1 bg-violet-800 text-white rounded-md font-bold px-8 py-12 space-y-2">
            <>
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "w-full p-2 block rounded-md"
                      : "p-2 block"
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
              <div className="">
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
            </>
          </div>
          <div className="col-span-3">
            <Outlet />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Dashboard;
