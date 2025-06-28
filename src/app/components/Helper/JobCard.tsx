import { Job } from "../../../../data";
import Image from "next/image";
import React from "react";
import { BiMoney } from "react-icons/bi";
import { FaMapLocation } from "react-icons/fa6";

interface Props {
  job: Job;
}

const JobCard = ({ job }: Props) => {
  return (
    <div className="p-4 mb-6 relative border-2 cursor-pointer hover:scale-105 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
        {/* Image */}
        <div className="flex justify-center sm:block">
          <Image src={job?.image} alt={job.title} width={50} height={50} />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-[16px] sm:text-[17px] font-semibold mb-2">
            {job?.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-10 space-y-2 sm:space-y-0">
            {/* Location */}
            <div className="flex items-center space-x-2">
              <FaMapLocation className="w-[0.8rem] h-[0.8rem] text-pink-700" />
              <p className="text-[14px] text-black font-semibold text-opacity-60">
                {job?.location}
              </p>
            </div>

            {/* Salary */}
            <div className="flex items-center space-x-2">
              <BiMoney className="w-[0.8rem] h-[0.8rem] text-pink-700" />
              <p className="text-[14px] text-black font-semibold text-opacity-60">
                {job?.salary}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="text-[10px] sm:text-[14px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-green-400">
              {job?.jobtype}
            </div>
            <div className="text-[10px] sm:text-[14px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-red-400">
              Private
            </div>
            <div className="text-[10px] sm:text-[14px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-blue-400">
              Urgent
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
