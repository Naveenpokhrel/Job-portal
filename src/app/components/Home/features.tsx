import React from "react";
import Heading from "../Helper/Heading";
import Image from "next/image";

// Sample job data (can be fetched from an API)
const jobList = [
  {
    id: 1,
    title: "Software Engineering",
    company: "Skill Prompt",
    type: "Full-Time",
    location: "America",
    image: "/Image/c2.png",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Tech Corp",
    type: "Part-Time",
    location: "Canada",
    image: "/Image/c2.png",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Creative Minds",
    type: "Remote",
    location: "Germany",
    image: "/Image/c2.png",
  },
  {
    id: 4,
    title: "Software Engineering",
    company: "Skill Prompt",
    type: "Full-Time",
    location: "America",
    image: "/Image/c2.png",
  },
  {
    id: 5,
    title: "Software Engineering",
    company: "Skill Prompt",
    type: "Full-Time",
    location: "America",
    image: "/Image/c2.png",
  },
  {
    id: 6,
    title: "Software Engineering",
    company: "Skill Prompt",
    type: "Full-Time",
    location: "America",
    image: "/Image/c2.png",
  },
];

const Features = () => {
  return (
    <div className="text-center p-6 h-[80vh]">
      <Heading
        mainHeading="Featured Jobs"
        subHeading="Hand-picked jobs featured depending on popularity and benefits"
      />

      <div className="flex flex-wrap justify-center gap-12 mt-10">
        {jobList.map((job) => (
          <div
            key={job.id}
            className="max-w-[700px] w-full p-4 flex flex-wrap items-center justify-between gap-4 rounded-lg shadow-md"
          >
            {/* Job Image */}
            <div>
              <Image src={job.image} alt={job.title} width={50} height={50} />
            </div>

            {/* Job Info */}
            <div className="flex flex-col text-left flex-1">
              <h1 className="text-lg font-semibold">{job.title}</h1>
              <p className="text-gray-600">{job.company}</p>
              <div className="underline flex gap-4 text-blue-600">
                <p>{job.type}</p>
                <p>{job.location}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <p className="text-xl cursor-pointer">❤️</p>
              <button className="bg-blue-600 text-white h-[40px] w-[100px] rounded-lg hover:bg-blue-800 transition-all">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
