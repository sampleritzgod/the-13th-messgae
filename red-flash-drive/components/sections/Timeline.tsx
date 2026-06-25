import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { TIMELINE } from "@/data/film";

export default function Timeline() {
  return (
    <section id="timeline" className="container-px relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Story Timeline"
          title="Seven Beats to the Truth"
          description="Follow the night as it unravels — from a careless discovery to a revelation no one saw coming."
        />

        <div className="relative mt-16">
          {/* vertical spine */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <ol className="space-y-10">
            {TIMELINE.map((beat, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal
                  as="li"
                  key={beat.id}
                  delay={i * 0.05}
                  className="relative flex items-start gap-6 sm:items-center sm:gap-0"
                >
                  <span className="absolute left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-accent/20 sm:left-1/2" />

                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      left ? "sm:pr-12 sm:text-right" : "sm:order-2 sm:pl-12"
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
                      Beat {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
                      {beat.label}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-slate-400">
                      {beat.detail}
                    </p>
                  </div>
                  <div className={`hidden sm:block sm:w-1/2 ${left ? "" : "sm:order-1"}`} />
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
