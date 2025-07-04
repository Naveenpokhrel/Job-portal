import React from "react";

interface Props {
  mainHeading: string;
  subHeading: string;
}

const Heading = ({ mainHeading, subHeading }: Props) => {
  return (
    <div className="text-center p-3">
      <h1 className=" text-black  text-opacity-90 font-bold text-5xl">
        {mainHeading}
      </h1>
      <p className="mt-[1rem] text-[15px] text-gray-800 text-opacity-80 font-medium">
        {subHeading}
      </p>
      
    </div>
  );
};

export default Heading;
