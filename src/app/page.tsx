import Link from "next/link";

const credentials = [
  { value: "15+", label: "Years Experience" },
  { value: "M.Sc.", label: "Finance & Investment" },
  { value: "Lloyds", label: "Bank London" },
  { value: "Telugu", label: "Education Available" },
];

export default function HomePage() {
  return (
    <div className="bg-[#0a0a0a]">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-5xl">

            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-6">
              Futures & Options Education
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              Trade With{" "}
              <span className="text-[#c9a84c]">Discipline.</span>
              <br />
              Profit With{" "}
              <span className="text-[#c9a84c]">Knowledge.</span>
            </h1>

            <p className="text-lg text-[#b0a898] leading-relaxed mb-10 max-w-3xl">
              Learn Nifty and Sensex futures and options from
              S. Kamal Kumar, M.Sc. Finance & Investment,
              former Lloyds Banking Group London professional,
              with 15+ years of experience in financial markets,
              equities and derivatives.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c97a] transition-colors"
              >
                Read Articles
              </Link>

              <a
                href="https://www.youtube.com/@FinworldTelugu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-bold text-sm uppercase tracking-widest hover:bg-[#c9a84c]/10 transition-colors"
              >
                Watch in Telugu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section className="py-20 border-t border-[#c9a84c]/20 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">
              Free Structured Learning
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Complete Options Trading Course in Telugu
            </h2>

            <p className="text-[#b0a898] max-w-3xl mx-auto text-lg">
              Start from the basics and learn options trading step by step.
              Designed for beginners and aspiring professional traders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">

            <div className="border border-[#c9a84c]/20 p-8 bg-[#111]">
              <h3 className="text-2xl font-bold text-[#c9a84c] mb-6">
                Module 1: Foundations
              </h3>

              <ul className="space-y-4 text-[#b0a898]">
                <li>✓ What is Options Trading?</li>
                <li>✓ Call Option vs Put Option</li>
                <li>✓ ITM, ATM & OTM Explained</li>
                <li>✓ Why Beginners Lose Money</li>
              </ul>
            </div>

            <div className="border border-[#c9a84c]/20 p-8 bg-[#111]">
              <h3 className="text-2xl font-bold text-[#c9a84c] mb-6">
                Coming Next
              </h3>

              <ul className="space-y-4 text-[#b0a898]">
                <li>→ Option Chain Analysis</li>
                <li>→ Open Interest & PCR</li>
                <li>→ Option Greeks</li>
                <li>→ Risk Management</li>
              </ul>
            </div>

          </div>

          <div className="text-center">
            <a
              href="https://www.youtube.com/@FinworldTelugu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c97a] transition-colors"
            >
              Start Learning Free
            </a>
          </div>

        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 border-y border-[#c9a84c]/20 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {credentials.map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-bold text-[#c9a84c] mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-[#b0a898] uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telugu Section */}
      <section className="py-20 bg-[#111111] border-t border-[#c9a84c]/20">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-white mb-4">
            Learn in Telugu
          </h2>

          <p className="text-[#b0a898] mb-8">
            Watch free futures and options tutorials in Telugu on our
            Finworld Telugu YouTube channel.
          </p>

          <a
            href="https://www.youtube.com/@FinworldTelugu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c97a] transition-colors"
          >
            Visit Finworld Telugu
          </a>

        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-[#0a0a0a] py-4 px-6 text-center border-t border-[#c9a84c]/20">
        <p className="text-xs text-[#b0a898]">
          All content is for educational purposes only and does not constitute
          financial advice. Please consult a SEBI registered investment advisor
          before making any investment decisions.
        </p>
      </div>

    </div>
  );
}
