"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Software & Game Development Student",
    company: "SMK (PPLG Track)",
    period: "2024 - Present",
    description: "Fokus pada pengembangan web full-stack menggunakan Laravel, Tailwind CSS, dan Next.js.",
    icon: GraduationCap,
  },
  {
    title: "Founder & Developer",
    company: "KODWA Tech",
    period: "2025 - Present",
    description: "Menyediakan jasa pembuatan website profesional dan dashboard management untuk UMKM.",
    icon: Briefcase,
  },
  // Tambahkan riwayat lainnya di sini
];

export default function Experience() {
  return (
    <section id="experience" className="bg-black px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Resume
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            My Experience & Education.
          </h2>
        </motion.div>

        <div className="mt-14 space-y-8">
          {EXPERIENCES.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-6 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 transition-all hover:border-white/[0.14]"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">
                  <Icon className="size-6" />
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="hidden text-zinc-600 sm:block">•</span>
                    <span className="text-zinc-400">{exp.company}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <Calendar className="size-4" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}