"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#characters", label: "Characters" },
  { href: "#timeline", label: "Timeline" },
  { href: "#screenplay", label: "Screenplay" },
  { href: "#production", label: "Production" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/5 bg-ink/80 backdrop-blur-md" : ""
      }`}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <a
          href="#hero"
          className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-white"
        >
          Red<span className="text-crimson">Flash</span>Drive
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#download"
          className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-white transition-all hover:border-accent hover:bg-accent/10 sm:inline-flex"
        >
          Download Script
        </a>

        <button
          aria-label="Toggle menu"
          className="text-slate-300 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
            />
          </svg>
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/5 bg-ink/95 backdrop-blur-md md:hidden">
          <ul className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4 text-sm text-slate-300">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-accent px-3 py-2 text-center font-semibold text-white"
              >
                Download Script
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
