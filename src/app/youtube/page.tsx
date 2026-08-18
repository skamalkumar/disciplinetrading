import Image from "next/image";
import { getYoutubeVideos } from "@/lib/youtube";
import CourseModules from "@/components/course/CourseModules";

export const metadata = {
  title:
    "Complete Options Trading Course in Telugu | 56 Lessons | Discipline Trading",
  description:
    "Learn options trading in Telugu through a structured 8-module course covering options fundamentals, ITM, ATM and OTM options, Greeks, implied volatility, option chain, open interest, PCR, Max Pain, expiry analysis, and advanced market direction.",
  keywords: [
    "options trading course in Telugu",
    "options trading in Telugu",
    "Nifty options trading",
    "Sensex options trading",
    "option chain analysis",
    "open interest analysis",
    "option Greeks",
    "implied volatility",
    "PCR",
    "Max Pain",
    "expiry analysis",
    "options trading education",
    "Telugu trading course",
  ],
};

const faqs = [
  {
    question: "What is this options trading course?",
    answer:
      "This is a structured 8-module options trading course covering everything from basic options concepts to advanced option-chain, open-interest, market-structure, and expiry analysis.",
  },
  {
    question: "Is the options trading course free?",
    answer:
      "Yes. The complete course is provided as free educational content through the Discipline Trading website and the FinWorld Telugu YouTube channel.",
  },
  {
    question: "Is this course available in Telugu?",
    answer:
      "Yes. The video lessons are presented in Telugu, while standard English financial terminology is used throughout the course curriculum to make the concepts easier to understand and apply.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Yes. Modules 1 to 3 are designed to establish the fundamentals before progressing into intermediate topics such as option Greeks, implied volatility, option-chain analysis, and open interest.",
  },
  {
    question: "What topics are covered in the course?",
    answer:
      "The course covers options fundamentals, ITM, ATM and OTM options, option Greeks, implied volatility, option-chain analysis, open interest, OI buildup and unwinding, PCR, Max Pain, market structure, expiry analysis, and advanced market-direction analysis.",
  },
  {
    question: "Does the course cover NIFTY and SENSEX options?",
    answer:
      "The concepts taught in the course can be applied to index options such as NIFTY and SENSEX, as well as other option contracts. Examples may vary between individual lessons.",
  },
  {
    question: "Does the course teach option-chain and open-interest analysis?",
    answer:
      "Yes. Module 6 focuses specifically on option-chain and open-interest analysis, while later modules build on those concepts to study market structure, expiry behaviour, and potential market direction.",
  },
  {
    question: "Where can I watch the lessons?",
    answer:
      "Each lesson in the curriculum links directly to its corresponding FinWorld Telugu YouTube video. You can expand any module above and select the lesson you want to watch.",
  },
];

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
            A structured 8-module options trading course designed to take
            you from the fundamentals to advanced market analysis. Learn
            options pricing, ITM, ATM and OTM options, Greeks, implied
            volatility, option-chain analysis, open interest, market
            structure, expiry analysis, and more.
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
            ABOUT THE COURSE
        ========================================================= */}
        <section className="mb-24">

          <div className="grid lg:grid-cols-3 gap-10 items-start">

            <div>
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
                About the Course
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Learn Options Trading Step by Step
              </h2>
            </div>


            <div className="lg:col-span-2 space-y-6 text-[#b0a898] text-lg leading-relaxed">

              <p>
                This free Telugu options trading course takes you through a
                structured learning path, starting with the fundamentals of
                options and progressing toward advanced market and
                option-chain analysis.
              </p>

              <p>
                You will learn how options work, why option premiums behave
                differently, how ITM, ATM and OTM options respond to price
                movements, and how option Greeks influence premium behaviour.
              </p>

              <p>
                The intermediate and advanced modules then introduce implied
                volatility, open interest, option-chain positioning, PCR,
                Max Pain, market structure, expiry analysis, and techniques
                for interpreting multiple market signals together.
              </p>

              <p>
                The goal is not simply to teach individual indicators, but
                to help you develop a structured framework for understanding
                the options market and managing decisions with greater
                discipline.
              </p>

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
              intermediate option analysis and advanced market-direction
              techniques.
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

            <div className="mb-10">

              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
                Learning Path
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Progress From Fundamentals to Advanced Analysis
              </h2>

            </div>


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
                  of options, option premiums, and ITM, ATM and OTM concepts
                  before moving into advanced analysis.
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
                  Learn option Greeks, implied volatility, option-chain
                  analysis, volume, open interest, and OI buildup and
                  unwinding.
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
                  Combine market structure, PCR, Max Pain, expiry analysis,
                  positioning, option-chain shifts, and advanced indicators
                  to study potential market direction.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            COURSE HIGHLIGHTS
        ========================================================= */}
        <section className="mb-24">

          <div className="mb-10">

            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
              What You Will Learn
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              From Options Basics to Market Direction
            </h2>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {[
              "Options Fundamentals",
              "ITM, ATM & OTM",
              "Option Greeks",
              "Implied Volatility",
              "Option Chain Analysis",
              "Open Interest",
              "PCR & Max Pain",
              "Expiry Analysis",
            ].map((topic) => (

              <div
                key={topic}
                className="border border-[#c9a84c]/20 bg-[#111] p-6 hover:border-[#c9a84c]/50 transition-colors"
              >

                <div className="text-[#c9a84c] text-xl mb-4">
                  ◆
                </div>

                <h3 className="font-semibold text-lg">
                  {topic}
                </h3>

              </div>

            ))}

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
            FAQ
        ========================================================= */}
        <section className="mb-24">

          <div className="mb-10">

            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
              Frequently Asked Questions
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Options Trading Course FAQ
            </h2>

          </div>


          <div className="max-w-4xl space-y-4">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="group border border-[#c9a84c]/20 bg-[#111]"
              >

                <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-6">

                  <h3 className="font-semibold text-lg">
                    {faq.question}
                  </h3>

                  <span className="text-[#c9a84c] text-xl shrink-0 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>

                </summary>


                <div className="px-6 pb-6">

                  <p className="text-[#b0a898] leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>

                </div>

              </details>

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

            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="#course"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#c9a84c] text-[#0a0a0a] font-bold text-sm uppercase tracking-widest hover:bg-[#e8c97a] transition-colors"
              >
                Explore the Course
              </a>

              <a
                href="https://www.youtube.com/@FinworldTelugu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#c9a84c] text-[#c9a84c] font-bold text-sm uppercase tracking-widest hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-colors"
              >
                Visit FinWorld Telugu
              </a>

            </div>

          </div>

        </section>

      </div>
    </div>
  );
}