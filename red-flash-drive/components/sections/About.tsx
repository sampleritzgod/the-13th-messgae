import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const POINTS = [
  {
    title: "The Synopsis",
    body: "When Aryan picks up a stray red flash drive in an empty classroom, he expects a forgotten assignment — not a buried trail of stolen funds and missing students. Within hours, a printed threat, a relentless masked stranger, and a journalist with her own agenda turn one ordinary evening into a 24-hour fight to survive the night.",
  },
  {
    title: "The Story",
    body: "Across a single campus — classroom, corridor, library, parking lot, and rooftop — three students race to decrypt the drive before whoever wants it erased catches them first. Every adult who offers help has something to hide, and every safe corner turns out to be a trap.",
  },
  {
    title: "Why This Mission Matters",
    body: "The Red Flash Drive is a thriller about the cost of looking away. It asks what an ordinary person owes the truth when keeping it could cost everything — and reveals that the most dangerous secrets are the ones we hide from ourselves.",
  },
];

export default function About() {
  return (
    <section id="about" className="container-px relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About the Film"
          title="One Drive. One Night. No Way Out."
          description="A grounded, tightly-wound thriller set entirely on a college campus over a single sleepless night."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {POINTS.map((point, i) => (
            <Reveal
              key={point.title}
              delay={i * 0.1}
              className="glass rounded-2xl p-7 transition-colors hover:border-accent/30"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 font-display text-accent-soft">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-white">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {point.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
