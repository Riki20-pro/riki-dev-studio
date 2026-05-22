"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Music, Mail, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const FOOTER_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: GitBranch, href: "https://github.com/Riki20-pro", label: "GitHub" },
  { icon: Music, href: "https://www.tiktok.com/@rikiii_20", label: "TikTok" },
  { icon: Mail, href: "mailto:rikisiahaan14@gmail.com", label: "Email" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/[0.05] bg-black py-12 text-zinc-400">
      {/* Background Glow - Dibuat lebih halus */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 size-[400px] -translate-x-1/2 rounded-full bg-violet-600/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Main Grid: 3 Col di Desktop, Stack di Mobile */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:items-start">
          {/* 1. Brand Section - Tetap di kiri pada desktop */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tighter text-white">
              RIKI<span className="text-zinc-500"> DEV STUDIO -Verified</span>
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Membangun solusi digital yang fokus pada performa dan pengalaman
              pengguna yang andal.
            </p>
          </div>

          {/* 2. Navigasi - Sekarang Benar-benar Center */}

          <div className="flex flex-col items-center md:pl-12">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Navigasi
            </h4>
            <nav className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium transition-all duration-300 hover:text-white hover:translate-y-[-2px]"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* 3. Media Sosial - Tetap di kanan pada desktop */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Media Sosial
            </h4>
            <div className="mt-6 flex gap-4">
              {SOCIALS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-white/40 hover:bg-white/10 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/[0.05] pt-8 sm:flex-row gap-6">
          <p className="text-[11px] uppercase tracking-widest text-zinc-600">
            © {new Date().getFullYear()} Riki Dev Studio.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-500 transition-colors hover:text-white"
          >
            Back to top
            <div className="flex size-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/5">
              <ArrowUp className="size-3 transition-transform duration-300 group-hover:-translate-y-1" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
