import Link from "next/link";

const credentials = [
  { value: "15+", label: "Years Experience" },
  { value: "M.Sc.", label: "Finance and Investment" },
  { value: "Lloyds", label: "Bank London" },
  { value: "Telugu", label: "Education Available" },
];

export default function HomePage() {
  return (
    <div className="bg-[#0a0a0a]">
      <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-6">
              Options Trading Education
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Trade With <span className="text-[#c9a84c]">Discipline.</span>
              <br />
              Profit With <span className="text-[#c9a84c]">Knowledge.</span>
            </h1>
            <p className="text-lg text-[#b0a898] leading-relaxed mb-10 max-w-2xl">
              Learn Nifty and BankNifty options strategies from Kamal Kumar.
              M.Sc. Finance and Investment, ex-Lloyds Bank London, with 15 years of market experience.
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

      <section className="py-16 border-y border-[#c9a84c]/20 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {credentials.map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-bold text-[#c9a84c] mb-1">{item.value}</div>
                <div className="text-sm text-[#b0a898] uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111111] border-t border-[#c9a84c]/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Learn in Telugu</h2>
          <p className="text-[#b0a898] mb-8">
            Watch free options trading tutorials in Telugu on our Finworld Telugu YouTube channel.
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

      <div className="bg-[#0a0a0a] py-4 px-6 text-center border-t border-[#c9a84c]/20">
        <p className="text-xs text-[#b0a898]">
          All content is for educational purposes only and does not constitute financial advice.
          Please consult a SEBI registered investment advisor before making any investment decisions.
        </p>
      </div>
    </div>
  );
}