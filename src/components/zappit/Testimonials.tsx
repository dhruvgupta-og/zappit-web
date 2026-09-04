import { Quote } from "lucide-react";
import { SectionHeading } from "./Reveal";

/**
 * PLACEHOLDER CONTENT — replace each entry with a real, permissioned quote.
 * Do not add real names or universities without consent.
 */
const TESTIMONIALS = [
  { quote: "Ordering between classes is finally effortless.", author: "Student User" },
  { quote: "Simple, quick and made for campus.", author: "Campus User" },
  { quote: "Exactly what a student food app should feel like.", author: "Beta User" },
  { quote: "The tracking screen tells me everything I need.", author: "Student User" },
  { quote: "Checkout takes a few taps and it's done.", author: "Campus User" },
  { quote: "Finding outlets nearby is the best part.", author: "Beta User" },
];

const ROW_A = TESTIMONIALS.slice(0, 3);
const ROW_B = TESTIMONIALS.slice(3);

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Card({ quote, author }: { quote: string; author: string }) {
  return (
    <figure className="w-[19rem] shrink-0 rounded-3xl glass gradient-border p-6 transition-transform duration-500 hover:-translate-y-1 sm:w-[22rem]">
      <Quote className="size-5 text-primary" aria-hidden />
      <blockquote className="mt-4 text-base font-semibold leading-snug text-foreground">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          aria-hidden
          className="grid size-9 place-items-center rounded-full text-[11px] font-bold text-primary-foreground"
          style={{ background: "var(--gradient-duo)" }}
        >
          {initials(author)}
        </span>
        <span className="text-xs text-subtle">{author} • placeholder</span>
      </figcaption>
    </figure>
  );
}

function Row({
  items,
  reverse,
}: {
  items: typeof TESTIMONIALS;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-5 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((t, i) => (
          <Card key={`${t.author}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Placeholder social proof"
          title="Early impressions."
          subtitle="Placeholder quotes for layout only — swap them in src/components/zappit/Testimonials.tsx."
        />
        <span id="testimonials-title" className="sr-only">
          Testimonials
        </span>
      </div>

      <div className="mt-12 flex flex-col gap-5">
        <Row items={ROW_A} />
        <Row items={ROW_B} reverse />
      </div>
    </section>
  );
}
