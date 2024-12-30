import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function Dashboard() {
  const chartRef = useRef(null); // Referensi untuk canvas chart

  const mahasiswa = [
    { id: 1, nim: "A11.2022.12345", nama: "Lunox" },
    { id: 2, nim: "A11.2023.23456", nama: "Khaleed" },
    { id: 3, nim: "A11.2024.34567", nama: "Claude" },
    { id: 4, nim: "A11.2025.45678", nama: "Pharsa" },
    { id: 5, nim: "A11.2025.56789", nama: "Hylos" },
  ];

  const totalMahasiswa = mahasiswa.length;

  const angkatanData = mahasiswa.reduce((acc, mhs) => {
    const angkatan = mhs.nim.split(".")[1];
    acc[angkatan] = (acc[angkatan] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(angkatanData),
    datasets: [
      {
        label: "Jumlah Mahasiswa per Angkatan",
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: Object.values(angkatanData),
      },
    ],
  };

  useEffect(() => {
    // Menghancurkan chart instans sebelumnya jika ada
    if (chartRef.current && chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }

    return () => {
      // Menghancurkan chart saat komponen di-unmount
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, [chartData]); // Chart akan di-destroy dan dirender ulang jika chartData berubah

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Total Mahasiswa</h2>
          <p className="text-4xl font-bold mt-2">{totalMahasiswa}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-4">
          Distribusi Mahasiswa per Angkatan
        </h2>
        {/* Referensikan elemen canvas di sini */}
        <Bar ref={chartRef} data={chartData} />
      </div>
    </div>
  );
}

export default Dashboard;
