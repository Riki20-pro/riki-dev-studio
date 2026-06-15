"use client";

import { motion } from "framer-motion";
import {
  Check,
  Globe,
  LayoutDashboard,
  Palette,
  Wrench,
  Smartphone,
  Megaphone,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const SERVICES: ServiceItem[] = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Website modern, responsif, dan performa tinggi menggunakan teknologi mutakhir.",
    features: [
      "Fullstack Next.js / Laravel",
      "PHP Native & MySQL Support",
      "Supabase & API Integration",
      "High Performance & Responsive",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Aplikasi Android dan iOS yang intuitif dengan performa tinggi dan lancar.",
    features: [
      "Cross-Platform Android & iOS",
      "Smooth UI Animation",
      "Secure API Integration",
      "App Store Optimization (ASO)",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Desain antarmuka yang elegan dan pengalaman pengguna yang mulus serta interaktif.",
    features: [
      "Figma Wireframing & Prototyping",
      "Modern Typography & Brand Identity",
      "User-Centric Design System",
      "Interactive Micro-interactions",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    description: "Strategi pemasaran digital dan optimasi mesin pencari untuk melejitkan traffic serta penjualan bisnis Anda.",
    features: [
      "Advanced Google & Meta Ads",
      "Full-Suite SEO (On-Page & Technical)",
      "Search Authority (Off-Page) & Local SEO",
      "High-Conversion Analytics Tracking",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Security",
    description: "Layanan perawatan berkala dan proteksi ketat untuk menjaga sistem tetap prima.",
    features: [
      "Daily Cloud Backup & Recovery",
      "Real-time Uptime Monitoring",
      "SSL & Vulnerability Protection",
      "24/7 Bug Fixing & MySQL Optimization",
    ],
  },
  {
    icon: RefreshCcw,
    title: "System Integration",
    description: "Integrasi dan otomatisasi sistem yang efisien untuk memangkas proses operasional.",
    features: [
      "Workflow Automation (n8n Expert)",
      "Third-party API Integration",
      "Legacy System Migration",
      "Scalable Cloud Solutions",
    ],
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="size-4 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
