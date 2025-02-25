import React from "react";
import Image from "next/image";

const SignUp = () => {
  return (
    <div className="overflow-hidden h-[84vh] flex flex-col items-center justify-center">
      <div className="font-bold font-weight[800] text-2xl">
        <h1>Lets SignUp your Account</h1>
      </div>
      <button className="px-12 py-3 mt-[2rem] bg-purple-700 hover:bg-purple-900 transition-all duration-300 rounded-lg text-white">
        Sign Up Now
      </button>
    </div>
  );
};

export default SignUp;
