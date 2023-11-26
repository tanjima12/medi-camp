import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root";
import Home from "./Component/Home/Home";
import ErrorHandle from "./Component/ErrorHandle/ErrorHandle";
import AvailCamps from "./Component/AvailCamps/AvailCamps";
import LogIn from "./Component/Authentication/LogIn";
import Register from "./Component/Authentication/Register";
import AuthProvider from "./Component/Authentication/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CampDetails from "./Component/AvailCamps/CampDetails";
import DashBoard from "./Component/DashBoard/DashBoard";
import AllUsers from "./Component/DashBoard/AllUsers";
import OrganizerProfile from "./Component/DashBoard/OrganizerProfile";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorHandle></ErrorHandle>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/avaiCamps",
        element: <AvailCamps></AvailCamps>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <CampDetails></CampDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5004/campdetails/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "manage-profile",
        element: <OrganizerProfile></OrganizerProfile>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
