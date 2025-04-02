import JobData from "../../../../../data";
import React from "react";
import Link from "next/link";
import JobCard from "../../Helper/JobCard";

const AllJobs = () => {
  return (
    <div className="mt-12 w-[80%] mx-auto mb-12">
      <div className="mb-[2rem]">
        <h1 className="font-semibold">Show Result ({JobData.length})</h1>
      </div>

      <div className="space-y-8">
        {JobData.map((job) => {
          return (
            <Link href={`/components/job/jobdetails/${job.id}`} key={job.id}>
              <JobCard job={job} />
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllJobs;
