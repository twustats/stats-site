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
        <div className="mt-12 space-y-10">
          {home.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-2xl font-medium" style={{ color: theme.accent }}>
                {s.heading}
              </h2>
              <p className="mt-2 leading-relaxed opacity-90">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
