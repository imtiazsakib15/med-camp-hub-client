import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard/Dashboard";
import AddACamp from "../pages/AddACamp/AddACamp";
import MyDashboard from "../pages/Dashboard/MyDashboard/MyDashboard";

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
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <MyDashboard />,
          },
          {
            path: "add-a-camp",
            element: <AddACamp />,
          },
        ],
      },
    ],
  },
]);

export default router;
