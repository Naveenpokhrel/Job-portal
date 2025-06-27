import Heading from "../components/Helper/Heading";
import Image from "next/image";

export default function Center() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 px-6 md:px-16 py-12 min-h-screen">
      {/* Text Section */}
      <div className="flex flex-col max-w-[700px] w-full text-center md:text-left leading-relaxed">
        <Heading
          mainHeading="7,000+ Browse Jobs"
          subHeading="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there."
        />
        <button
          onClick={() => window.scroll(0, 0)}
          className="mt-6 bg-[#00BCD4] text-white h-[60px] w-[140px] rounded-lg transition-all self-center md:self-center hover:bg-cyan-600"
        >
          Search for Job
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[700px]">
        <Image
          src="/Image/image.png"
          alt="Job Search Illustration"
          width={700}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
