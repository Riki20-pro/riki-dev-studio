"use client";

import { motion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  Palette,
  Wrench,
} from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Membangun website modern, responsive, dan scalable untuk bisnis, company profile, maupun personal branding.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & POS System",
    description:
      "Membuat dashboard management dan sistem POS modern untuk operasional bisnis yang lebih efisien.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Mendesain interface modern dengan fokus pada user experience, visual hierarchy, dan clean aesthetics.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Maintenance, optimasi performa, dan pengembangan fitur website agar tetap aman dan berjalan optimal.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Services
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Helping businesses build modern digital solutions.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Fokus pada pengembangan website modern, dashboard management,
            company profile, dan solusi digital yang scalable serta responsive.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-[0_0_50px_rgba(255,255,255,0.06)]"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}