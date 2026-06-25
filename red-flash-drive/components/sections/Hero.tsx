"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FILM } from "@/data/film";

export default function Hero() {
  const reduce = useReducedMotion();

  const item = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="hero"
      className="grain relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Poster background (CSS-composed, no external assets) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-ink to-ink" />
        <div className="absolute left-1/2 top-1/3 h-[55rem] w-[55rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />
        <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-crimson/10 blur-[120px]" />
        {/* faux poster vignette grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          {...item(0)}
          className="eyebrow mb-6"
        >
          A College Action-Thriller Short Film
        </motion.p>

        <motion.h1
          {...item(0.1)}
          className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          The <span className="text-crimson">Red</span> Flash Drive
        </motion.h1>

        <motion.p
          {...item(0.2)}
          className="mx-auto mt-6 max-w-xl text-lg font-light italic text-slate-300 sm:text-xl"
        >
          &ldquo;{FILM.tagline}&rdquo;
        </motion.p>

        <motion.div
          {...item(0.3)}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.25em] text-slate-400"
        >
          <span>{FILM.genre}</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span>{FILM.runtime}</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span>{FILM.year}</span>
        </motion.div>

        <motion.div
          {...item(0.4)}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#download"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-semibold text-white shadow-glow transition-all hover:bg-accent-soft"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
              />
            </svg>
            Download Script
          </a>
          <a
            href="#screenplay"
            className="inline-flex items-center gap-2 px-6 py-4 font-medium text-slate-300 transition-colors hover:text-white"
          >
            Read the Screenplay
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-500 transition-colors hover:text-white"
        aria-label="Scroll to about"
      >
        <svg className="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>
  );
}
