import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading, Reveal } from "./Reveal";
import { CONTACT_EMAIL } from "@/config/site";

export const FAQS = [
  {
    q: "What is Zappit?",
    a: "Zappit is a campus food delivery app. You can browse nearby campus outlets, order your meal in seconds, and get it delivered inside or around your campus.",
  },
  {
    q: "Where can I use Zappit?",
    a: "Zappit is built for campus zones — hostels, academic blocks, libraries and the outlets around them. Availability depends on the outlets live in your campus.",
  },
  {
    q: "How do I download the Zappit app?",
    a: "Tap any Download button on this site to get the Zappit Android APK directly, or scan the QR code with your phone.",
  },
  {
    q: "Is Zappit available on Android?",
    a: "Yes. Zappit is currently available for Android as a direct APK download from this website.",
  },
  {
    q: "Why does Android ask for APK installation permission?",
    a: "Android asks for permission whenever an app is installed outside the Play Store. Allowing installation from your browser lets the Zappit APK install normally.",
  },
  {
    q: "Is downloading Zappit from this website safe?",
    a: "Yes, as long as you download it from the official Zappit website. Avoid third-party APK mirrors — they may modify the app.",
  },
  {
    q: "How do I update the Zappit app?",
    a: "Return to this website and download the latest APK. Installing it over your current version keeps your data intact.",
  },
];

const MID = Math.ceil(FAQS.length / 2);
const COLUMNS = [FAQS.slice(0, MID), FAQS.slice(MID)];

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          subtitle="Everything about downloading, installing and using Zappit on your campus."
        />

        <Reveal className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-6">
          {COLUMNS.map((col, colIndex) => (
            <Accordion
              key={colIndex}
              type="single"
              collapsible
              className="flex w-full flex-col gap-3"
            >
              {col.map((f, i) => {
                const number = colIndex * MID + i + 1;
                return (
                  <AccordionItem
                    key={f.q}
                    value={`item-${colIndex}-${i}`}
                    className="overflow-hidden rounded-2xl glass px-5"
                  >
                    <AccordionTrigger className="gap-4 py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                      <span className="flex items-center gap-3.5">
                        <span
                          aria-hidden
                          className="grid size-7 shrink-0 place-items-center rounded-full bg-primary/12 text-[11px] font-bold text-primary"
                        >
                          {String(number).padStart(2, "0")}
                        </span>
                        {f.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pl-[2.65rem] text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          ))}
        </Reveal>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-subtle">
            Still stuck?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
