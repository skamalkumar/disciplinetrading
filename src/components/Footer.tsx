import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "YouTube", href: "/youtube" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#c9a84c]/20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12">

          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-semibold text-[#c9a84c] mb-4">
              Discipline Trading
            </h3>

            <p className="text-sm text-[#b0a898] leading-relaxed max-w-sm">
              Learn Nifty and Sensex options trading from S. Kamal Kumar,
              M.Sc. Finance & Investment, with 15+ years of market experience
              in equities, derivatives, and financial markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#c9a84c] mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#b0a898] hover:text-[#c9a84c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Telugu Section */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#c9a84c] mb-4">
              Also in Telugu
            </h4>

            <p className="text-sm text-[#b0a898] leading-relaxed mb-4">
              Watch free Nifty and Sensex options trading tutorials in Telugu
              on the Finworld Telugu YouTube channel.
            </p>

            <a
              href="https://www.youtube.com/@FinworldTelugu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#c9a84c] hover:text-[#e8c97a] transition-colors font-medium"
            >
              Visit Finworld Telugu →
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#c9a84c]/10 mt-12 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <p className="text-xs text-[#b0a898]">
              © {year} Discipline Trading. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs">
              <Link
                href="/privacy"
                className="text-[#b0a898] hover:text-[#c9a84c] transition-colors"
              >
                Privacy Policy
              </Link>

              <span className="text-[#c9a84c]/30">|</span>

              <Link
                href="/disclaimer"
                className="text-[#b0a898] hover:text-[#c9a84c] transition-colors"
              >
                Disclaimer
              </Link>
            </div>

          </div>

          {/* Educational Disclaimer */}
          <p className="text-xs text-[#b0a898] text-center mt-5 max-w-3xl mx-auto leading-relaxed">
            Content is provided for educational purposes only and does not
            constitute investment or financial advice. Please consult a SEBI
            registered investment advisor before making investment decisions.
          </p>

        </div>

      </div>
    </footer>
  );
}