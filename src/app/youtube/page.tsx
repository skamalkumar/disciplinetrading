import Image from "next/image";
import { getYoutubeVideos } from "@/lib/youtube";
import CourseModules from "@/components/course/CourseModules";

export const metadata = {
  title:
    "Complete Options Trading Course in Telugu | 56 Lessons | Discipline Trading",
  description:
    "Learn options trading in Telugu with S. Kamal Kumar through a structured 8-module course covering options fundamentals, Greeks, implied volatility, option chain, open interest, market structure, expiry analysis, and advanced options concepts.",
};

export default async function YoutubePage() {
  const videos = await getYoutubeVideos();

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-24 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* =========================================================
            HERO SECTION
        ========================================================= */}
        <section className="mb-20">

          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Complete Options Trading Course
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl">
            Learn Options Trading{" "}
            <span className="text-[#c9a84c]">in Telugu.</span>
          </h1>

          <p className="text-[#b0a898] text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            A structured options trading course designed to take you from
            the fundamentals to advanced market analysis. Learn options,
            Greeks, implied volatility, option chain analysis, open interest,
            market structure, expiry analysis, and more.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#course"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c97a] transition-colors"
            >
              Start the Course
            </a>

            <a
              href="https://www.youtube.com/@FinworldTelugu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-bold text-sm uppercase tracking-widest hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-colors"
            >
              Visit YouTube
            </a>

          </div>

        </section>


        {/* =========================================================
            COURSE STATS
        ========================================================= */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-[#c9a84c]/20 mb-20">

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#c9a84c]">
              8
            </div>

            <div className="text-sm text-[#b0a898] uppercase tracking-wider mt-2">
              Modules
            </div>
          </div>


          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#c9a84c]">
              56
            </div>

            <div className="text-sm text-[#b0a898] uppercase tracking-wider mt-2">
              Lessons
            </div>
          </div>


          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#c9a84c]">
              Telugu
            </div>

            <div className="text-sm text-[#b0a898] uppercase tracking-wider mt-2">
              Education
            </div>
          </div>


          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#c9a84c]">
              Free
            </div>

            <div className="text-sm text-[#b0a898] uppercase tracking-wider mt-2">
              Learning
            </div>
          </div>

        </section>


        {/* =========================================================
            COURSE CURRICULUM
        ========================================================= */}
        <section
          id="course"
          className="mb-24 scroll-mt-24"
        >

          <div className="mb-12">

            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
              Course Curriculum
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Complete Options Trading Course
            </h2>

            <p className="text-[#b0a898] text-lg max-w-3xl leading-relaxed">
              Follow a structured learning path from beginner concepts to
              advanced options and market analysis.
            </p>

          </div>


          {/* Expandable Course Modules */}
          <CourseModules />

        </section>


        {/* =========================================================
            LEARNING PATH
        ========================================================= */}
        <section className="mb-24">

          <div className="border border-[#c9a84c]/20 bg-[#111] p-8 md:p-12">

            <div className="grid md:grid-cols-3 gap-10">

              {/* Beginner */}
              <div>

                <div className="text-[#c9a84c] text-sm font-bold uppercase tracking-widest mb-3">
                  01 — 03
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  Beginner
                </h3>

                <p className="text-[#b0a898] leading-relaxed">
                  Start with the fundamentals and build a clear understanding
                  of how options work before moving into advanced concepts.
                </p>

              </div>


              {/* Intermediate */}
              <div>

                <div className="text-[#c9a84c] text-sm font-bold uppercase tracking-widest mb-3">
                  04 — 06
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  Intermediate
                </h3>

                <p className="text-[#b0a898] leading-relaxed">
                  Learn Greeks, volatility, option pricing behaviour, option
                  chains, and open interest analysis.
                </p>

              </div>


              {/* Advanced */}
              <div>

                <div className="text-[#c9a84c] text-sm font-bold uppercase tracking-widest mb-3">
                  07 — 08
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  Advanced
                </h3>

                <p className="text-[#b0a898] leading-relaxed">
                  Combine market structure, expiry analysis, positioning,
                  and advanced option indicators to study market direction.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            LATEST VIDEOS
        ========================================================= */}
        <section className="mb-24">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">

            <div>

              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
                From the Channel
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Latest Videos
              </h2>

            </div>


            <a
              href="https://www.youtube.com/@FinworldTelugu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest hover:text-[#e8c97a] transition-colors"
            >
              View YouTube Channel →
            </a>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {videos.map((video: any) => (

              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-[#c9a84c]/20 bg-[#111] overflow-hidden hover:border-[#c9a84c]/60 transition-all duration-300"
              >

                {/* Thumbnail */}
                <div className="overflow-hidden">

                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={480}
                    height={270}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                </div>


                {/* Video Information */}
                <div className="p-5">

                  <h3 className="font-semibold text-white line-clamp-2 mb-3 group-hover:text-[#c9a84c] transition-colors">
                    {video.title}
                  </h3>

                  <p className="text-sm text-[#b0a898]">
                    {new Date(video.publishedAt).toLocaleDateString()}
                  </p>

                </div>

              </a>

            ))}

          </div>

        </section>


        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section>

          <div className="bg-[#111] border border-[#c9a84c]/20 p-10 md:p-14 text-center">

            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-[0.25em] mb-4">
              Start Learning
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Build Knowledge Before Taking Risk
            </h2>

            <p className="text-[#b0a898] max-w-2xl mx-auto mb-8 leading-relaxed">
              Learn options trading step by step through a structured
              8-module course covering the concepts, tools, and market
              analysis techniques used throughout the program.
            </p>

            <a
              href="#course"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c97a] transition-colors"
            >
              Explore the Course
            </a>

          </div>

        </section>

      </div>
    </div>
  );
}