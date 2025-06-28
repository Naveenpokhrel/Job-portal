"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const AboutHighlight = () => {
  const router = useRouter();

  const handlePostJobClick = () => {
    router.push("/signup"); 
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-6">
          <p className="text-pink-600 uppercase tracking-wide font-semibold">
            What we are doing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            24k+ Talented People Are Getting Hired Through Us
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            Our platform is trusted by professionals across industries — from
            software engineers to marketers, designers to data analysts. We&#39;ve
            created a recruitment ecosystem that helps job seekers land
            meaningful roles while giving companies access to pre-qualified and
            passionate talent.
          </p>

          <p className="text-gray-600 text-base leading-relaxed">
            With built-in smart filters, resume analysis, and job matching
            algorithms,
            <strong className="text-blue-600"> Job Portal </strong> stands out
            as a reliable and fast-growing community of career-driven
            individuals. Employers get access to easy-to-use dashboards and job
            performance insights, while candidates can apply in just one click.
          </p>

          <p className="text-gray-600 text-base leading-relaxed">
            Since our inception, we&#39;ve helped thousands of people step into
            better jobs and companies find better hires. Whether you&#39;re starting
            your career or scaling your team — we&#39;re here to accelerate your
            journey.
          </p>

          <button
            onClick={handlePostJobClick}
            className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-700 transition-all duration-300"
          >
            Post a Job
          </button>
        </div>

        {/* Right Side: Image with Label */}
        <div className="relative w-full h-auto">
          <Image
            src="/Image/professional Man.jpg"
            alt="Professional Man"
            width={600}
            height={600}
            className="rounded-lg object-cover"
          />
          <div className="absolute bottom-[-20px] left-6 bg-blue-800 text-white px-6 py-4 rounded-lg shadow-lg text-center">
            <p className="text-sm font-medium uppercase">Since</p>
            <p className="text-2xl font-bold">1994</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHighlight;
