import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { ZapLogo } from "./ZapLogo";
import { DownloadButton } from "./DownloadButton";

const NAV_LINKS = [
  { label: "Home", id: "top" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Features", id: "features" },
  { label: "App", id: "app" },
  { label: "FAQ", id: "faq" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
          scrolled ? "glass-strong shadow-elevated" : "glass",
        )}
      >
        <Link to="/" aria-label="Zappit home" className="shrink-0">
          <ZapLogo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.label} className="relative">
                <a
                  href={`/#${l.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
                  )}
                >
                  {l.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-center transition-transform duration-500",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                    style={{ background: "var(--gradient-primary)" }}
                  />
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    transition={{ type: "spring", stiffness: 320, damping: 26 }}
                    aria-hidden
                    className="absolute -bottom-2 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-primary shadow-glow-sm"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <DownloadButton location="navbar" label="Download App" />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full glass text-foreground lg:hidden"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid place-items-center"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -16, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl glass-strong shadow-elevated lg:hidden"
          >
            <div className="p-5">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.05 }}
                  >
                    <a
                      href={`/#${l.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition-colors",
                        active === l.id
                          ? "bg-surface-2 text-foreground"
                          : "text-foreground hover:bg-surface-2",
                      )}
                    >
                      {l.label}
                      {active === l.id && (
                        <span aria-hidden className="size-1.5 rounded-full bg-primary" />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-4">
                <DownloadButton location="mobile-menu" size="lg" className="w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
