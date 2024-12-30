import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok.");
      return;
    }

    const apiUrl = "http://demo-api.syaifur.io/api/register"; // URL endpoint

    try {
      const response = await axios.post(apiUrl, {
        name,
        email,
        password,
      });

      // Menangani respons
      if (response.status === 201) {
        alert("Registrasi berhasil!");
        navigate("/"); // Redirect ke halaman login
      } else {
        alert(
          `Gagal registrasi: ${response.data.message || "Terjadi kesalahan"}`
        );
      }
    } catch (error) {
      console.error("Error saat registrasi:", error);
      if (error.response) {
        alert(
          `Gagal registrasi: ${
            error.response.data.message || "Terjadi kesalahan"
          }`
        );
      } else {
        alert("Gagal registrasi: Tidak dapat terhubung ke server");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="w-full max-w-sm p-10 bg-white rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
          Register
        </h2>
        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
              required
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
              required
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
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
            >
              Register
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Sudah punya akun? Login di sini
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
