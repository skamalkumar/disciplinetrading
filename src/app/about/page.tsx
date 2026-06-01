export const metadata = {
  title: "About | Discipline Trading",
  description:
    "Learn about Kamal Kumar. M.Sc. Finance and Investment, ex-Lloyds Bank London, 15 years of options trading experience.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kamal Kumar</h1>
          <p className="text-[#b0a898] text-lg">
            Options Trading Educator and Finance Professional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "M.Sc.", label: "Finance and Investment" },
            { value: "Lloyds", label: "Bank London" },
          ].map((item) => (
            <div key={item.label} className="border border-[#c9a84c]/20 p-6 text-center">
              <div className="text-3xl font-bold text-[#c9a84c] mb-2">{item.value}</div>
              <div className="text-sm text-[#b0a898] uppercase tracking-wide">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8 text-[#b0a898] leading-relaxed">

          <div>
            <h2 className="text-2xl font-bold text-[#c9a84c] mb-4">My Background</h2>
            <p className="mb-4">
              I am Kamal Kumar, an options trading educator based in Hyderabad, India. I hold an M.Sc. in Finance and Investment and have over 15 years of experience in financial markets.
            </p>
            <p>
              I previously worked with Lloyds Bank in London, where I gained deep insights into how institutional traders think and operate. This experience gave me a unique perspective on markets that most retail traders never get to see.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#c9a84c] mb-4">Why I Started Discipline Trading</h2>
            <p className="mb-4">
              After years of working in institutional finance, I noticed that most retail traders in India lack access to quality education. Most content available is either too basic or filled with misleading information.
            </p>
            <p>
              I started Discipline Trading to bridge that gap. My goal is to provide honest, practical, and academically sound options trading education to Indian traders in both English and Telugu.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#c9a84c] mb-4">Finworld Telugu</h2>
            <p className="mb-4">
              I also run Finworld Telugu, a YouTube channel dedicated to options trading education in the Telugu language. My goal is to make quality financial education accessible to Telugu speaking traders across India.
            </p>
            <a
              href="https://www.youtube.com/@FinworldTelugu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c97a] transition-colors"
            >
              Visit Finworld Telugu
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#c9a84c] mb-4">My Approach</h2>
            <p>
              I believe that discipline is the most important trait a trader can develop. Markets are unpredictable, but a disciplined approach to risk management, strategy, and psychology can make the difference between consistent profits and consistent losses.
            </p>
          </div>

        </div>

        <div className="mt-12 p-4 border border-[#c9a84c]/20 bg-[#111]">
          <p className="text-xs text-[#b0a898]">
            All content on this website is for educational purposes only and does not constitute financial advice.
            Please consult a SEBI registered investment advisor before making any investment decisions.
          </p>
        </div>

      </div>
    </div>
  );
}