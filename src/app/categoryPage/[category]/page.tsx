"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { CiLocationOn, CiClock1 } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "@/app/Home/footer";

interface JobDetail {
  id: number;
  title: string;
  image: string;
  description: string;
  dates: string;
  vacancy: string;
  salary: string;
  locations: string;
  nature: string;
}

const detailsForPage: JobDetail[] = [
  // ...same data remains unchanged...
];

export default function CategoryPage() {
  const params = useParams();
  const category =
    params && typeof params === "object" && "category" in params
      ? Array.isArray(params["category"])
        ? params["category"][0]
        : params["category"]
      : undefined;
  // Removed unused popupForm state

  const filteredObject = detailsForPage.find(
    (detail) => detail.title.replace(/\s/g, "") === category
  );

  useEffect(() => {
    // No need to set index since it's unused
  }, [category]);

  if (!filteredObject) {
    return <div className="text-center text-2xl py-10">Job Not Found</div>;
  }

  return (
    <>
      <div className="bg-[#F5F7FA] relative flex flex-col justify-center items-center px-2 sm:px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-[2vw] w-full max-w-screen-xl">
          <div className="flex flex-col w-full lg:w-[45vw] bg-white">
            <div className="flex flex-col sm:flex-row w-full h-auto sm:h-[6vw] bg-white items-center sm:items-start">
              <div
                className="h-[6vw] w-[6vw] sm:h-[6vw] sm:w-[6vw] bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${filteredObject.image})` }}
              ></div>
              <div className="text-center sm:text-left text-[1.4vw] font-semibold pt-4 sm:pt-9 w-full sm:w-[20vw]">
                <div>{filteredObject.title}</div>

                <div className="font-light text-[1vw] flex flex-col sm:flex-row items-center sm:items-start">
                  <div className="flex justify-center gap-[.1vw] items-center mt-2 sm:mt-0 h-[2vw] w-auto sm:w-[10vw]">
                    <span className="text-[1vw]">
                      <CiLocationOn />
                    </span>
                    <h1 className="w-full sm:w-[16vw]"> California, USA</h1>
                  </div>
                  <div className="flex justify-center items-center h-[2vw] w-auto sm:w-[8vw] mt-2 sm:mt-0 ml-0 sm:ml-[2vw]">
                    <span className="text-[1vw]">
                      <CiClock1 />
                    </span>

                    <h1 className="w-full sm:w-[6vw]"> Part-Time</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-2 w-full"></div>
            <div className="font-bold text-2xl p-5">
              <h2>Job description</h2>
            </div>

            <div className="min-h-[14vw] text-blue text-[1.2vw] opacity-70  p-5">
              {filteredObject.description}
            </div>
            <div className="">
              <div>
                <h2 className="font-bold text-2xl p-2">Responsibility</h2>
                <ul className="list-disc list-inside min-h-[10vw] text-blue text-[1.2vw] opacity-70  p-5 text-gray-700 mt-2">
                  <li>Experience in relevant areas.</li>
                  <li>Knowledge of commercial activities.</li>
                  <li>
                    Leadership, analytical, and problem-solving abilities.
                  </li>
                  <li>Expertise in IAS/ IFRS, Tax laws, and VAT.</li>
                </ul>
              </div>

              {/* Qualifications Section */}
              <div className="">
                <h2 className="font-bold text-2xl p-2">Qualifications</h2>
                <ul className="list-disc list-inside min-h-[10vw] text-blue text-[1.2vw] opacity-70  p-5 text-gray-700 mt-2">
                  <li>Minimum Bachelor’s degree in a related field.</li>
                  <li>Experience in a similar role is preferred.</li>
                  <li>Strong communication and organizational skills.</li>
                  <li>Proficiency in industry-standard tools.</li>
                </ul>
              </div>

              {/* Benefits Section */}
              <div className="">
                <h2 className="font-bold text-2xl p-5">Benefits</h2>
                <ul className="list-disc list-inside min-h-[14vw] text-blue text-[1.2vw] opacity-70  p-5 text-gray-700 mt-2">
                  <li>Competitive salary package.</li>
                  <li>Health and wellness programs.</li>
                  <li>Opportunities for professional growth.</li>
                  <li>Flexible work environment.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1vw] w-full lg:w-[435px] justify-start items-center ">
            <div className="w-full bg-white shadow-lg rounded-lg p-6 flex flex-col">
              {/* Job Summary Title */}
              <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-4 text-center">
                Job Summary
              </h2>

              {/* Job Details */}
              <div className="mt-8 p-4 space-y-2 text-xl leading-loose text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold w-[10vw]">
                    📅 Published on:
                  </span>
                  <span className="text-left w-[10vw] ml-[1.1vw]">
                    {filteredObject.dates}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold w-[10vw]">👥 Vacancy:</span>
                  <span className="text-left w-[10vw] ml-[1.1vw]">
                    {filteredObject.vacancy}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold w-[10vw]">💰 Salary:</span>
                  <span className="text-left w-[10vw] ml-[1.1vw]">
                    {filteredObject.salary}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold w-[10vw]">📍 Location:</span>
                  <span className="text-left w-[10vw] ml-[1.1vw]">
                    {filteredObject.locations}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold w-[10vw]">📝 Job Nature:</span>
                  <span className="text-left w-[10vw] ml-[1.1vw]">
                    {filteredObject.nature}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex shadow-md bg-white text-black h-auto sm:h-[75px] w-full sm:w-[435px] text-center justify-center items-center p-4">
              <div className="flex gap-4">
                <p className="text-xl">share it</p>
                <div className="flex gap-5 text-gray-400">
                  <FaTwitter className="cursor-pointer hover:text-green-300 transition-all" />
                  <FaFacebookF className="cursor-pointer hover:text-green-300 transition-all" />
                  <FaInstagram className="cursor-pointer hover:text-green-300 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
