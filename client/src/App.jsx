import { useState } from 'react'
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Single from "./pages/Single.jsx";
import Write from "./pages/Write.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './comp/Navbar';
import Footer from './comp/Footer';
function App() {
  const Layout = ()=>{
    return (
      <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        {
          path: "/write",
          index: true,
          element: <Write />,
        },
        {
          path: "/single",
          index: true,
          element: <Single />,
        }
      ],
    },
    {
      path: "/login",
      index: true,
      element: <Login />,
    },
    {
      path: "/register",
      index: true,
      element: <Register />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
