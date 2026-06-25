"use client";

import Reveal from "@/components/ui/Reveal";
import { printScreenplay } from "@/lib/printScreenplay";

export default function Download() {
  const handleDownload = () => {
    // Builds a standalone, screenplay-only document in an isolated iframe and
    // prints that — so the export contains ONLY the script, never the website.
    printScreenplay();
  };

  return (
    <section id="download" className="container-px relative py-24 sm:py-32">
      <Reveal className="mx-auto max-w-3xl">
        <div className="glass grain relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-[100px]" />
          <div className="relative z-10">
            <span className="eyebrow mb-4 block">Take It With You</span>
            <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
              Download the Screenplay
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Export the full, formatted shooting script as a PDF — ready to read,
              annotate, or share with your crew.
            </p>

            <button
              onClick={handleDownload}
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-semibold text-white shadow-glow transition-all hover:bg-accent-soft"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                />
              </svg>
              Download Screenplay PDF
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
