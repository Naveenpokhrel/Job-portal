import React from "react";
export default function ContactForm() {
  return (
    <>
      <div className="flex justify-center items-center py-[150px]">
        <div className="border-2 bg-white shadow-lg h-auto w-[456px] p-6 rounded-lg">
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="text-2xl font-semibold">Contact Us</h1>
              <p className="text-sm text-gray-500">
                We'd love to hear from you!
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <label className="font-medium">Full Name</label>
              <input
                type="text"
                className="border-2 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Full Name.."
                required
              />
              <label className="font-medium">Email</label>
              <input
                type="email"
                className="border-2 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Email.."
                required
              />
              <label className="font-medium">Message</label>
              <textarea
                className="border-2 p-2 w-full h-32 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Your Message.."
                required
              ></textarea>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
