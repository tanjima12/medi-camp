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
      {
        path: "/contact",
        element: <Contact></Contact>,
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
    ],
  },
  {
    path: "/updateInfo/:id",
    element: <UpdateOrganizerInfo></UpdateOrganizerInfo>,

    loader: ({ params }) =>
      fetch(`http://localhost:5004/updateInfo/${params.id}`),
  },
  {
    path: "/updateCamp/:id",
    element: <ManageUpdate></ManageUpdate>,
    loader: ({ params }) =>
      fetch(`http://localhost:5004/campUpdateInfo/${params.id}`),
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
