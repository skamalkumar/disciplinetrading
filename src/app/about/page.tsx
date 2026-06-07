import Image from "next/image";

export const metadata = {
  title: "About S. Kamal Kumar | Options Trading Educator | Discipline Trading",
  description:
    "S. Kamal Kumar is an options trading educator based in Hyderabad with 15+ years of experience. Learn Nifty and Sensex options trading in English and Telugu.",
};

const faqs = [
  {
    q: "Who is S. Kamal Kumar?",
    a: "S. Kamal Kumar is an options trading educator based in Hyderabad, India, with over 15 years of experience in financial markets. He holds an M.Sc. in Finance and Investment and has professional experience with Lloyds Banking Group in London.",
  },
  {
    q: "What is Discipline Trading?",
    a: "Discipline Trading is an options trading education platform focused on practical, risk-aware education for Indian retail traders. It covers Nifty options, Sensex options, weekly expiry strategies, and disciplined risk management — without providing buy or sell signals.",
  },
  {
    q: "Is options trading education available in Telugu?",
    a: "Yes. S. Kamal Kumar runs Finworld Telugu, a YouTube channel dedicated to options trading education in the Telugu language. Topics include Nifty options analysis, Sensex weekly expiry strategies, India VIX interpretation, and options concepts from beginner to advanced level.",
  },
  {
    q: "Does Kamal Kumar provide buy or sell signals?",
    a: "No. Discipline Trading is purely educational and does not provide buy or sell signals, trading tips, or investment advice. All content is for educational purposes only. Please consult a SEBI registered investment advisor before making any investment decisions.",
  },
  {
    q: "Where can I watch S. Kamal Kumar's options trading videos?",
    a: "You can watch free options trading education videos on the Finworld Telugu YouTube channel at youtube.com/@FinworldTelugu. Videos cover Nifty, Sensex, India VIX, and options strategies explained in Telugu.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "S. Kamal Kumar",
  jobTitle: "Options Trading Educator",
  description:
    "Options trading educator with 15+ years of experience in financial markets. M.Sc. Finance and Investment. Former Lloyds Banking Group professional.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  sameAs: ["https://www.youtube.com/@FinworldTelugu"],
  worksFor: {
    "@type": "Organization",
    name: "Discipline Trading",
    url: "https://www.disciplinetrading.com",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="bg-[#0a0a0a] min-h-screen pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">

          {/* Hero Section */}
          <div className="mb-16">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">
              About
            </p>

            <div className="grid md:grid-cols-[220px_1fr] gap-10 items-center">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/kamal-kumar1.png"
                  alt="Kamal Kumar - Options Trading Educator Hyderabad India"
                  width={320}
                  height={400}
                  priority
                  className="rounded-xl border border-[#c9a84c]/30 shadow-lg object-cover"
                />
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  S. Kamal Kumar
                </h1>
                <p className="text-[#c9a84c] text-lg font-medium mb-4">
                  Options Trading Educator & Finance Professional
                </p>
                <p className="text-[#b0a898] text-lg leading-relaxed">
                  Helping Indian retail traders understand Nifty and Sensex
                  options through practical education, disciplined risk
                  management, and real-world market experience — in both English
                  and Telugu.
                </p>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "M.Sc.", label: "Finance & Investment" },
              { value: "Lloyds", label: "Banking Group" },
              { value: "Telugu", label: "Education Available" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#111] border border-[#c9a84c]/20 p-6 text-center rounded-lg"
              >
                <div className="text-3xl font-bold text-[#c9a84c] mb-2">
                  {item.value}
                </div>
                <div className="text-sm uppercase tracking-wide text-[#b0a898]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Content Sections */}
          <div className="space-y-12 text-[#b0a898] leading-relaxed">

            {/* Background */}
            <section>
              <h2 className="text-2xl font-bold text-[#c9a84c] mb-4">
                My Background
              </h2>
              <p className="mb-4">
                I am S. Kamal Kumar, an options trading educator based in
                Hyderabad, India. I hold an M.Sc. in Finance and Investment and
                have more than 15 years of experience in financial markets,
                equities, derivatives, and investment analysis.
              </p>
              <p className="mb-4">
                During my time with Lloyds Banking Group in London, I gained
                valuable exposure to professional financial environments, risk
                management practices, operational controls, and institutional
                processes. These experiences helped shape the disciplined market
                approach that I now teach to retail traders.
              </p>
              <p>
                Over the years I have worked with traders at all experience
                levels — from beginners learning call and put basics to
                experienced traders refining their Nifty weekly expiry
                strategies. My focus has always been on practical, risk-aware
                options trading education suited to Indian market conditions.
              </p>
            </section>

            {/* Why Discipline Trading */}
            <section>
              <h2 className="text-2xl font-bold text-[#c9a84c] mb-4">
                Why I Started Discipline Trading
              </h2>
              <p className="mb-4">
                After years of working in finance and studying the markets, I
                realized that many retail traders struggle not because of a lack
                of intelligence, but because they lack access to structured,
                practical, and honest trading education.
              </p>
              <p>
                Most trading content available online focuses on shortcuts,
                unrealistic expectations, or strategy hopping. I created
                Discipline Trading to provide Indian retail traders with a more
                professional, realistic, and disciplined approach to Nifty and
                Sensex options trading — free from misleading claims and
                unrealistic promises.
              </p>
            </section>

            {/* My Approach */}
            <section>
              <h2 className="text-2xl font-bold text-[#c9a84c] mb-4">
                My Approach
              </h2>
              <p className="mb-4">
                Many traders spend years searching for the perfect indicator or
                strategy. In my experience, long-term success in options trading
                comes from discipline, risk management, position sizing, and
                emotional control — not from constantly chasing new systems or
                reacting to every market move.
              </p>
              <p>
                Markets are unpredictable, but disciplined execution is within
                our control. Whether you are trading Nifty weekly expiries or
                studying Sensex options structures, a simple strategy followed
                consistently and with proper risk management will outperform a
                complex strategy executed emotionally.
              </p>
            </section>

            {/* Finworld Telugu */}
            <section>
              <h2 className="text-2xl font-bold text-[#c9a84c] mb-4">
                Finworld Telugu
              </h2>
              <p className="mb-4">
                I also run Finworld Telugu, a YouTube channel dedicated to
                options trading education in the Telugu language. My mission is
                to make quality financial education accessible to
                Telugu-speaking traders across India and globally.
              </p>
              <p className="mb-6">
                If you are looking for options trading education in Telugu,
                Finworld Telugu covers topics like Nifty options analysis,
                Sensex weekly expiry strategies, India VIX interpretation, and
                basic to advanced options concepts — all explained clearly in
                Telugu.
              </p>
              <a
                href="https://www.youtube.com/@FinworldTelugu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c97a] transition-colors rounded"
              >
                Visit Finworld Telugu
              </a>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#c9a84c] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-[#111] border border-[#c9a84c]/20 rounded-lg group"
                  >
                    <summary className="px-6 py-4 cursor-pointer text-white font-medium list-none flex items-center justify-between hover:text-[#c9a84c] transition-colors">
                      {faq.q}
                      <span className="text-[#c9a84c] ml-4 text-lg group-open:rotate-45 transition-transform duration-200 inline-block">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-5 text-[#b0a898] leading-relaxed border-t border-[#c9a84c]/10 pt-4">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-20 bg-[#111] border border-[#c9a84c]/20 rounded-lg p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Learn Options Trading?
            </h2>
            <p className="text-[#b0a898] mb-8 max-w-2xl mx-auto">
              Explore free articles, Nifty and Sensex market insights, and
              Telugu educational content designed to help traders build
              knowledge, discipline, and confidence in the markets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/blog"
                className="px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c97a] transition-colors rounded"
              >
                Read Articles
              </a>
              <a
                href="https://www.youtube.com/@FinworldTelugu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-bold text-sm uppercase tracking-widest hover:bg-[#c9a84c]/10 transition-colors rounded"
              >
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-4 border border-[#c9a84c]/20 bg-[#111] rounded">
            <p className="text-xs text-[#b0a898]">
              All content on this website is for educational purposes only and
              does not constitute financial advice. Please consult a SEBI
              registered investment advisor before making any investment
              decisions.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}