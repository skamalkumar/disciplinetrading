export const metadata = {
  title: "YouTube | Discipline Trading",
  description:
    "Watch free options trading tutorials in Telugu on Finworld Telugu YouTube channel by Kamal Kumar.",
};

const videos = [
  {
    id: "1",
    title: "Options Trading Basics in Telugu",
    description: "Learn the fundamentals of options trading in Telugu. Perfect for beginners.",
    youtubeId: "",
  },
];

export default function YoutubePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">
            Watch and Learn
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Finworld Telugu</h1>
          <p className="text-[#b0a898] text-lg max-w-2xl mb-8">
            Free options trading tutorials in Telugu by Kamal Kumar. Learn Nifty and BankNifty options strategies in your language.
          </p>
          <a
            href="https://www.youtube.com/@FinworldTelugu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c97a] transition-colors"
          >
            Subscribe on YouTube
          </a>
        </div>

        <div className="border-t border-[#c9a84c]/20 pt-12">
          <h2 className="text-2xl font-bold mb-8">Latest Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="border border-[#c9a84c]/20 p-6">
                <div className="bg-[#111] aspect-video flex items-center justify-center mb-4">
                  <p className="text-[#b0a898] text-sm text-center px-4">
                    Video coming soon. Subscribe to Finworld Telugu on YouTube.
                  </p>
                </div>
                <h3 className="font-bold mb-2">{video.title}</h3>
                <p className="text-sm text-[#b0a898]">{video.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-[#111] border border-[#c9a84c]/20 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe for Free Tutorials</h2>
          <p className="text-[#b0a898] mb-6">
            New videos every week on options trading strategies, Nifty analysis, and BankNifty setups in Telugu.
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

      </div>
    </div>
  );
}