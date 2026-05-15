"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Music, Github, ArrowRight } from "lucide-react";
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
    name: "TikTok",
    value: "@rikiii_20",
    label: "Follow TikTok",
    href: "https://www.tiktok.com/@rikiii_20",
    icon: Music, // Menggunakan ikon Music untuk TikTok
    color: "bg-zinc-500/10 text-white",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black px-4 py-20 sm:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Mari bicara tentang <span className="text-zinc-500">projek Anda.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Apakah Anda memiliki pertanyaan atau ingin memulai kolaborasi? Saya selalu terbuka untuk mendiskusikan ide-ide baru.
          </motion.p>
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
              className={cn(
                "group relative flex flex-col justify-between rounded-2xl border border-white/[0.08]",
                "bg-white/[0.02] p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
              )}
            >
              <div>
                <div className={cn("flex size-10 items-center justify-center rounded-lg", method.color)}>
                  <method.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">{method.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{method.value}</p>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors">
                {method.label}
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 border-t border-white/[0.05] pt-8 text-center"
        >
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Riki Studio. Built with Next.js & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}