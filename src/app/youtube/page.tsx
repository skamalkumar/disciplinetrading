import Image from "next/image";
import { getYoutubeVideos } from "@/lib/youtube";

export const metadata = {
  title: "Finworld Telugu YouTube Channel | Discipline Trading",
  description:
    "Learn Nifty and Sensex options trading in Telugu with S. Kamal Kumar. Free tutorials on options trading, risk management, market psychology, and weekly market analysis.",
};

export default async function YoutubePage() {
  const videos = await getYoutubeVideos();

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section */}
        <div className="mb-16">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">
            Watch and Learn
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Finworld Telugu
          </h1>

          <p className="text-[#b0a898] text-lg max-w-3xl mb-8 leading-relaxed">
            Free Telugu options trading education from Kamal Kumar.
            Learn Nifty, Sensex, risk management, option selling,
            market psychology, and practical trading strategies through
            easy-to-understand videos.
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-[#c9a84c]/20 mb-16">

          <div className="text-center">
            <div className="text-4xl font-bold text-[#c9a84c]">32+</div>
            <div className="text-sm text-[#b0a898] uppercase tracking-wider">
              Videos
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-[#c9a84c]">Telugu</div>
            <div className="text-sm text-[#b0a898] uppercase tracking-wider">
              Education
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-[#c9a84c]">15+</div>
            <div className="text-sm text-[#b0a898] uppercase tracking-wider">
              Years Experience
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-[#c9a84c]">Free</div>
            <div className="text-sm text-[#b0a898] uppercase tracking-wider">
              Learning
            </div>
          </div>

        </div>

        {/* Latest Videos */}
        <div>
          <h2 className="text-3xl font-bold mb-10">
            Latest Videos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {videos.map((video: any) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-[#c9a84c]/20 bg-[#111] overflow-hidden hover:border-[#c9a84c]/50 transition-all duration-300"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={480}
                  height={270}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="p-5">
                  <h3 className="font-semibold text-white line-clamp-2 mb-3">
                    {video.title}
                  </h3>

                  <p className="text-sm text-[#b0a898]">
                    {new Date(video.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </a>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-[#111] border border-[#c9a84c]/20 p-10 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Start Learning Today
          </h2>

          <p className="text-[#b0a898] max-w-2xl mx-auto mb-8">
            Whether you're a beginner or an experienced trader,
            Finworld Telugu provides practical options trading education
            focused on discipline, risk management, and consistency.
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