"use client";
import { useEffect, useState } from "react";
import React from "react";
import {motion} from "framer-motion"
import { useParams } from "next/navigation";
import { CiLocationOn, CiClock1 } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "@/app/components/Home/footer";

const detailsForPage = [
  {
    id: 1,
    title: "Accounting",
    description:
      "Stay on top of your business finances with accurate accounting solutions. Track expenses, generate reports, and ensure compliance effortlessly.",
    image:
      "https://img.freepik.com/free-vector/accounting-concept-illustration_114360-3584.jpg",
    summary: "hello",
    dates: "10 Jan, 2024",
    vacancy: "3 Positions",
    salary: "40k - 80k/y",
    locations: "New York, USA",
    nature: "Full-time",
  },
  {
    id: 2,
    title: "Marketing",
    description:
      "Enhance your business outreach with effective marketing strategies. Utilize SEO, social media, and branding to maximize customer engagement.",
    image:
      "https://img.freepik.com/free-vector/digital-marketing_52683-10094.jpg",
    summary: "hello",
    dates: "15 Feb, 2024",
    vacancy: "5 Positions",
    salary: "35k - 75k/y",
    locations: "Los Angeles, USA",
    nature: "Part-time",
  },
  {
    id: 3,
    title: "SoftwareDevelopment",
    description:
      "Develop innovative software solutions and applications with modern programming frameworks. Build scalable, efficient, and robust systems.",
    image:
      "https://img.freepik.com/free-vector/software-development-programming-languages-coding-concept_335657-4304.jpg",
    summary: "hello",
    dates: "12 Mar, 2024",
    vacancy: "2 Positions",
    salary: "50k - 120k/y",
    locations: "California, USA",
    nature: "Full-time",
  },
  {
    id: 4,
    title: "HumanResources",
    description:
      "Manage employee relations, recruitment, and company policies effectively. Ensure a healthy work environment and efficient HR operations.",
    image:
      "https://img.freepik.com/free-vector/human-resources-management-business-teamwork-concept_1284-52824.jpg",
    summary: "hello",
    dates: "20 Mar, 2024",
    vacancy: "1 Position",
    salary: "45k - 90k/y",
    locations: "Chicago, USA",
    nature: "Remote",
  },
  {
    id: 5,
    title: "GraphicDesign",
    description:
      "Create stunning visual content for brands, businesses, and digital platforms. Utilize advanced design tools and techniques.",
    image:
      "https://img.freepik.com/free-vector/graphic-designer-workplace-flat-illustration_1284-62197.jpg",
    summary: "hello",
    dates: "05 Apr, 2024",
    vacancy: "2 Positions",
    salary: "30k - 70k/y",
    locations: "Texas, USA",
    nature: "Contract",
  },
  {
    id: 6,
    title: "DataScience",
    description:
      "Leverage data analytics and machine learning to drive business insights. Work with big data, AI models, and predictive analytics.",
    image:
      "https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-2835.jpg",
    summary: "hello",
    dates: "18 Apr, 2024",
    vacancy: "4 Positions",
    salary: "60k - 150k/y",
    locations: "Boston, USA",
    nature: "Full-time",
  },
  {
    id: 7,
    title: "Cybersecurity",
    description:
      "Ensure security protocols and protect digital infrastructure against cyber threats. Develop and implement security strategies.",
    image:
      "https://img.freepik.com/free-vector/cyber-security-concept-illustration_114360-4291.jpg",
    summary: "hello",
    dates: "25 Apr, 2024",
    vacancy: "2 Positions",
    salary: "55k - 130k/y",
    locations: "Seattle, USA",
    nature: "On-site",
  },
  {
    id: 8,
    title: "BusinessAnalysis",
    description:
      "Analyze market trends, financial reports, and business performance to provide actionable insights and drive strategic decisions.",
    image:
      "https://img.freepik.com/free-vector/business-analysis-concept-illustration_114360-914.jpg",
    summary: "hello",
    dates: "30 Apr, 2024",
    vacancy: "3 Positions",
    salary: "50k - 110k/y",
    locations: "Denver, USA",
    nature: "Hybrid",
  },
  {
    id: 9,
    title: "CustomerSupport",
    description:
      "Handle customer inquiries, resolve issues, and ensure a seamless support experience across multiple channels.",
    image:
      "https://img.freepik.com/free-vector/customer-support-illustration_114360-1624.jpg",
    summary: "hello",
    dates: "05 May, 2024",
    vacancy: "6 Positions",
    salary: "28k - 50k/y",
    locations: "Miami, USA",
    nature: "Remote",
  },
  {
    id: 10,
    title: "ProjectManagement",
    description:
      "Plan, execute, and oversee projects efficiently. Ensure timely delivery, resource allocation, and risk management.",
    image:
      "https://img.freepik.com/free-vector/project-management-concept-illustration_114360-7246.jpg",
    summary: "hello",
    dates: "10 May, 2024",
    vacancy: "3 Positions",
    salary: "65k - 140k/y",
    locations: "San Francisco, USA",
    nature: "Full-time",
  },
];

