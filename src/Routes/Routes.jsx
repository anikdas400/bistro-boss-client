import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/OurMenu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shard/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Layout/Dashboard/AllUsers/AllUsers";
import AddItems from "../Layout/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/Cart/ManageItems/ManageItems";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/menu",
          element: <Menu></Menu>
        },
        {
          path:"/order/:category",
          element: <Order></Order>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/secret",
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:"dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:"cart",
          element:<Cart></Cart>
        },
        // only admin routs
        {
          path:"addItems",
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:"manageItems",
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:"users",
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);