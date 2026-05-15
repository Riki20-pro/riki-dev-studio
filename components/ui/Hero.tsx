"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STATS = [
  {
    icon: Code2,
    value: "21+",
    label: "Projects Delivered",
  },
  {
    icon: Briefcase,
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: "30+",
    label: "Happy Clients",
  },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const statCardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE, delay: 0.35 + i * 0.1 },
  }),
};

function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-32 top-1/4 size-[420px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute -right-24 top-0 size-[380px] rounded-full bg-blue-600/15 blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[80px]" />
    </div>
  );
}

function FreelanceBadge() {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10",
        "bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300",
        "backdrop-blur-sm"
      )}
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
      </span>
      <Sparkles className="size-3.5 text-zinc-400" />
      Available for Freelance & Collaboration
    </motion.div>
  );
}

function HeroCTAs() {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
    >
      <Button
        asChild
        size="lg"
        className={cn(
          "h-11 rounded-full bg-white px-6 text-sm font-medium text-black",
          "transition-all duration-300",
          "hover:bg-white/90 hover:shadow-[0_0_32px_rgba(255,255,255,0.1)]",
          "active:scale-[0.98]"
        )}
      >
        <Link href="#projects">
          View Projects
          <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        size="lg"
        className={cn(
          "h-11 rounded-full border-white/15 bg-transparent px-6 text-sm font-medium text-white",
          "transition-all duration-300",
          "hover:border-white/25 hover:bg-white/5"
        )}
      >
        <Link href="#contact">
          Let&apos;s Collaborate
        </Link>
      </Button>
    </motion.div>
  );
}

type StatCardProps = {
  icon: (typeof STATS)[number]["icon"];
  value: string;
  label: string;
  index: number;
};

function StatCard({ icon: Icon, value, label, index }: StatCardProps) {
  return (
    <motion.div
      custom={index}
      variants={statCardVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08]",
        "bg-white/[0.03] p-5 backdrop-blur-sm",
        "transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.05]"
      )}
    >
      <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors duration-300 group-hover:text-white">
        <Icon className="size-5" />
      </div>
      <p className="text-2xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-1 text-sm text-zinc-500">{label}</p>
    </motion.div>
  );
}

function HeroStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
      {STATS.map((stat, index) => (
        <StatCard key={stat.label} {...stat} index={index} />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-20"
    >
      <HeroBackground />

      <motion.div
        className="relative mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <FreelanceBadge />

            <motion.h1
              variants={itemVariants}
              className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Frontend &{" "}
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
            >
              Saya membantu bisnis dan perusahaan membangun website modern, POS
              system, dashboard management, dan solusi digital yang responsive,
              cepat, dan profesional.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 w-full sm:w-auto">
              <HeroCTAs />
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="w-full lg:max-w-md lg:justify-self-end"
          >
            <HeroStats />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
