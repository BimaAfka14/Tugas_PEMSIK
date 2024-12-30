import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import AdminLayout from "./Layouts/AdminLayout"; // Layout Admin
import Dashboard from "./Pages/Admin/Dashboard"; // Halaman Admin Dashboard
import Mahasiswa from "./Pages/Admin/Mahasiswa"; // Halaman Admin Mahasiswa

// Import halaman login
import Login from "./Pages/Auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routing untuk halaman login */}
        <Route path="/" element={<Login />} />

        {/* Routing untuk halaman Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} /> {/* Admin Dashboard */}
          <Route path="mahasiswa" element={<Mahasiswa />} /> {/* Admin Mahasiswa */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
