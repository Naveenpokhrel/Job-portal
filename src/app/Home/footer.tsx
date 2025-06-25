import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 text-center">
      <h1 className="text-2xl font-semibold text-white">Jobify.com</h1>

      {/* Navigation Links */}
      <ul className="flex justify-center space-x-6 my-4 text-sm uppercase">
        <li>
          <Link href="/" className="hover:text-green-400 transition-all">
            Home
          </Link>
        </li>
        <li>
          <Link href="/agent" className="hover:text-green-400 transition-all">
            Agent
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-green-400 transition-all">
            About
          </Link>
        </li>
        <li>
          <Link href="/listing" className="hover:text-green-400 transition-all">
            Listing
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-green-400 transition-all">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-green-400 transition-all">
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 my-4 text-green-400 text-lg">
        <FaTwitter className="cursor-pointer hover:text-green-300 transition-all" />
        <FaFacebookF className="cursor-pointer hover:text-green-300 transition-all" />
        <FaInstagram className="cursor-pointer hover:text-green-300 transition-all" />
      </div>

      {/* Copyright Section */}
      <p className="text-sm mt-4">
        Copyright ©2021 All rights reserved | This template is made with{" "}
        <span className="text-green-400">❤</span> by{" "}
        <Link
          href="https://jobify.com"
          className="text-green-400 hover:underline"
        >
          Jobify.com
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
