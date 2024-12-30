import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Fungsi untuk menangani login
  const handleLogin = async (e) => {
    e.preventDefault(); // Pastikan form tidak memuat ulang halaman saat submit
    try {
      const response = await axios.post(
        "http://demo-api.syaifur.io/api/login",
        {
          email: email, // Gunakan email yang benar
          password: password, // Gunakan password yang benar
        }
      );

      console.log(response); // Tambahkan log untuk memeriksa response

      // Jika login berhasil, simpan token ke localStorage
      if (response.data.code === 200) {
        const token = response.data.data.token;
        localStorage.setItem("authToken", token); // Simpan token saja
        alert("Login berhasil!");
        navigate("/admin"); // Pindah ke halaman admin setelah login berhasil
      } else {
        alert(response.data.message); // Jika login gagal
      }
    } catch (error) {
      console.error("Login error", error);
      alert("Login gagal, coba lagi.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="w-full max-w-sm p-10 bg-white rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
          Login
        </h2>
        <form className="space-y-6" onSubmit={handleLogin}>
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
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
            >
              Login
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Belum punya akun? Daftar di sini
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
