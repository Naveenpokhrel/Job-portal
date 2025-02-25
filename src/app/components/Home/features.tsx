"use client";

import React, { useState } from "react";
import Heading from "../Helper/Heading";
import Image from "next/image";
import { User, Mail, Link, FileText, MessageSquare } from "lucide-react";

const jobList = [
  {
    id: 1,
    title: "Software Engineering",
    company: "Skill Prompt",
    type: "Full-Time",
    location: "America",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721291.png",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Tech Corp",
    type: "Part-Time",
    location: "Canada",
    image: "https://cdn-icons-png.flaticon.com/512/3198/3198121.png",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Creative Minds",
    type: "Remote",
    location: "Germany",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Insight Analytics",
    type: "Full-Time",
    location: "Australia",
    image: "https://cdn-icons-png.flaticon.com/512/2732/2732718.png",
  },
  {
    id: 5,
    title: "Cybersecurity Specialist",
    company: "SecureTech",
    type: "Contract",
    location: "United Kingdom",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: 6,
    title: "AI/ML Engineer",
    company: "DeepAI Solutions",
    type: "Full-Time",
    location: "India",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721262.png",
  },
];

export default function Features() {
  const [isDisplayedForm, setIsDisplayedForm] = useState(false);

  function handleFormPopup() {
    setIsDisplayedForm(!isDisplayedForm);
  }

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
            <div>
              <Image src={job.image} alt={job.title} width={50} height={50} />
            </div>

            <div className="flex flex-col text-left flex-1">
              <h1 className="text-lg font-semibold">{job.title}</h1>
              <p className="text-gray-600">{job.company}</p>
              <div className="underline flex gap-4 text-blue-600">
                <p>{job.type}</p>
                <p>{job.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-xl cursor-pointer">❤️</p>
              <button
                onClick={handleFormPopup}
                className="bg-blue-600 text-white h-[40px] w-[100px] rounded-lg hover:bg-blue-800 transition-all"
              >
                Apply
              </button>
            </div>
          </div>
        ))}

        {isDisplayedForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-[90%] max-w-[600px] h-[65vh] rounded-lg p-6 shadow-lg flex flex-col">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold left-9 ">Apply for the Job</h1>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
                  onClick={handleFormPopup}
                >
                  Close
                </button>
              </div>

              <div className="overflow-y-auto flex-1 mt-4 pr-2">
                <form className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-4 text-gray-500" size={20} />
                    <input
                      type="text"
                      className="border-2 w-full h-[50px] pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Your Full Name"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-4 text-gray-500" size={20} />
                    <input
                      type="text"
                      className="border-2 w-full h-[50px] pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="relative">
                    <Link className="absolute left-3 top-4 text-gray-500" size={20} />
                    <input
                      type="text"
                      className="border-2 w-full h-[50px] pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Your Portfolio or GitHub Link"
                    />
                  </div>
                  <div className="relative">
                    <FileText className="absolute left-3 top-4 text-gray-500" size={20} />
                    <input
                      type="file"
                      name="resume"
                      placeholder="Upload Your CV"
                      accept=".pdf,.doc,.docx"
                      className="border-2 w-full h-[50px] pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pt-4"
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-gray-500" size={20} />
                    <textarea
                      name="Cover Letter"
                      placeholder="Enter Your Cover Letter"
                      className="border-2 w-full h-[120px] p-4 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button className="w-full h-[50px] bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Apply Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
