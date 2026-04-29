import Link from "next/link";
import { theme } from "@/lib/theme";

export const metadata = {
  title: "Chapter 2 Activity — Descriptive Statistics in Excel",
};

const DATA: number[] = [
  5, 8, 10, 10, 12, 14, 15, 15, 15, 15,
  18, 20, 20, 22, 25, 25, 28, 30, 30, 32,
  35, 38, 40, 45, 48, 50, 55, 65, 78, 90,
];

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.92em]">
      {children}
    </code>
  );
}

function Formula({ children }: { children: React.ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm">
      {children}
    </pre>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-medium" style={{ color: theme.accent }}>
        {number}. {title}
      </h2>
      <div className="space-y-3 leading-relaxed opacity-95">{children}</div>
    </section>
  );
}

export default function Ch2ExcelActivity() {
  return (
    <main
      className="min-h-screen px-6 py-16 sm:px-12"
      style={{ background: theme.background, color: theme.foreground, fontFamily: theme.font }}
    >
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm opacity-70 hover:opacity-100" style={{ color: theme.accent }}>
          ← Back to course home
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          Chapter 2 Activity — Descriptive Statistics in Excel
        </h1>
        <p className="mt-3 text-lg opacity-80">
          A hands-on activity that uses Excel to compute every descriptive statistic from
          Chapter 2 on a single 30-student data set.
        </p>

        <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide opacity-70">Learning objectives</p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-sm opacity-90">
            <li>Compute the mean, median, and mode in Excel and decide which is most appropriate for the data.</li>
            <li>Compute the five-number summary, IQR, range, variance, and standard deviation.</li>
            <li>Build a histogram and a box-and-whisker plot, and identify outliers.</li>
            <li>Compute z-scores and use them to compare values.</li>
            <li>Describe the shape of a distribution (symmetric, right-skewed, left-skewed) and explain which measures are <em>resistant</em> to outliers.</li>
          </ul>
        </div>

        <div className="mt-12 space-y-12">
          <Section number="1" title="The Data Set">
            <p>
              Researchers at TWU surveyed a sample of <strong>30 students</strong> and recorded each
              student&apos;s one-way commute to campus, in minutes.
            </p>

            <p>
              <a
                href="/data/ch2-commute-times.csv"
                className="rounded border px-3 py-1 text-sm hover:opacity-80"
                style={{ borderColor: theme.accent, color: theme.accent }}
                download
              >
                Download CSV
              </a>
            </p>

            <p className="text-sm opacity-80">
              Open the file in Excel. The data is in column B (rows 2–31) under the header
              <Code>Commute (min)</Code>. If you prefer to type the numbers yourself, here they are:
            </p>

            <div className="grid grid-cols-5 gap-2 rounded border border-white/10 bg-white/5 p-3 text-center font-mono text-sm sm:grid-cols-10">
              {DATA.map((v, i) => (
                <span key={i} className="opacity-90">
                  {v}
                </span>
              ))}
            </div>
            <p className="text-sm opacity-70">n = {DATA.length} commute times, in minutes.</p>
          </Section>

          <Section number="2" title="Set Up the Worksheet">
            <p>In Excel, paste (or type) the data so that:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Cell <Code>B1</Code> contains the header <Code>Commute (min)</Code>
              </li>
              <li>
                Cells <Code>B2:B31</Code> contain the 30 values
              </li>
            </ul>
            <p>
              Below the data (say, starting at row 34), set up a small &ldquo;Summary&rdquo; table
              with two columns: a label in column A and a formula in column B. You will fill it in
              over the next several parts.
            </p>
          </Section>

          <Section number="3" title="Measures of Center (§2.5)">
            <p>In your summary table, enter these formulas:</p>
            <Formula>{`Mean   =AVERAGE(B2:B31)
Median =MEDIAN(B2:B31)
Mode   =MODE.SNGL(B2:B31)
Count  =COUNT(B2:B31)`}</Formula>
            <p>
              <strong>Record</strong> the mean, median, and mode. The mean uses the symbol{" "}
              <Code>x̄</Code> for a sample (and <Code>μ</Code> for a population) — which one applies
              here?
            </p>
            <p className="text-sm opacity-80">
              <strong>Stop and think:</strong> compare the mean and the median. Which is larger? What
              does the difference suggest about the shape of the distribution?
            </p>
          </Section>

          <Section number="4" title="Five-Number Summary and IQR (§2.3 – §2.4)">
            <p>Add the following formulas to your summary table:</p>
            <Formula>{`Min  =MIN(B2:B31)
Q1   =QUARTILE.INC(B2:B31, 1)
Q2   =QUARTILE.INC(B2:B31, 2)        (this should equal MEDIAN)
Q3   =QUARTILE.INC(B2:B31, 3)
Max  =MAX(B2:B31)
IQR  =QUARTILE.INC(B2:B31, 3) - QUARTILE.INC(B2:B31, 1)`}</Formula>
            <p>
              Write out the <strong>five-number summary</strong> in the order{" "}
              <Code>Min, Q1, Median, Q3, Max</Code> and interpret <strong>Q1</strong> and{" "}
              <strong>Q3</strong> in plain English (e.g., &ldquo;25% of students commute less
              than&hellip;&rdquo;).
            </p>
            <p>
              <strong>Outlier check.</strong> A value is a potential outlier if it falls below{" "}
              <Code>Q1 − 1.5·IQR</Code> or above <Code>Q3 + 1.5·IQR</Code>. Add these to your table:
            </p>
            <Formula>{`Lower fence =Q1 - 1.5*IQR
Upper fence =Q3 + 1.5*IQR`}</Formula>
            <p>Which observations in the data set, if any, qualify as outliers?</p>
          </Section>

          <Section number="5" title="Measures of Spread (§2.7)">
            <p>Add the spread formulas:</p>
            <Formula>{`Range          =MAX(B2:B31) - MIN(B2:B31)
Sample variance     s²  =VAR.S(B2:B31)
Sample std. dev.    s   =STDEV.S(B2:B31)
Population variance σ²  =VAR.P(B2:B31)
Population std. dev σ   =STDEV.P(B2:B31)`}</Formula>
            <p>
              Even though the same 30 numbers are in column B, <Code>VAR.S</Code> divides by{" "}
              <Code>n − 1</Code> while <Code>VAR.P</Code> divides by <Code>N</Code>. Note which one
              you would report if these 30 students are a <strong>sample</strong> from a larger
              population (the usual situation).
            </p>
            <p>
              <strong>Verify</strong> that <Code>variance = (standard deviation)²</Code> by squaring
              your <Code>s</Code> and confirming you get <Code>s²</Code>.
            </p>
          </Section>

          <Section number="6" title="Histogram (§2.2)">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                Highlight <Code>B1:B31</Code> (include the header).
              </li>
              <li>
                Click <Code>Insert</Code> → <Code>Insert Statistic Chart</Code> →{" "}
                <Code>Histogram</Code>.
              </li>
              <li>
                Right-click the horizontal axis → <Code>Format Axis</Code> → set{" "}
                <Code>Bin width</Code> to <Code>10</Code>. (Try a few values: 5, 10, 15. How does the
                shape change?)
              </li>
            </ol>
            <p>
              <strong>Describe the shape.</strong> Is it symmetric, right-skewed, or left-skewed? Is
              there one peak (unimodal) or more (bimodal)? Where is the bulk of the data, and where
              are the unusual values?
            </p>
          </Section>

          <Section number="7" title="Box-and-Whisker Plot (§2.4)">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                Highlight <Code>B1:B31</Code>.
              </li>
              <li>
                Click <Code>Insert</Code> → <Code>Insert Statistic Chart</Code> →{" "}
                <Code>Box and Whisker</Code>.
              </li>
              <li>Excel will draw the box from Q1 to Q3, the median line inside the box, whiskers to the most extreme non-outlier values, and any outliers as dots.</li>
            </ol>
            <p>
              <strong>Compare</strong> the boxplot with your fence calculations from §4. Do the dots
              in the chart match the values you flagged as outliers? Hover (or click) on the box to
              read off Excel&apos;s reported Q1, median, and Q3 — they should match your{" "}
              <Code>QUARTILE.INC</Code> values.
            </p>
          </Section>

          <Section number="8" title="Z-Scores">
            <p>
              The z-score of a value x is <Code>z = (x − x̄) / s</Code>, the number of standard
              deviations x lies above (positive) or below (negative) the mean.
            </p>
            <p>
              Suppose a 35-minute commute looks &ldquo;long&rdquo; to one student and a 12-minute
              commute looks &ldquo;short&rdquo; to another. Compute their z-scores. In Excel, use a
              cell reference for your mean and standard deviation:
            </p>
            <Formula>{`Mean cell    e.g. B34       (= AVERAGE(B2:B31))
Std dev cell e.g. B38       (= STDEV.S(B2:B31))

z for 35 min   =(35 - $B$34) / $B$38
z for 12 min   =(12 - $B$34) / $B$38
z for 90 min   =(90 - $B$34) / $B$38     (the longest commute in the sample)`}</Formula>
            <p>
              Or use Excel&apos;s built-in <Code>STANDARDIZE</Code> function:
            </p>
            <Formula>{`=STANDARDIZE(35, $B$34, $B$38)`}</Formula>
            <p>
              Which of those three commute times is &ldquo;most unusual&rdquo; — i.e., farthest from
              the mean in standard-deviation units?
            </p>
          </Section>

          <Section number="9" title="Resistance to Outliers (§2.5 – §2.6)">
            <p>
              In a free cell, copy the data set and replace the value <Code>90</Code> with{" "}
              <Code>250</Code> — imagine one student now has a much longer commute. Recompute the
              mean, median, standard deviation, and IQR on the modified data.
            </p>
            <p>Fill in this comparison table in your worksheet:</p>
            <div className="overflow-x-auto rounded border border-white/10">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="border-b border-white/10 px-3 py-2 text-left">Statistic</th>
                    <th className="border-b border-white/10 px-3 py-2 text-left">Original (90)</th>
                    <th className="border-b border-white/10 px-3 py-2 text-left">Modified (250)</th>
                    <th className="border-b border-white/10 px-3 py-2 text-left">Change?</th>
                  </tr>
                </thead>
                <tbody>
                  {["Mean", "Median", "Standard deviation (s)", "IQR"].map((stat) => (
                    <tr key={stat}>
                      <td className="border-b border-white/10 px-3 py-2">{stat}</td>
                      <td className="border-b border-white/10 px-3 py-2 opacity-50">—</td>
                      <td className="border-b border-white/10 px-3 py-2 opacity-50">—</td>
                      <td className="border-b border-white/10 px-3 py-2 opacity-50">—</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Which statistics changed a lot, and which barely moved? This is what Chapter 2 calls
              the difference between <strong>resistant</strong> (median, quartiles, IQR) and{" "}
              <strong>not resistant</strong> (mean, standard deviation, range, variance) measures.
            </p>
          </Section>

          <Section number="10" title="Reflection (turn in your answers)">
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                Report the mean, median, mode, range, sample standard deviation, IQR, and the
                five-number summary for the original data set.
              </li>
              <li>
                Describe the shape of the distribution from your histogram. Does the relationship
                between the mean and the median agree with the shape you described?
              </li>
              <li>
                List any outliers identified by your boxplot and by the 1.5·IQR rule. Do the two
                methods agree?
              </li>
              <li>
                Looking at your z-scores, was the 90-minute commute more than 2 standard deviations
                from the mean? More than 3? What does that suggest?
              </li>
              <li>
                If you had to summarize this data set with <em>one</em> measure of center and{" "}
                <em>one</em> measure of spread, which would you choose, and why?
              </li>
              <li>
                Paste a screenshot (or printout) of your worksheet showing your summary statistics,
                histogram, and boxplot.
              </li>
            </ol>
          </Section>
        </div>
      </div>
    </main>
  );
}
