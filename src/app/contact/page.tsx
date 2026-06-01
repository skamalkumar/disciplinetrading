export const metadata = {
  title: "Contact | Discipline Trading",
  description: "Get in touch with Kamal Kumar for options trading education queries.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-[#b0a898] text-lg">
            Have a question about options trading? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="border border-[#c9a84c]/20 p-6">
            <h3 className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
              YouTube
            </h3>
            <p className="text-[#b0a898] text-sm mb-4">
              Watch free tutorials and ask questions in the comments on our Telugu channel.
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

          <div className="border border-[#c9a84c]/20 p-6">
            <h3 className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
              Location
            </h3>
            <p className="text-[#b0a898] text-sm">
              Hyderabad, Telangana, India
            </p>
          </div>

        </div>

        <div className="border border-[#c9a84c]/20 p-8">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm text-[#c9a84c] uppercase tracking-widest mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#111] border border-[#c9a84c]/20 px-4 py-3 text-[#e8e0d0] placeholder-[#b0a898] focus:outline-none focus:border-[#c9a84c] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-[#c9a84c] uppercase tracking-widest mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#111] border border-[#c9a84c]/20 px-4 py-3 text-[#e8e0d0] placeholder-[#b0a898] focus:outline-none focus:border-[#c9a84c] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-[#c9a84c] uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Your message here"
                className="w-full bg-[#111] border border-[#c9a84c]/20 px-4 py-3 text-[#e8e0d0] placeholder-[#b0a898] focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
              />
            </div>

            <button
              type="button"
              className="w-full px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c97a] transition-colors"
            >
              Send Message
            </button>
          </div>
        </div>

        <div className="mt-8 p-4 border border-[#c9a84c]/20 bg-[#111]">
          <p className="text-xs text-[#b0a898]">
            All content is for educational purposes only and does not constitute financial advice.
            Please consult a SEBI registered investment advisor before making any investment decisions.
          </p>
        </div>

      </div>
    </div>
  );
}
