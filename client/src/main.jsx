import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthContexProvider } from './context/authContext.jsx';
import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/write",
//         index: true,
//         element: <Write />,
//       },
//       {
//         path: "/single",
//         index: true,
//         element: <Single />,
//       }
//     ],
//   },
//   {
//     path: "/login",
//     index: true,
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     index: true,
//     element: <Register />
//   }
// ]);

createRoot(document.getElementById('root')).render(
  
    <AuthContexProvider>
    {/* <RouterProvider router={router} /> */}
    <App />
    </AuthContexProvider>
)
