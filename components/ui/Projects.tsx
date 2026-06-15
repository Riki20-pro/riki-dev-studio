"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ImageModal } from "./ImageModal";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiSupabase,
  SiPhp,
  SiMysql,
  SiLaravel,
  SiFramer,
} from "react-icons/si";

interface ProjectMedia {
  type: "image" | "video";
  src: string;
}

interface ProjectType {
  title: string;
  category: string;
  status: string;
  description: string;
  media: ProjectMedia[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

interface TechIcon {
  icon: React.ReactNode;
  color: string;
}

const getTechIcon = (techName: string) => {
  const name = techName.toLowerCase();

  if (name.includes("next.js") || name.includes("nextjs")) {
    return {
      icon: <SiNextdotjs className="size-4 text-white" />,
      color: "bg-zinc-900 border-zinc-800",
    };
  }
  if (name.includes("typescript") || name.includes("ts")) {
    return {
      icon: <SiTypescript className="size-4 text-[#3178C6]" />,
      color: "bg-[#3178C6]/10 border-[#3178C6]/30",
    };
  }
  if (name.includes("tailwind")) {
    return {
      icon: <SiTailwindcss className="size-4 text-[#06B6D4]" />,
      color: "bg-[#06B6D4]/10 border-[#06B6D4]/30",
    };
  }
  if (name.includes("shadcn")) {
    return {
      icon: <SiShadcnui className="size-4 text-white" />,
      color: "bg-zinc-900 border-zinc-800",
    };
  }
  if (name.includes("supabase")) {
    return {
      icon: <SiSupabase className="size-4 text-[#3ECF8E]" />,
      color: "bg-[#3ECF8E]/10 border-[#3ECF8E]/30",
    };
  }
  if (name.includes("php")) {
    return {
      icon: <SiPhp className="size-5 text-[#777BB4]" />,
      color: "bg-[#777BB4]/10 border-[#777BB4]/30",
    };
  }
  if (name.includes("mysql")) {
    return {
      icon: <SiMysql className="size-5 text-[#4479A1]" />,
      color: "bg-[#4479A1]/10 border-[#4479A1]/30",
    };
  }
  if (name.includes("laravel")) {
    return {
      icon: <SiLaravel className="size-4 text-[#FF2D20]" />,
      color: "bg-[#FF2D20]/10 border-[#FF2D20]/30",
    };
  }
  if (name.includes("framer motion")) {
    return {
      icon: <SiFramer className="size-4 text-white" />,
      color: "bg-zinc-900 border-zinc-800",
    };
  }

  // Fallback jika tidak terdaftar
  return {
    icon: <span className="text-[10px] font-mono font-bold">Code</span>,
    color: "bg-zinc-900 border-zinc-800",
  };
};

const PROJECTS: ProjectType[] = [
  {
    title: "Nasi Liwet Nusantara POS",
    category: "Mobile POS System & Dashboard",
    status: "Production (Internal)",
    description:
      "Sistem informasi Point of Sales (POS) berbasis mobile untuk bisnis kuliner Nasi Liwet Nusantara. Dilengkapi dengan ringkasan operasional dashboard bisnis, manajemen menu real-time, pencatatan kasir, riwayat transaksi beserta cetak struk pembeli, dan pengaturan profil toko.",
    media: [
      { type: "video", src: "/projects/liwet-pos-demo.mp4" },
      { type: "image", src: "/projects/liwet-pos-mockup.png" },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "POS Coffee Shop",
    category: "POS System",
    status: "Internal",
    description:
      "Sistem POS untuk coffee shop yang sudah digunakan oleh klien secara internal. Fitur mencakup kasir, manajemen produk, transaksi, dan laporan penjualan.",
    media: [{ type: "image", src: "/projects/pos-coffee.png" }],
    tech: ["PHP Native", "Tailwind CSS", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "TFlow Manufacturing",
    category: "Company Profile & Management",
    status: "Private Client",
    description:
      "Website company profile dan manajemen untuk TFlow Manufacturing yang sudah dipakai klien, tetapi tidak tersedia untuk akses publik.",
    media: [{ type: "image", src: "/projects/tflow.png" }],
    tech: ["Laravel", "Tailwind CSS", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Website Perumahan",
    category: "Real Estate Website",
    status: "Prototype",
    description:
      "Website perumahan yang dibuat secara lokal untuk pengembangan dan presentasi fitur, belum dipublikasikan.",
    media: [{ type: "image", src: "/projects/perumahan.png" }],
    tech: ["PHP Native", "Tailwind CSS", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "CV Sinar Fajar One Sheet",
    category: "Landing Page Usaha",
    status: "Live",
    description:
      "Landing page publik untuk CV Sinar Fajar yang mempromosikan jasa pemasangan dan maintenance one sheet dengan garansi 3 bulan dan konsultasi WhatsApp.",
    media: [
      { type: "image", src: "/projects/sinar-fajar.png" },
      { type: "image", src: "/projects/sinar-fajar-project.png" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Shadcn UI",
      "Framer Motion",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Financeus",
    category: "Aplikasi Web Internal",
    status: "Production (Internal)",
    description:
      "Aplikasi Web manajemen keuangan internal berbasis multi-user yang digunakan untuk pencatatan transaksi real-time, transparansi saldo antar anggota tim, serta pembatasan hak akses demi keamanan data.",
    media: [{ type: "image", src: "/projects/financeus.png" }],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Shadcn UI",
      "Framer Motion",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  const [selectedMedia, setSelectedMedia] = useState<{
    media: ProjectMedia[];
    title: string;
    initialIndex: number;
  } | null>(null);

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-zinc-500">
            Selected Projects
          </span>
          <h2 className="text-4xl font-bold mt-2 font-serif text-zinc-100">
            Real projects built for business, operations, and modern digital
            experiences.
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl">
            A collection of selected work ranging from POS systems and company
            profile platforms to modern business websites — focused on
            performance, scalability, and premium user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300"
            >
              <div>
                {/* Media Preview Box */}
                <div
                  className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 bg-zinc-950 cursor-pointer group"
                  onClick={() =>
                    setSelectedMedia({
                      media: project.media,
                      title: project.title,
                      initialIndex: 0,
                    })
                  }
                >
                  {project.media[0].type === "video" ? (
                    <video
                      src={project.media[0].src}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={project.media[0].src}
                        alt={project.title}
                        fill
                        className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Badge Multi Media */}
                  {project.media.length > 1 && (
                    <span className="absolute top-3 right-3 bg-blue-600/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm z-10">
                      + {project.media.length - 1} Media
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 bg-zinc-800/50 px-3 py-1 rounded-full border border-zinc-700/50">
                    {project.category}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                      project.status.includes("Production") ||
                      project.status === "Live"
                        ? "bg-green-950/50 text-green-400 border-green-800/50"
                        : "bg-amber-950/50 text-amber-400 border-amber-800/50"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-100 font-serif mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {project.tech.map((t, i) => {
                    const { icon, color } = getTechIcon(t);
                    return (
                      <div
                        key={i}
                        className="group relative flex items-center justify-center"
                      >
                        {/* Bulatan Kotak Ikon */}
                        <div
                          className={`p-2 rounded-xl border transition-all duration-300 hover:scale-110 shadow-md flex items-center justify-center cursor-help ${color}`}
                        >
                          {icon}
                        </div>

                        {/* Tooltip Informasi */}
                        <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center z-30 pointer-events-none animate-in fade-in slide-in-from-bottom-1 duration-200">
                          <span className="relative z-10 rounded-md bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-xs font-mono text-zinc-200 whitespace-nowrap shadow-xl">
                            {t}
                          </span>
                          {/* Segitiga Kecil di Bawah Tooltip */}
                          <div className="-mt-1 size-1.5 rotate-45 bg-zinc-900 border-r border-b border-zinc-800"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMedia && (
          <ImageModal
            media={selectedMedia.media}
            title={selectedMedia.title}
            initialIndex={selectedMedia.initialIndex}
            onClose={() => setSelectedMedia(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
