import React from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

function AdminLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen flex font-sans">
      <Sider />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-grow bg-white shadow-sm p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

function Sider() {
  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col">
      <div className="p-6 text-center border-b border-blue-800">
        <h1 className="text-2xl font-bold tracking-wider">Admin Panel</h1>
      </div>
      <nav className="flex-grow px-4 py-6">
        <ul className="space-y-4">
          <NavItem to="/dashboard" icon="📊" label="Dashboard" />
          <NavItem to="/mahasiswa" icon="🎓" label="Mahasiswa" />
          <NavItem to="/setting" icon="⚙️" label="Setting" />
        </ul>
      </nav>
    </aside>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center px-4 py-3 rounded-lg bg-blue-800 hover:bg-blue-700 transition shadow-sm"
      >
        <span className="mr-3 text-lg">{icon}</span>
        <span className="text-base font-medium">{label}</span>
      </Link>
    </li>
  );
}

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Keluar?",
      text: "Apakah Anda yakin ingin keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, keluar",
      cancelButtonText: "Batal",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
      }
    });
  };

  return (
    <header className="bg-blue-900 text-white shadow p-5 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Welcome to Admin Panel</h2>
      <button
        onClick={handleLogout}
        className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition ease-in-out duration-300 shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m10 4H3"
          />
        </svg>
        Logout
      </button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-4 shadow-inner">
      &copy; {new Date().getFullYear()} Lark Imogen. All rights reserved.
    </footer>
  );
}

export default AdminLayout;
