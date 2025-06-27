import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-white tracking-wide">
          Jobify.com
        </h1>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm uppercase font-medium">
          {[
            { name: "Home", path: "/" },

            { name: "About", path: "/About" },

            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "/Contact" },
          ].map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className="hover:text-green-400 transition-colors duration-200"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-5 text-green-400 text-xl">
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-green-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-green-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:text-green-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-500">
          &copy; {new Date().getFullYear()} All rights reserved | Made with{" "}
          <span className="text-green-400">❤</span> by{" "}
          <Link
            href="/"
            className="text-green-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jobify.com
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
