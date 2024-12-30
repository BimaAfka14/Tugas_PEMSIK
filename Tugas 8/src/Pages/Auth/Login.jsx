// import React, { useState } from "react";
// import Button from "../../Components/Button";

// function Login({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (username === "admin" && password === "admin") {
//       onLogin();
//     } else {
//       alert("Username atau Password salah");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
//       <div className="w-full max-w-sm p-10 bg-white rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105">
//         <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
//           Login
//         </h2>
//         <div className="space-y-6">
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">
//               Username
//             </label>
//             <input
//               type="text"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Masukkan username"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Masukkan password"
//             />
//           </div>
//           <div className="mt-6">
//             <Button
//               style="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
//               text="Login"
//               onClick={handleLogin}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Data mahasiswa yang digunakan untuk login
const mahasiswa = [
  { id: 1, nim: "A11.2022.12345", nama: "Lunox" },
  { id: 2, nim: "A11.2023.23456", nama: "Khaleed" },
  { id: 3, nim: "A11.2024.34567", nama: "Claude" },
  { id: 4, nim: "A11.2025.45678", nama: "Pharsa" },
  { id: 5, nim: "A11.2025.56789", nama: "Hylos" },
];

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Untuk navigasi setelah login

  // Fungsi untuk menangani login
  const handleLogin = () => {
    // Data mahasiswa untuk user
    const mahasiswa = [
      { id: 1, nim: "A11.2022.12345", nama: "Lunox" },
      { id: 2, nim: "A11.2023.23456", nama: "Khaleed" },
      { id: 3, nim: "A11.2024.34567", nama: "Claude" },
      { id: 4, nim: "A11.2025.45678", nama: "Pharsa" },
      { id: 5, nim: "A11.2025.56789", nama: "Hylos" },
    ];

    // Memeriksa apakah yang login adalah admin atau mahasiswa
    if (username === "admin" && password === "admin") {
      localStorage.setItem("role", "admin"); // Simpan role admin
      alert("Login berhasil!");
      navigate("/admin"); // Pindah ke halaman admin
    } else {
      // Cek apakah username dan password cocok dengan data mahasiswa
      const user = mahasiswa.find(
        (mhs) => mhs.nama === username && mhs.nim === password
      );
      if (user) {
        localStorage.setItem("role", "user"); // Simpan role user
        alert("Login berhasil!");
        navigate("/admin"); // Pindah ke halaman admin (Dashboard untuk user)
      } else {
        alert("Username atau Password salah");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="w-full max-w-sm p-10 bg-white rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
          Login
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
          <div className="mt-6">
            <button
              onClick={handleLogin} // Memanggil fungsi login
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
            >
              Login
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              onClick={() => navigate("/register")} // Navigasi ke halaman Register
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Belum punya akun? Daftar di sini
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
