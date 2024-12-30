import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); // Inisialisasi navigasi

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok.");
      return;
    }
    // Proses registrasi, seperti mengirim data ke server.
    alert("Registrasi berhasil!");
    navigate("/"); // Navigasi ke halaman Login setelah registrasi berhasil
  };

  const goToLogin = () => {
    navigate("/"); // Navigasi ke halaman Login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="w-full max-w-sm p-10 bg-white rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
          Register
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan username"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Konfirmasi Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Konfirmasi password"
            />
          </div>
          <div className="mt-6">
            <button
              onClick={handleRegister}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
            >
              Register
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              onClick={goToLogin} // Navigasi ke halaman Login
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Sudah punya akun? Login di sini
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
