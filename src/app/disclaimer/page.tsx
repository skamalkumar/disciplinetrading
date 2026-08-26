import Link from "next/link";

export const metadata = {
  title: "Disclaimer | Discipline Trading",
  description:
    "Discipline Trading disclaimer covering educational content, investment risks, options and derivatives, market analysis, and financial information.",
};

export default function DisclaimerPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen pt-24 pb-20 text-[#e8e0d0]">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-[#c9a84c] hover:text-[#e8c97a] transition-colors mb-8"
        >
          ← Back to Home
        </Link>

        <header className="mb-12">
          <span className="text-xs text-[#c9a84c] uppercase tracking-widest">
            Discipline Trading
          </span>
          <h1 className="text-white text-4xl md:text-5xl font-bold mt-3 mb-4">
            Disclaimer
          </h1>
          <p className="text-[#b0a898]">
            Last updated: August 26, 2026
          </p>
        </header>

        <article className="prose prose-invert max-w-none">
          <section>
            <h2>1. Educational Purpose Only</h2>
            <p>
              The information published on Discipline Trading is provided for
              educational and informational purposes only. Our articles, videos,
              examples, market commentary, option-chain analysis, charts, and
              other materials are intended to help readers understand financial
              markets and trading concepts.
            </p>
            <p>
              Nothing published on this website should be interpreted as
              personalised investment advice, financial advice, trading advice,
              legal advice, tax advice, or a recommendation to buy, sell, hold,
              or otherwise transact in any security or derivative.
            </p>
          </section>

          <section>
            <h2>2. No Investment Recommendation</h2>
            <p>
              References to individual securities, companies, indices, ETFs,
              futures, options, strategies, price levels, technical indicators,
              Open Interest, Put-Call Ratio, volatility, or other market data are
              provided for educational discussion and analysis.
            </p>
            <p>
              Examples involving NIFTY and SENSEX are illustrative and should not
              be treated as instructions to enter or exit a position.
            </p>
          </section>

          <section>
            <h2>3. Trading and Investment Risk</h2>
            <p>
              Investing and trading involve risk. Derivatives such as futures and
              options can involve substantial losses and may not be suitable for
              every investor.
            </p>
            <p>
              Options strategies can involve complex risks, including loss of
              capital, leverage, volatility risk, liquidity risk, time decay,
              assignment or exercise risk where applicable, and losses that may
              differ significantly from the initial premium or margin committed.
            </p>
            <p>
              You should understand the risks of any product or strategy before
              participating in the market and should consider your financial
              circumstances and risk tolerance.
            </p>
          </section>

          <section>
            <h2>4. Market Data and Analysis</h2>
            <p>
              Market prices, Open Interest, volumes, volatility readings,
              technical indicators, calculations, charts, and other market data
              may change rapidly and may contain errors, omissions, delays, or
              differences between data sources.
            </p>
            <p>
              Historical data and analysis do not guarantee future results.
              Market conditions can change materially after an article or video
              has been published.
            </p>
          </section>

          <section>
            <h2>5. No Guarantee of Accuracy or Results</h2>
            <p>
              We make reasonable efforts to provide useful and accurate
              educational information, but we do not guarantee that every
              statement, calculation, market level, data point, forecast, or
              example is complete, accurate, current, or error-free.
            </p>
            <p>
              We also do not guarantee any particular investment return,
              trading result, profit, or avoidance of loss from using information
              published on this website.
            </p>
          </section>

          <section>
            <h2>6. Personal Responsibility</h2>
            <p>
              Any decision to invest or trade is made solely by the individual
              reader or viewer. You are responsible for conducting your own
              research and evaluating whether a particular investment or trading
              decision is appropriate for your circumstances.
            </p>
            <p>
              Where appropriate, seek advice from a suitably qualified and
              authorised professional, including a SEBI-registered investment
              adviser for personalised investment advice.
            </p>
          </section>

          <section>
            <h2>7. No Broker or Trading Platform Relationship</h2>
            <p>
              Unless explicitly stated otherwise, references to brokers,
              exchanges, financial institutions, platforms, data providers, or
              other third parties do not mean that Discipline Trading is
              affiliated with, endorsed by, or acting on behalf of those
              organisations.
            </p>
          </section>

          <section>
            <h2>8. Third-Party Information and Links</h2>
            <p>
              Discipline Trading may reference or link to third-party websites,
              tools, platforms, research, data sources, or services. We do not
              control those third-party resources and do not guarantee their
              accuracy, availability, security, or suitability.
            </p>
            <p>
              A link or reference does not constitute an endorsement or
              recommendation.
            </p>
          </section>

          <section>
            <h2>9. Advertisements and Affiliates</h2>
            <p>
              Discipline Trading may display advertisements or, in the future,
              participate in affiliate or other commercial arrangements. If such
              arrangements are introduced, they will not change our obligation to
              present educational content responsibly.
            </p>
            <p>
              Advertisements or affiliate relationships should not be interpreted
              as a recommendation to purchase a product or service.
            </p>
          </section>

          <section>
            <h2>10. Testimonials and Examples</h2>
            <p>
              Any examples, hypothetical trades, calculations, simulations,
              historical scenarios, or educational case studies are illustrative.
              They do not represent actual results unless explicitly stated.
            </p>
            <p>
              Individual experiences may differ substantially from hypothetical
              or historical examples.
            </p>
          </section>

          <section>
            <h2>11. Regulatory Status</h2>
            <p>
              The presence of educational financial content on this website does
              not by itself mean that every article, video, or market commentary
              constitutes regulated investment advice.
            </p>
            <p>
              Users should not assume that Discipline Trading is acting as their
              personal investment adviser merely because financial topics are
              discussed on the website.
            </p>
          </section>

          <section>
            <h2>12. Changes to This Disclaimer</h2>
            <p>
              We may update this Disclaimer when our website, content, services,
              or applicable requirements change. The latest version will be
              published on this page.
            </p>
          </section>

          <section>
            <h2>13. Contact</h2>
            <p>
              If you have questions about this Disclaimer, please use our{" "}
              <Link href="/contact">Contact page</Link>.
            </p>
          </section>

          <section className="not-prose mt-10 p-5 border border-[#c9a84c]/20 bg-[#111]">
            <p className="text-sm text-[#b0a898]">
              <strong className="text-[#e8e0d0]">Important:</strong> This
              Disclaimer does not eliminate the risks associated with investing
              or trading. Please understand the product, strategy, costs, and
              risks before making any financial decision.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
