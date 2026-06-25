import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { CHARACTERS } from "@/data/film";

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-br from-steel to-ink">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-accent/20 to-transparent" />
      <span className="font-display text-5xl font-semibold tracking-wider text-white/15 transition-colors duration-300 group-hover:text-white/30">
        {initials}
      </span>
      <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.3em] text-slate-500">
        Still
      </span>
    </div>
  );
}

export default function Characters() {
  return (
    <section id="characters" className="container-px relative bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Characters"
          title="Five People. One Secret."
          description="Everyone who touches the drive is changed by it. Trust is the rarest currency on campus tonight."
        />

        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {CHARACTERS.map((char, i) => (
            <Reveal
              key={char.id}
              delay={i * 0.08}
              as="article"
              className="group glass overflow-hidden rounded-2xl transition-all duration-300 hover:border-accent/40 hover:shadow-glow"
            >
              <Avatar name={char.name} />
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
                    {char.name}
                  </h3>
                </div>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-accent-soft">
                  {char.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {char.description}
                </p>
                <span className="mt-4 inline-block rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-slate-400">
                  {char.importance}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
