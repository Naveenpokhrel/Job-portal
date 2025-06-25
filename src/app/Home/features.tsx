import React from "react";
import Heading from "../components/Helper/Heading";
import Link from "next/link";
import JobData from "../../../data";
import JobCard from "../components/Helper/JobCard";
import Image from "next/image";

const FeaturedJobs = () => {
  return (
    <div className="pt-20 pb-12">
      <Heading
        mainHeading="Featured Jobs"
        subHeading="Know your worth and find the job that qualify your life"
      />
      <div className="mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {JobData.slice(0, 6).map((job) => {
          return (
            <Link href={`/components/job/jobdetails/${job.id}`} key={job.id}>
              <JobCard job={job} />
            </Link>
          );
        })}
      </div>
      <Link href="/components/job/alljobs">
        <div className="text-center mt-[3rem]">
          <button className="px-8 py-2 font-semibold hover:bg-blue-900 transition-all duration-300 bg-blue-700 rounded-lg text-white">
            View All Jobs
          </button>
        </div>
      </Link>
    </div>
  );
};
export default FeaturedJobs;
