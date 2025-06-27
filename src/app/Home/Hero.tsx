"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import JobData from "../../../data";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const jobRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const index = JobData.findIndex((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (index !== -1 && jobRefs.current[index]) {
      jobRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Job not found!");
    }
  };

  return (
    <section className="pt-20 pb-12 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#05264e] leading-tight">
              The <span className="text-blue-500">Easiest Way</span> <br /> To
              Get Your New Job
            </h1>

            <form onSubmit={handleSubmit} className="relative mt-8 max-w-md">
              <input
                type="text"
                placeholder="Search for job"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-14 rounded-lg border-2 border-gray-300 px-4 pr-32 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 w-28 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
              >
                Search
              </button>
            </form>
          </div>

          <div className="hidden lg:block">
            <Image
              src="/Image/hero.svg"
              alt="Job search illustration"
              width={700}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
