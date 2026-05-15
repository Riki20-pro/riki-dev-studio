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
      <div className="pointer-events-none absolute -bottom-24 left-1/2 size-[400px] -translate-x-1/2 rounded-full bg-violet-600/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold tracking-tighter text-white">
              RIKI DEV <span className="text-zinc-500">STUDIO</span>
            </h3>
            <p className="mt-4 max-w-xs text-center text-sm leading-relaxed md:text-left">
              Membangun solusi digital yang fokus pada performa dan pengalaman pengguna yang andal.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">Navigasi</h4>
            <nav className="mt-6 flex flex-wrap justify-center gap-6">
              {FOOTER_LINKS.map((link) => (
                <a key={link.name} href={link.href} className="text-sm transition-colors hover:text-white">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">Media Sosial</h4>
            <div className="mt-6 flex gap-4">
              {SOCIALS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/[0.05] pt-8 sm:flex-row">
          <p className="text-xs">
            © {new Date().getFullYear()} Riki Studio. Built with Next.js & Tailwind CSS.
          </p>
          <button onClick={scrollToTop} className="group mt-4 flex items-center gap-2 text-xs transition-colors hover:text-white sm:mt-0">
            Back to top
            <div className="flex size-7 items-center justify-center rounded-full border border-white/10 transition-transform group-hover:-translate-y-1">
              <ArrowUp className="size-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}