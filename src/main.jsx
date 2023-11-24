import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root";
import Home from "./Component/Home/Home";
import ErrorHandle from "./Component/ErrorHandle/ErrorHandle";
import AvailCamps from "./Component/AvailCamps/AvailCamps";
import LogIn from "./Component/Authentication/LogIn";

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
    ],
  },
  {
    path: "/logIn",
    element: <LogIn></LogIn>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
