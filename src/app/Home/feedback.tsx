"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const feedbacks = [
  {
    id: 1,
    name: "Roe Smith",
    title: "Designer",
    feedback:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
  },
  {
    id: 2,
    name: "Alex Johnson",
    title: "Frontend Developer",
    feedback:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
  },
  {
    id: 3,
    name: "Emily Davis",
    title: "UI/UX Designer",
    feedback:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Full Stack Developer",
    feedback:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound.",
  },
];

export default function StudentFeedback() {
  return (
    <section className="bg-white min-h-[70vh] flex items-start justify-center px-4 py-5">
      <div className="max-w-[1290px] w-full px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-exo font-semibold text-gray-900">
            Student Feedbacks
          </h2>
          <p className="text-sm sm:text-base md:text-[18px] text-gray-500 font-jost mt-2">
            What Students Say About Academy LMS
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={12} // Reduced gap between slides
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {feedbacks.map(({ id, name, title, feedback }) => (
            <SwiperSlide key={id}>
              <div className="min-h-[340px] sm:min-h-[380px] md:h-[408px] bg-white border border-gray-200 rounded-[20px] p-3 sm:p-4 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-5xl sm:text-6xl text-gray-300 leading-none mb-4">
                    “
                  </p>
                  <p className="text-sm sm:text-base md:text-[18px] text-gray-800 font-jost leading-relaxed">
                    {feedback}
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-base sm:text-lg md:text-[20px] font-semibold text-gray-900">
                    {name}
                  </p>
                  <p className="text-sm sm:text-base md:text-[18px] text-gray-500">
                    {title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
