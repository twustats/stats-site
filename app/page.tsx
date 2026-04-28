import home from "@/content/home.json";
import { theme } from "@/lib/theme";

export default function Home() {
  return (
    <main
      className="min-h-screen px-6 py-16 sm:px-12"
      style={{ background: theme.background, color: theme.foreground, fontFamily: theme.font }}
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">{home.title}</h1>
        <p className="mt-3 text-lg opacity-80">{home.subtitle}</p>

        <div className="mt-12 space-y-12">
          {home.units.map((unit) => (
            <section key={unit.name}>
              <h2 className="text-2xl font-medium" style={{ color: theme.accent }}>
                {unit.name}
              </h2>
              <p className="mt-2 leading-relaxed opacity-80">{unit.blurb}</p>

              <ul className="mt-5 divide-y divide-white/10 rounded-lg border border-white/10">
                {unit.chapters.map((ch) => (
                  <li
                    key={ch.label}
                    className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-medium">{ch.label}</span>
                    <span className="flex gap-3 text-sm">
                      <a
                        href={ch.notes}
                        target="_blank"
                        rel="noopener"
                        className="rounded border border-white/20 px-3 py-1 hover:opacity-80"
                        style={{ color: theme.accent }}
                      >
                        Notes
                      </a>
                      <a
                        href={ch.key}
                        target="_blank"
                        rel="noopener"
                        className="rounded border border-white/20 px-3 py-1 hover:opacity-80"
                      >
                        Answer Key
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
