"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "POS Coffee Shop",
    category: "POS System",
    status: "Completed",
    description:
      "Sistem POS modern untuk coffee shop dengan dashboard kasir, manajemen produk, transaksi, dan laporan penjualan.",
    image: "/projects/pos-coffee.png",
    tech: ["Next.js", "Tailwind CSS", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "TFlow Manufacturing",
    category: "Company Profile & Management",
    status: "In Development",
    description:
      "Website manufaktur pengolahan limbah tulang ikan dan tulang ayam menjadi pakan ikan dengan dashboard modern dan company profile.",
    image: "/projects/tflow.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Website Perumahan",
    category: "Real Estate Website",
    status: "Completed",
    description:
      "Website modern untuk promosi dan informasi perumahan dengan tampilan clean, responsive, dan premium.",
    image: "/projects/perumahan.png",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
] as const;

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
      delay: 0.15 + i * 0.1,
    },
  }),
};

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <span
      className={cn(
        "rounded-full border border-white/10 bg-white/[0.04]",
        "px-3 py-1 text-xs font-medium text-zinc-300"
      )}
    >
      {label}
    </span>
  );
}

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
};

function ProjectCard({
  title,
  category,
  status,
  description,
  image,
  tech,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: EASE }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl",
        "border border-white/[0.08]",
        "bg-white/[0.03] backdrop-blur-xl",
        "transition-all duration-500",
        "hover:border-white/[0.16]",
        "hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-3xl opacity-0",
          "bg-gradient-to-b from-white/[0.08] via-transparent to-transparent",
          "transition-opacity duration-500 group-hover:opacity-100"
        )}
        aria-hidden
      />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn(
            "object-cover transition-transform duration-700 ease-out",
            "group-hover:scale-[1.05]"
          )}
        />

        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t",
            "from-black/70 via-black/10 to-transparent"
          )}
          aria-hidden
        />

        <div
          className={cn(
            "absolute right-4 top-4 flex size-9 items-center justify-center",
            "rounded-xl border border-white/10 bg-black/50",
            "text-white backdrop-blur-md",
            "opacity-0 transition-all duration-300",
            "translate-y-1 group-hover:translate-y-0 group-hover:opacity-100"
          )}
        >
          <ArrowUpRight className="size-4" />
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span
            className={cn(
              "rounded-full border border-white/10 bg-white/[0.04]",
              "px-3 py-1 text-[11px] font-medium uppercase tracking-wider",
              "text-zinc-300"
            )}
          >
            {category}
          </span>

          <span
            className={cn(
              "rounded-full border px-2.5 py-1 text-[11px] font-medium",
              status === "Completed"
                ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                : "border-amber-500/20 bg-amber-500/10 text-amber-400"
            )}
          >
            {status}
          </span>
        </div>

        <h3 className="text-xl font-semibold leading-tight tracking-tight text-white">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <TechBadge key={item} label={item} />
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button
            asChild
            className={cn(
              "h-10 flex-1 rounded-xl bg-white text-sm font-medium text-black",
              "transition-all duration-300 hover:bg-white/90"
            )}
          >
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-4" />
              Live Demo
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className={cn(
              "h-10 flex-1 rounded-xl border-white/15 bg-transparent",
              "text-sm font-medium text-white",
              "transition-all duration-300",
              "hover:border-white/25 hover:bg-white/5"
            )}
          >
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="size-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/4 top-0 size-[400px] -translate-x-1/2 rounded-full bg-violet-600/6 blur-[120px]" />
        <div className="absolute bottom-0 right-0 size-[320px] rounded-full bg-blue-600/6 blur-[100px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p
          variants={itemVariants}
          className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500"
        >
          Selected Projects
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Real projects built for business, operations, and modern digital
          experiences.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          A collection of selected work ranging from POS systems and company
          profile platforms to modern business websites — focused on
          performance, scalability, and premium user experience.
        </motion.p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}