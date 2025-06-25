import JobCard from "@/app/components/Helper/JobCard";
import JobData from "../../../../../../data";
import React from "react";
import { getServerSession } from "next-auth";
import { authOPtions } from "../../../../../../auth";
import ApplyButton from "@/app/components/Helper/applybutton";

const JobDetails = async ({ params }: { params: { id: string } }) => {
  const singleJob = JobData.find((job) => job.id.toString() == params.id);
  const session = await getServerSession(authOPtions);

  return (
    <div className="mt-20 mb-12">
      <div className="sm:flex items-center justify-between w-[80%] mx-auto">
        <div className="flex-[0.7]">
          <JobCard job={singleJob!} />
        </div>
        {session && <ApplyButton />}
      </div>
    </div>
  );
};
export default JobDetails;
