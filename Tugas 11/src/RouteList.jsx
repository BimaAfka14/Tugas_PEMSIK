import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import AdminLayout from "./Layouts/AdminLayout";
import Dashboard from "./Pages/Admin/Dashboard";
import Mahasiswa from "./Pages/Admin/Mahasiswa";
import Setting from "./Pages/Admin/Setting";

const RouteList = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true, // Dashboard untuk user
        element: <Dashboard />,
      },
      {
        path: "mahasiswa", // Halaman CRUD Mahasiswa untuk admin
        element: <Mahasiswa />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
]);

export default RouteList;
