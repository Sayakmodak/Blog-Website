import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Single from "./pages/Single.jsx";
import Write from "./pages/Write.jsx";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
