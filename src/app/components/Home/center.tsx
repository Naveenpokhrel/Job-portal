import Heading from "../Helper/Heading";
import Image from "next/image";

export default function Center() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6 h-[80vh]">
      <div className="flex flex-col max-w-[600px] w-full text-center md:text-left leading-relaxed">
        <Heading
          mainHeading="7,000+ Browse Jobs"
          subHeading="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there."
        />
        <button className="mt-4 bg-[#00BCD4] text-white h-[60px] w-[140px] ml-[220px] rounded-lg  transition-all">
          Search for Job
        </button>
      </div>

      <div className="w-full max-w-[700px] ml-20">
        <Image
          src="/Image/image.png"
          alt="Job Search Illustration"
          width={700}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}


