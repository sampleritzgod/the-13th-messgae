import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRODUCTION } from "@/data/film";

export default function Production() {
  return (
    <section id="production" className="container-px relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Production"
          title="Made Lean. Shot Sharp."
          description="A student production proving that tension comes from craft, not budget."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Facts */}
          <Reveal className="glass rounded-2xl p-7">
            <h3 className="mb-5 font-display text-lg font-semibold uppercase tracking-wide text-white">
              At a Glance
            </h3>
            <dl className="space-y-4">
              {PRODUCTION.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-slate-400">{fact.label}</dt>
                  <dd className="font-display text-sm font-semibold uppercase tracking-wide text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Locations */}
          <Reveal delay={0.1} className="glass rounded-2xl p-7">
            <h3 className="mb-5 font-display text-lg font-semibold uppercase tracking-wide text-white">
              Locations
            </h3>
            <ul className="space-y-3">
              {PRODUCTION.locations.map((loc, i) => (
                <li key={loc} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="font-mono text-xs text-accent-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {loc}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Equipment */}
          <Reveal delay={0.2} className="glass rounded-2xl p-7">
            <h3 className="mb-5 font-display text-lg font-semibold uppercase tracking-wide text-white">
              Equipment
            </h3>
            <ul className="space-y-3">
              {PRODUCTION.equipment.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-slate-500">
              Shot entirely on iPhone with a tripod and a basic lighting kit — a
              run-and-gun setup built for a single campus night shoot.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