export default function CategoryPage({
  params,
}: {
  params: { category: React.ReactNode };
}) {
  const category = params.category;
  const [index, setIndex] = useState(0);
  let detailToShow;

  let filteredObject = detailsForPage.filter(
    (det) => category === det.title.trim()
  );

  useEffect(() => {
    console.log("FilterdredV1 ", filteredObject);
    if (filteredObject.length) {
      setIndex(filteredObject[0].id - 1);
    }
  }, []);

  const [displayNotification, setDisplayNotification] = useState("none");
const [popupForm,setPopupForm] = useState(false)

  function handleClickNotification(){
      if(!popupForm){
        setDisplayNotification("flex")
        setPopupForm(true)
      }else{
        setPopupForm(false)
      
        setDisplayNotification("none")
      
      }
  detailToShow = detailsForPage[index];

  console.log("index ", detailToShow);

  // if (params.category === "Accounting") {
  //   detailToShow = detailsForPage[0];
  // } else if (params.category === "Marketing") {
  //   detailToShow = detailsForPage[1];
  // } else if (params.category === "SoftwareDevelopment") {
  //   detailToShow = detailsForPage[2];
  // } else if (params.category === "HumanResources") {
  //   detailToShow = detailsForPage[3];
  // } else if (params.category === "GraphicDesign") {
  //   detailToShow = detailsForPage[4];
  // } else if (params.category === "SoftwareDevelopment") {
  //   detailToShow = detailsForPage[5];
  // } else detailToShow = detailsForPage[6];
  function handleUpdateCVCategory() {
    alert("Updated");
  }
  return (
    <>
      <div className="bg-[#F5F7FA] relative flex flex-col justify-center items-center ">
        <div className="flex gap-[2vw] mt-[4vw]">
          <div className="flex flex-col w-[45vw] bg-[white] ">
            <div className="w-[45vw] flex h-[6vw] bg-[white] ">
              <div
                className="h-[6vw] w-[6vw] bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${detailToShow.image})` }}
              ></div>
              <div className="h-[2vw] w-[20vw] text-[1.4vw]  text-center font-semibold pt-9">
                <div>{detailToShow.title}</div>

                <div className="font-light text-[1vw]  flex  items-center ">
                  <div className="ml-[2vw] flex justify-center gap-[.1vw] items-center h-[2vw] w-[10vw]">
                    <span className="text-[1vw]">
                      <CiLocationOn />
                    </span>
                    <h1 className=" w-[16vw]"> California, USA</h1>
                  </div>
                  <div className="ml-[2vw] flex justify-center items-center h-[2vw] w-[8vw]">
                    <span className="text-[1vw]">
                      <CiClock1 />
                    </span>

                    <h1 className=" w-[6vw]"> Part-Time</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-2 w-full"></div>
            <div className="font-bold text-2xl p-5">
              <h2>Job description</h2>
            </div>

            <div className="min-h-[14vw] text-blue text-[1.2vw] opacity-70  p-5">
              {detailToShow.description}
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
          <div className="flex flex-col gap-[1vw]  justify-start items-center ">
            <div className="h-[585px] w-[435px] bg-white shadow-lg rounded-lg p-6 flex flex-col">
              {/* Job Summary Title */}
              <h2 className="text-2xl font-semibold text-gray-800 border-b-2 p-10 text-center">
                Job Summary
              </h2>

              {/* Job Details */}
              <div className="mt-16 p-4 space-y-2 text-xl leading-loose text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold w-[10vw]">
                    📅 Published on:
                  </span>
                  <span className="text-left w-[10vw] ml-[1.1vw]">
                    {detailToShow.dates}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold w-[10vw]">👥 Vacancy:</span>
                  <span className="text-left w-[10vw] ml-[1.1vw]">
                    {detailToShow.vacancy}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold w-[10vw]">💰 Salary:</span>
                  <span className="text-left w-[10vw] ml-[1.1vw]">
                    {detailToShow.salary}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold w-[10vw]">📍 Location:</span>
                  <span className="text-left w-[10vw] ml-[1.1vw]">
                    {detailToShow.locations}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold w-[10vw]">📝 Job Nature:</span>
                  <span className="text-left w-[10vw] ml-[1.1vw]">
                    {detailToShow.nature}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex  shadow-md bg-white text-black h-[75px] w-[435px] text-center justify-center ">
              <div className="flex gap-4 mt-3">
                <p className="text-xl">share it</p>
                <div className="flex gap-5 mt-2 text-gray-400 shadow-md">
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

}


// <div className="h-[100vh] w-[100vw]" >
//   <div className="w-[770px] absolute h-[660px] left-[13vw] bottom-[6vw] bg-white rounded-lg  p-6 flex-col flex">
//     <h1 className="text-3xl font-semibold text-center mb-6">
//       Apply for the Job
//     </h1>
//     <div className="flex justify-center items-center">
//       <form className="space-y-4 w-full max-w-[648px]">
//         <input
//           type="text"
//           className="border-2 w-full h-[58px] px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter Your Full Name"
//         />
//         <input
//           type="text"
//           className="border-2 w-full h-[58px] px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter Your Email"
//         />
//         <input
//           type="text"
//           className="border-2 w-full h-[58px] px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter Your Website Link"
//         />
//         <input
//           type="file"
//           name="resume"
//           accept=".pdf,.doc,.docx"
//           required
//           className="border-2 w-full h-[58px] px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pt-4"
//         />
//         <textarea
//           name="Cover Letter"
//           placeholder="Enter Your Cover Letter"
//           required
//           className="border-2 w-full h-[186px] p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button onClick={handleClickNotification}className="w-full h-[58px] bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
//           Apply Now
//         </button>
//         <motion.div className="h-[4vw] w-[20vw] absolute bottom-0 right-0  " style={{display:displayNotification}}>
//           <div>Hello</div>
//         </motion.div>




//       </form>
//     </div>
//   </div>
// </div>