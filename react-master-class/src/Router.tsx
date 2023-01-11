import React from "react";
import { BrowserRouter, createBrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from '../src/components/Home'
import About from '../src/components/About'
import Root from './Root'
import NotFound from "./NotFound";
import Users from "./Users";
import Followers from "./Followers";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"users/:userId",
        element:<Users/>,
        children:[{
          path:"follwers",
          element:<Followers/>
        }]
      }
    ],
    errorElement:<NotFound/>
  }
])

export default router;
