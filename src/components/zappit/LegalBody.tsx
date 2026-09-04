import { Reveal } from "./Reveal";

export type LegalSection = { h: string; p: string[] };

export function LegalBody({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="mt-12 flex flex-col gap-8">
      {sections.map((s, i) => (
        <Reveal key={s.h} delay={Math.min(i * 0.04, 0.2)}>
          <section className="rounded-2xl glass p-6">
            <h2 className="text-lg font-bold text-foreground">{s.h}</h2>
            {s.p.map((text) => (
              <p key={text} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            ))}
          </section>
        </Reveal>
      ))}
    </div>
  );
}
