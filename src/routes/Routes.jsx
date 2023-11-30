import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard";
import AddACamp from "../pages/Dashboard/AddACamp/AddACamp";
import MyDashboard from "../pages/Dashboard/MyDashboard/MyDashboard";
import PrivateRoute from "./PrivateRoute";
import ManageCamps from "../pages/Dashboard/ManageCamps/ManageCamps";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import CampDetails from "../pages/CampDetails/CampDetails";
import ManageUpcomingCamps from "../pages/Dashboard/ManageUpcomingCamps/ManageUpcomingCamps";
import Profile from "../pages/Dashboard/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/available-camps",
        element: (
          <PrivateRoute>
            <AvailableCamps />
          </PrivateRoute>
        ),
      },
      {
        path: "/camp-details/:id",
        element: (
          <PrivateRoute>
            <CampDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <MyDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "add-a-camp",
        element: (
          <PrivateRoute>
            <AddACamp />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-camps",
        element: (
          <PrivateRoute>
            <ManageCamps />
          </PrivateRoute>
        ),
      },
      {
        path: "add-upcoming-camp",
        element: (
          <PrivateRoute>
            <AddACamp />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-upcoming-camps",
        element: (
          <PrivateRoute>
            <ManageUpcomingCamps />
          </PrivateRoute>
        ),
      },
      {
        path: "organizer-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
