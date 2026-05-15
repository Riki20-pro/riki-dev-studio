"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

const CTA_HREF = "#contact";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

function NavLink({ href, label, className, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative whitespace-nowrap text-[13px] font-medium text-white/70 transition-colors duration-300 lg:text-sm",
        "hover:text-white",
        "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white/80",
        "after:transition-all after:duration-300 hover:after:w-full",
        className
      )}
    >
      {label}
    </Link>
  );
}

function CollaborateButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      asChild
      className={cn(
        "rounded-full bg-white px-4 text-[13px] font-medium text-black lg:px-5 lg:text-sm",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
        "transition-all duration-300",
        "hover:bg-white/90 hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]",
        "active:scale-[0.98]",
        className
      )}
    >
      <Link href={CTA_HREF} onClick={onClick}>
        Let&apos;s Collaborate
      </Link>
    </Button>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const closeSheet = useCallback(() => setOpen(false), []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 hover:text-white lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-full flex-col border-white/10 bg-black text-white sm:max-w-sm"
      >
        <SheetHeader className="border-b border-white/10 pb-4">
          <SheetTitle className="text-left font-semibold tracking-tight text-white">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <nav
          className="flex flex-col gap-0.5 px-2 pt-6"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              onClick={closeSheet}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-medium text-white/70",
                "transition-colors duration-300",
                "hover:bg-white/5 hover:text-white"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto px-2 pb-2 pt-8">
          <CollaborateButton className="w-full" onClick={closeSheet} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Navbar() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "border-b border-white/[0.08] bg-black/80 backdrop-blur-md",
        "supports-[backdrop-filter]:bg-black/60"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className={cn(
            "group flex shrink-0 items-center gap-2 text-lg font-semibold tracking-tight text-white",
            "transition-opacity duration-300 hover:opacity-90"
          )}
        >
          <span
            className={cn(
              "size-1.5 rounded-full bg-white",
              "transition-transform duration-300 group-hover:scale-125"
            )}
            aria-hidden
          />
          Riki
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-7"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <NavLink key={label} href={href} label={label} />
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <CollaborateButton className="hidden lg:inline-flex" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
