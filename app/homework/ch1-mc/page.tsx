import Link from "next/link";
import hw from "@/content/hw-ch1-mc.json";
import { theme } from "@/lib/theme";

export const metadata = {
  title: `${hw.title} — Introduction to Statistics`,
};

const LETTERS = ["A", "B", "C", "D", "E", "F"];

export default function Ch1MultipleChoice() {
  let counter = 0;
  return (
    <main
      className="min-h-screen px-6 py-16 sm:px-12"
      style={{ background: theme.background, color: theme.foreground, fontFamily: theme.font }}
    >
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm opacity-70 hover:opacity-100" style={{ color: theme.accent }}>
          ← Back to course home
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">{hw.title}</h1>
        <p className="mt-3 text-lg opacity-80">{hw.subtitle}</p>
        <p className="mt-2 text-sm opacity-70">{hw.instructions}</p>

        <div className="mt-12 space-y-12">
          {hw.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-medium" style={{ color: theme.accent }}>
                {section.heading}
              </h2>
              <ol className="mt-4 space-y-7">
                {section.questions.map((q) => {
                  counter += 1;
                  return (
                    <li key={counter} className="flex gap-4">
                      <span className="shrink-0 font-semibold opacity-80" style={{ minWidth: "2.25rem" }}>
                        {counter}.
                      </span>
                      <div className="flex-1">
                        <p className="leading-relaxed opacity-95">{q.prompt}</p>
                        <ol className="mt-3 space-y-2">
                          {q.choices.map((choice, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="shrink-0 font-medium opacity-70" style={{ minWidth: "1.5rem" }}>
                                {LETTERS[i]}.
                              </span>
                              <span className="opacity-90">{choice}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
