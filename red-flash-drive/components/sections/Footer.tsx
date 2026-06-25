import { FILM } from "@/data/film";

export default function Footer() {
  return (
    <footer className="no-print relative overflow-hidden border-t border-white/5">
      <div className="grain relative py-20">
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
        <div className="container-px relative z-10 mx-auto max-w-4xl text-center">
          <p className="font-display text-2xl font-light italic leading-snug text-white sm:text-3xl">
            &ldquo;{FILM.tagline}&rdquo;
          </p>
        </div>
      </div>

      <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 py-8 sm:flex-row">
        <a
          href="#hero"
          className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-white"
        >
          Red<span className="text-crimson">Flash</span>Drive
        </a>
        <p className="text-sm text-slate-500">
          © {FILM.year} {FILM.title}. A student short film.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#screenplay" className="transition-colors hover:text-white">
            Screenplay
          </a>
          <a href="#download" className="transition-colors hover:text-white">
            Download
          </a>
        </div>
      </div>
    </footer>
  );
}
