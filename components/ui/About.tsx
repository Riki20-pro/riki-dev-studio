"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Atom,
  Briefcase,
  Layers,
  MapPin,
  Monitor,
  Palette,
  Server,
  Users,
  Wind,
} from "lucide-react";

import { cn } from "@/lib/utils";

const SKILLS = [
  {
    name: "Next.js",
    description: "Website modern & App Router",
    icon: Layers,
  },
  {
    name: "React",
    description: "UI interaktif & dashboard",
    icon: Atom,
  },
  {
    name: "Tailwind",
    description: "Desain responsive & cepat",
    icon: Wind,
  },
  {
    name: "UI/UX",
    description: "Antarmuka yang intuitif",
    icon: Palette,
  },
  {
    name: "Backend",
    description: "API, database & integrasi",
    icon: Server,
  },
] as const;

const OPEN_TO = [
  { label: "Freelance Project", icon: Briefcase },
  { label: "Remote Work", icon: Monitor },
  { label: "Collaboration", icon: Users },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE, delay: 0.2 + i * 0.08 },
  }),
};

function SectionLabel() {
  return (
    <motion.p
      variants={itemVariants}
      className="text-sm font-medium uppercase tracking-widest text-zinc-500"
    >
      About
    </motion.p>
  );
}

function ProfileAvatar() {
  return (
    <div
      className={cn(
        "relative size-44 shrink-0 overflow-hidden rounded-full sm:size-52",
        "border border-white/15 bg-gradient-to-b from-zinc-800/50 via-zinc-900/80 to-black",
        "shadow-[0_8px_30px_rgba(0,0,0,0.45)]",
        "ring-2 ring-white/5 ring-offset-2 ring-offset-black"
      )}
    >
      <Image
        src="/images/riki.png"
        alt="Riki — Frontend & Full-Stack Developer"
        fill
        sizes="(max-width: 640px) 128px, 144px"
        className="object-cover object-[center_25%]"
        priority
      />
    </div>
  );
}

function ProfileCard() {
    return (
      <motion.div
        variants={itemVariants}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/[0.08]",
          "bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8",
          "flex flex-col items-center justify-center" // Tambahkan ini agar box panjangnya jadi flex center
        )}
      >
        {/* Efek cahaya di pojok */}
        <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-violet-600/10 blur-2xl" />
  
        {/* Bagian konten: Semua diatur ke items-center dan text-center */}
        <div className="relative flex flex-col items-center text-center w-full">
          <ProfileAvatar />
  
          <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
            Riki
          </h3>
          <p className="mt-1 text-sm text-zinc-400">
            Frontend & Full-Stack Developer
          </p>
  
          <div className="mt-4 flex items-center justify-center gap-1.5 text-sm text-zinc-500">
            <MapPin className="size-3.5 shrink-0" />
            <span>Indonesia · Remote</span>
          </div>
  
          <div className="mt-6 w-full border-t border-white/[0.06] pt-6 flex flex-col items-center">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              Focus
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400 max-w-[250px]">
              Website modern · Dashboard management · POS system · Full-stack development
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

function AvailabilityTags() {
  return (
    <motion.div variants={itemVariants} className="space-y-3">
      <p className="text-sm font-medium text-zinc-300">
        Terbuka untuk peluang berikut:
      </p>
      <div className="flex flex-wrap gap-2">
        {OPEN_TO.map(({ label, icon: Icon }) => (
          <span
            key={label}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-white/10",
              "bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300",
              "transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.06]"
            )}
          >
            <Icon className="size-3.5 text-zinc-500" />
            {label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

type SkillCardProps = (typeof SKILLS)[number] & { index: number };

function SkillCard({ name, description, icon: Icon, index }: SkillCardProps) {
  return (
    <motion.div
      custom={index}
      variants={skillVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={cn(
        "group rounded-xl border border-white/[0.08] bg-white/[0.02] p-4",
        "transition-colors duration-300",
        "hover:border-white/[0.14] hover:bg-white/[0.04]"
      )}
    >
      <div
        className={cn(
          "mb-3 flex size-9 items-center justify-center rounded-lg",
          "border border-white/10 bg-white/[0.04] text-zinc-400",
          "transition-colors duration-300 group-hover:text-white"
        )}
      >
        <Icon className="size-4" />
      </div>
      <p className="font-medium text-white">{name}</p>
      <p className="mt-0.5 text-xs text-zinc-500">{description}</p>
    </motion.div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-0 top-1/2 size-[360px] -translate-y-1/2 rounded-full bg-blue-600/8 blur-[100px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <SectionLabel />

        <motion.h2
          variants={itemVariants}
          className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Membangun solusi digital yang scalable
        </motion.h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <ProfileCard />

          <div className="flex flex-col gap-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                Saya adalah frontend dan full-stack developer yang berfokus
                membangun website modern, dashboard management system, dan POS
                system — dari antarmuka yang rapi hingga logika bisnis yang
                andal.
              </p>
              <p className="text-base leading-relaxed text-zinc-500 sm:text-lg">
                Saya berpengalaman mendampingi bisnis, UMKM, dan tim produk
                dalam menerjemahkan kebutuhan operasional menjadi solusi digital
                yang responsive, cepat, dan profesional.
              </p>
              <p className="text-base leading-relaxed text-zinc-500 sm:text-lg">
                Selain development, saya percaya pada kolaborasi yang transparan
                — cocok untuk freelance project, kerja remote, maupun kemitraan
                jangka panjang dengan tim Anda.
              </p>
            </motion.div>

            <AvailabilityTags />

            <div>
              <motion.h3
                variants={itemVariants}
                className="text-sm font-medium uppercase tracking-widest text-zinc-500"
              >
                Keahlian Utama
              </motion.h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {SKILLS.map((skill, index) => (
                  <SkillCard key={skill.name} {...skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
