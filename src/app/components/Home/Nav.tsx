import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div className=" sticky top-0 h-[13vh] overflow-hidden shadow-md bg-white">
      <div className="w-[90%] md:w-[80%] h-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] flex items-center">
          <Link href="/">
            <Image
              src="/Image/logo.png"
              alt="Logo"
              width={250}
              height={250}
              className="w-full h-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links & Sign-up Button */}
        <div className="flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {["Home", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/signup">
            <button className="px-4 py-1.5 text-sm sm:text-base sm:px-6 sm:py-2 bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
