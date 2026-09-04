import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PRIVACY_URL,
  TERMS_URL,
  X_URL,
} from "@/config/site";
import { ZapLogo } from "./ZapLogo";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.5 3h3.2l-7 8 7.3 10h-5.6l-4.4-6-5 6H2.8l7.3-8.6L3 3h5.7l4.1 5.6L17.5 3Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <ZapLogo />
            <p className="mt-4 text-sm leading-relaxed text-subtle">
              Campus food delivery, designed for students. Android APK available directly from this
              site.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
            <a href="/#top" className="text-muted-foreground transition-colors hover:text-foreground">
              Home
            </a>
            <a
              href="/#features"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </a>
            <Link
              to="/download"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Download
            </Link>
            <Link
              to={PRIVACY_URL as "/privacy"}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              to={TERMS_URL as "/terms"}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="hairline h-px w-full" aria-hidden />

        <div className="flex flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-subtle">© Zappit. All rights reserved.</p>
          <ul className="flex items-center gap-3">
            {[
              { href: INSTAGRAM_URL, label: "Instagram", Icon: Instagram },
              { href: LINKEDIN_URL, label: "LinkedIn", Icon: Linkedin },
              { href: X_URL, label: "X", Icon: XIcon },
              { href: `mailto:${CONTACT_EMAIL}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={`${label} (placeholder link)`}
                  className="grid size-10 place-items-center rounded-full glass text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
