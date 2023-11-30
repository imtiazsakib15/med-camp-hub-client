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
import UnauthorizedPage from "../pages/UnauthorizedPage/UnauthorizedPage";
import OrganizerRoute from "./OrganizerRoute";
import ParticipantRoute from "./ParticipantRoute";
import ProfessionalRoute from "./ProfessionalRoute";
import ContactUs from "../pages/ContactUs/ContactUs";

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
        path: "/contact-us",
        element: <ContactUs />,
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
          <OrganizerRoute>
            <AddACamp />
          </OrganizerRoute>
        ),
      },
      {
        path: "manage-camps",
        element: (
          <OrganizerRoute>
            <ManageCamps />
          </OrganizerRoute>
        ),
      },
      {
        path: "add-upcoming-camp",
        element: (
          <OrganizerRoute>
            <AddACamp />
          </OrganizerRoute>
        ),
      },
      {
        path: "manage-upcoming-camps",
        element: (
          <OrganizerRoute>
            <ManageUpcomingCamps />
          </OrganizerRoute>
        ),
      },
      {
        path: "organizer-profile",
        element: (
          <OrganizerRoute>
            <Profile />
          </OrganizerRoute>
        ),
      },
      {
        path: "participant-profile",
        element: (
          <ParticipantRoute>
            <Profile />
          </ParticipantRoute>
        ),
      },
      {
        path: "professional-profile",
        element: (
          <ProfessionalRoute>
            <Profile />
          </ProfessionalRoute>
        ),
      },
    ],
  },
  {
    path: "/error",
    element: <UnauthorizedPage />,
  },
]);

export default router;
