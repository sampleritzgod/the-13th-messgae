import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignment}`}>
      <span className="eyebrow mb-4">{eyebrow}</span>
      <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
