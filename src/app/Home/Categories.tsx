"use client";
import React from "react";
import Heading from "../components/Helper/Heading";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    img: "/Image/icon1.png",
    head: "Accounting",
    price: "$100",
    src: "/categoryPage/Accounting",
  },
  {
    id: 2,
    img: "/Image/icon2.png",
    head: "Marketing",
    price: "$100",
    src: "/categoryPage/Marketing",
  },
  {
    id: 3,
    img: "/Image/icon3.png",
    head: "Software Development",
    price: "$100",
    src: "/categoryPage/SoftwareDevelopment",
  },
  {
    id: 4,
    img: "/Image/icon4.png",
    head: "Web Development & Design",
    price: "$100",
    src: "/categoryPage/HumanResources",
  },
  {
    id: 5,
    img: "/Image/worker.png",
    head: "Engineering",
    price: "$100",
    src: "/categoryPage/GraphicDesign",
  },
  {
    id: 6,
    img: "/Image/education.png",
    head: "Education",
    price: "$100",
    src: "/categoryPage/SoftwareDevelopment",
  },
  {
    id: 7,
    img: "/Image/data-science.png",
    head: "Data Science & AI",
    price: "$100",
    src: "/categoryPage/SoftwareDevelopment",
  },
  {
    id: 8,
    img: "/Image/cyber-security.png",
    head: "Cybersecurity & Networking",
    price: "$100",
    src: "/categoryPage/SoftwareDevelopment",
  },
  {
    id: 9,
    img: "/Image/server.png",
    head: "Cloud Computing & DevOps",
    price: "$100",
    src: "/categoryPage/SoftwareDevelopment",
  },
  {
    id: 10,
    img: "/Image/database-storage.png",
    head: "Database & Infrastructure",
    price: "$100",
    src: "/categoryPage/SoftwareDevelopment",
  },
];

type CategoryCardProps = {
  img: string;
  head: string;
  price: string;
  src: string;
};

const CategoryCard = ({ img, head, price, src }: CategoryCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105">
      <Image
        src={img}
        alt={head}
        width={80}
        height={80}
        className="object-contain"
      />
      <h1 className="text-lg font-semibold text-gray-800">{head}</h1>
      <h1 className="text-sm text-gray-600">{price}</h1>
      <Link
        href={src}
        className="border-2 h-[45px] w-full sm:w-[150px] text-white items-center justify-center px-4 flex bg-blue-600"
      >
        More details
      </Link>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="h-auto py-10">
      <Heading
        mainHeading="Popular Job Categories"
        subHeading="2022 Jobs Live - 293 added today."
      />
      <div className="w-full sm:w-[90%] md:w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-10">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
