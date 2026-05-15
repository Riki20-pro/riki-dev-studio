import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Freelance Web Developer",
      period: "2025 - 2026",
      role: "Full Stack Developer",
      description: [
        "Mengembangkan Sistem TFlow (PT. MAR), sebuah sistem informasi berbasis web untuk pengelolaan bisnis[cite: 17, 58, 91].",
        "Membangun aplikasi Web POS (Point of Sales) Kasir dan sistem E-commerce Toko Online tingkat lanjut[cite: 17, 60, 93].",
        "Menyusun website profil perusahaan (Company Profile) yang responsif[cite: 19, 61, 93].",
        "Optimasi performa website dan penerapan dasar-dasar Technical SEO[cite: 81, 100]."
      ]
    },
    {
      company: "PT Rekso Nasional Food - McDonald's",
      period: "2022 - 2025",
      role: "Crew Restaurant",
      description: [
        "Mengelola transaksi kasir dan layanan drive-thru dengan tingkat akurasi tinggi[cite: 12, 52, 87].",
        "Menangani sistem pesanan online (GoFood, GrabFood, ShopeeFood) secara efisien[cite: 12, 53, 87].",
        "Bekerja sama dalam tim operasional dengan standar pelayanan internasional yang ketat[cite: 13, 55, 88]."
      ]
    },
    {
      company: "CV Wijaya Music Putra",
      period: "2019 - 2022",
      role: "E-commerce Operations & Marketing",
      description: [
        "Mengelola operasional toko online dan menangani komplain pelanggan secara profesional[cite: 7, 45, 84].",
        "Mengembangkan strategi branding produk di platform e-commerce dan media sosial[cite: 8, 46, 84].",
        "Membuat konten kreatif untuk Instagram & Facebook guna meningkatkan interaksi (engagement)[cite: 9, 49, 85].",
        "Menyusun laporan penjualan bulanan untuk bahan evaluasi bisnis manajemen[cite: 10, 50, 85]."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-zinc-800">
              <div className="absolute w-4 h-4 bg-white rounded-full -left-[9px] top-1" />
              <div className="mb-1 flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-zinc-400 text-sm">{exp.period}</span>
              </div>
              <p className="text-white font-medium mb-4">{exp.company}</p>
              <ul className="list-disc list-inside space-y-2 text-zinc-400">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;