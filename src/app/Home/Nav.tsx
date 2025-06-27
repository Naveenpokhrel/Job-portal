import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useLogIn from "@/app/Hooks/isLoggedIn";
import useInitialName from "@/app/Hooks/initialName";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const NavItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Contact", path: "/Contact" },
  { name: "Jobs", path: "/Jobsnav" },
];

const Nav = () => {
  const { initialName } = useInitialName();
  const { LoggedIn } = useLogIn();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogoutButton = () => {
    setIsDropdownOpen(false);
    router.push("/");
    location.reload();
  };

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-[90%] md:w-[80%] h-[13vh] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-[150px] h-auto flex items-center">
          <Link href="/">
            <Image
              src="/Image/logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="w-full h-auto"
              priority
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation & Auth */}
        <div
          className={`${
            isMobileMenuOpen
              ? "absolute top-[13vh] left-0 w-full bg-white py-6 flex flex-col items-center space-y-4 shadow-md"
              : "hidden"
          } md:flex md:static md:flex-row md:items-center md:space-x-8 transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 text-center w-full md:w-auto">
            {NavItems.map((item) => (
              <li key={item.name} className="w-full md:w-auto">
                <Link
                  href={item.path}
                  onClick={handleMobileNavClick}
                  className="block w-full px-4 py-2 text-lg font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth */}
          <div className="relative pt-4 md:pt-0">
            {LoggedIn ? (
              <div className="relative">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="text-white font-semibold text-lg tracking-wide">
                    {initialName}
                  </span>
                </div>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                    <ul className="text-gray-800">
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
                        onClick={() => alert("View Profile Clicked")}
                      >
                        View Profile
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer transition"
                        onClick={handleLogoutButton}
                      >
                        Log Out
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/signup">
                <button
                  onClick={handleMobileNavClick}
                  className="w-full md:w-auto px-4 py-2 bg-blue-600 font-semibold text-white rounded-lg hover:bg-blue-800 transition-all duration-300"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
