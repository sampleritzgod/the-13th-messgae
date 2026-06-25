"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { SCREENPLAY, type Scene, type ScriptElement } from "@/data/screenplay";

function SceneHeading({ scene }: { scene: Scene }) {
  return (
    <span className="font-mono text-sm font-bold uppercase tracking-wide text-white">
      {scene.number}. {scene.slug} {scene.location} — {scene.time}
    </span>
  );
}

function Element({ el }: { el: ScriptElement }) {
  if (el.type === "action") {
    return (
      <p className="font-mono text-[13.5px] leading-7 text-slate-300">{el.text}</p>
    );
  }
  if (el.type === "transition") {
    return (
      <p className="text-right font-mono text-[13.5px] font-semibold uppercase tracking-wide text-accent-soft">
        {el.text}
      </p>
    );
  }
  return (
    <div className="mx-auto max-w-sm text-center">
      <p className="font-mono text-[13.5px] font-bold uppercase tracking-widest text-white">
        {el.character}
      </p>
      {el.parenthetical ? (
        <p className="font-mono text-[12.5px] italic text-slate-500">
          ({el.parenthetical})
        </p>
      ) : null}
      <p className="font-mono text-[13.5px] leading-7 text-slate-200">{el.line}</p>
    </div>
  );
}

function SceneBlock({
  scene,
  open,
  onToggle,
}: {
  scene: Scene;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <article
      id={scene.id}
      className="screenplay-scene scroll-mt-24 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.015]"
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03]"
      >
        <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
          <SceneHeading scene={scene} />
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
            {scene.beat}
          </span>
        </span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-white/5 px-5 py-6 sm:px-8">
              {scene.elements.map((el, i) => (
                <Element key={i} el={el} />
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}

export default function Screenplay() {
  const allIds = SCREENPLAY.map((s) => s.id);
  const [openIds, setOpenIds] = useState<string[]>(allIds);

  const toggle = (id: string) =>
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const expandAll = () => setOpenIds(allIds);
  const collapseAll = () => setOpenIds([]);

  return (
    <section id="screenplay" className="container-px relative bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The Full Screenplay"
          title="Read Every Scene"
          description="The complete shooting script — formatted, scene by scene. Jump to any beat or expand the whole story."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* Scene navigation */}
          <aside className="no-print lg:sticky lg:top-24 lg:self-start">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Scene Index
            </p>
            <nav className="flex flex-wrap gap-2 lg:flex-col">
              {SCREENPLAY.map((scene) => (
                <a
                  key={scene.id}
                  href={`#${scene.id}`}
                  className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <span className="font-mono text-xs text-accent-soft">
                    {String(scene.number).padStart(2, "0")}
                  </span>
                  <span className="hidden truncate lg:inline">{scene.beat}</span>
                  <span className="lg:hidden">{scene.beat}</span>
                </a>
              ))}
            </nav>

            <div className="mt-5 flex gap-2 lg:flex-col">
              <button
                onClick={expandAll}
                className="flex-1 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-accent/40 hover:text-white"
              >
                Expand all
              </button>
              <button
                onClick={collapseAll}
                className="flex-1 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-accent/40 hover:text-white"
              >
                Collapse all
              </button>
            </div>
          </aside>

          {/* Script */}
          <div className="print-screenplay space-y-4">
            {SCREENPLAY.map((scene) => (
              <SceneBlock
                key={scene.id}
                scene={scene}
                open={openIds.includes(scene.id)}
                onToggle={() => toggle(scene.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
