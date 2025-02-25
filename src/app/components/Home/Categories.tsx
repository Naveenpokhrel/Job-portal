import React from "react";
import Heading from "../Helper/Heading";
import Image from "next/image";

const categories = [
  { id: 1, img: "/Image/icon1.png", head: "Accounting", price: "100" },
  { id: 2, img: "/Image/icon2.png", head: "Marketing", price: "100" },
  { id: 3, img: "/Image/icon3.png", head: "IT & Software", price: "100" },
  { id: 4, img: "/Image/icon4.png", head: "Design", price: "100" },
  { id: 5, img: "/Image/icon5.png", head: "Engineering", price: "100" },
  { id: 6, img: "/Image/icon6.png", head: "Education", price: "100" },
  { id: 7, img: "/Image/icon1.png", head: "Accounting", price: "100" },
  { id: 8, img: "/Image/icon2.png", head: "Marketing", price: "100" },
  { id: 9, img: "/Image/icon3.png", head: "IT & Software", price: "100" },
  { id: 10, img: "/Image/icon4.png", head: "Design", price: "100" },
  { id: 11, img: "/Image/icon5.png", head: "Engineering", price: "100" },
  { id: 12, img: "/Image/icon6.png", head: "Education", price: "100" },
];

const CategoryCard = ({ img, head, price }) => {
  return (
    <div className="flex flex-col gap-4 h-[200px] w-[200px] justify-center items-center rounded-lg shadow-md hover:shadow-lg transition-all duration-1000">
      <Image src={img} alt={head} width={100} height={100} />
      <h1 className="text-lg font-semibold">{head}</h1>
      <h1 className="text-sm text-gray-600">{price}</h1>
    </div>
  );
};

const Categories = () => {
  return (
    <div className=" h-[80vh]">
      <Heading
        mainHeading="Popular Job Categories"
        subHeading="2022 Jobs Live - 293 added today."
      />
      <div className="w-[70%] mx-auto">
        <div className="grid grid-cols-6 gap-6 mt-10">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
