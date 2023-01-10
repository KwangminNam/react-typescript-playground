import React from "react";
import { BrowserRouter, createBrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from '../src/components/Home'
import About from '../src/components/About'
import Root from './Root'
import NotFound from "./NotFound";
import Users from "./Users";

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
        element:<Users/>
      }
    ],
    errorElement:<NotFound/>
  }
])

export default router;
