"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CONTACT_METHODS = [
  {
    name: "Email",
    value: "rikisiahaan14@gmail.com",
    label: "Kirim Email",
    href: "mailto:rikisiahaan14@gmail.com",
    icon: Mail,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    name: "WhatsApp",
    value: "0856-7336-883",
    label: "Chat Sekarang",
    href: "https://wa.me/628567336883",
    icon: MessageSquare,
    color: "bg-green-500/10 text-green-500",
  },
  {
    name: "GitHub",
    value: "Riki20-pro",
    label: "LIHAT REPOSITORI →",
    href: "https://github.com/Riki20-pro",
    // Menggunakan fungsi komponen SVG kustom agar 100% aman dari masalah import eksternal
    icon: (props: React.ComponentProps<"svg">) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    color: "bg-zinc-500/10 text-white",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-4 py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Mari bangun sesuatu yang luar biasa{" "}
            <span className="text-zinc-500">bersama.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_METHODS.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all hover:bg-white/[0.05] hover:border-white/20"
            >
              <div>
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-lg",
                    method.color,
                  )}
                >
                  <method.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">
                  {method.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{method.value}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors">
                {method.label}
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
