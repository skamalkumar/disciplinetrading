import Link from "next/link";

const quickLinks = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "YouTube", href: "/youtube" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#c9a84c]/20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-lg text-[#c9a84c] mb-3">Discipline Trading</h3>
            <p className="text-sm text-[#b0a898] leading-relaxed">
              Expert futures and options education by S. Kamal Kumar. M.Sc. Finance and Investment, ex-Lloyds Bank London.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#c9a84c] mb-3">Quick Links</h4>
            <ul className="space-y-2">
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

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#c9a84c] mb-3">Also in Telugu</h4>
            <p className="text-sm text-[#b0a898] mb-3">
              Watch futures and options tutorials in Telugu on Finworld Telugu YouTube channel.
            </p>
            <a
              href="https://www.youtube.com/@FinworldTelugu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#c9a84c] hover:text-[#e8c97a] transition-colors"
            >
              Finworld Telugu
            </a>
          </div>

        </div>

        <div className="border-t border-[#c9a84c]/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#b0a898]">
            {year} Discipline Trading. All rights reserved.
          </p>
          <p className="text-xs text-[#b0a898] text-center">
            For educational purposes only. Not financial advice. Consult a SEBI registered advisor.
          </p>
        </div>

      </div>
    </footer>
  );
}