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
import UpdateOrganizerInfo from "./Component/DashBoard/UpdateOrganizerInfo";
import AddCamps from "./Component/DashBoard/AddCamp";
import ManageCamps from "./Component/DashBoard/ManageCamps";
import ManageUpdate from "./Component/DashBoard/ManageUpdate";
import Payment from "./Component/DashBoard/Payment";
import RegisteredCamp from "./Component/Payment/RegisteredCamp";
import PaymentHistory from "./Component/Payment/PaymentHistory";

import ManageRegister from "./Component/Payment/ManageRegister";
import AllPaymentHistory from "./Component/Payment/AllPaymwntHistory";
import Feedback from "./Component/DashBoard/Feedback";
import PrivateRoute from "./Component/Authentication/PrivateRoute";
import Contact from "./Component/Home/Contact";
import UpComing from "./Component/Payment/UpComing";
import { HelmetProvider } from "react-helmet-async";
import UpComingDetails from "./Component/Payment/UpComingDetails";

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
        element: (
          <PrivateRoute>
            {" "}
            <AvailCamps></AvailCamps>
          </PrivateRoute>
        ),
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
          fetch(
            `https://b8a12-server-side-tanjima12.vercel.app/campdetails/${params.id}`
          ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/ShowUpDetails/:id",
        element: <UpComingDetails></UpComingDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b8a12-server-side-tanjima12.vercel.app/showUpdetails/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "manage-profile",
        element: <OrganizerProfile></OrganizerProfile>,
      },
      {
        path: "addCamps",
        element: <AddCamps></AddCamps>,
      },
      {
        path: "manageCamps",
        element: <ManageCamps></ManageCamps>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "registered-camps",
        element: <RegisteredCamp></RegisteredCamp>,
      },
      {
        path: "history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "manageRegister",
        element: <ManageRegister></ManageRegister>,
      },
      {
        path: "allPayment",
        element: <AllPaymentHistory></AllPaymentHistory>,
      },
      {
        path: "feedBack",
        element: <Feedback></Feedback>,
      },
      {
        path: "upComing",
        element: <UpComing></UpComing>,
      },
    ],
  },
  {
    path: "/updateInfo/:id",
    element: <UpdateOrganizerInfo></UpdateOrganizerInfo>,

    loader: ({ params }) =>
      fetch(
        `https://b8a12-server-side-tanjima12.vercel.app/updateInfo/${params.id}`
      ),
  },
  {
    path: "/updateCamp/:id",
    element: <ManageUpdate></ManageUpdate>,
    loader: ({ params }) =>
      fetch(
        `https://b8a12-server-side-tanjima12.vercel.app/campUpdateInfo/${params.id}`
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
