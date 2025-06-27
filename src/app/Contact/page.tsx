"use client";

import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { fullName, email, message } = formData;
    if (!fullName || !email || !message) {
      setError("Please fill in all the fields.");
      return;
    }

    // Reset and show success
    setSuccess(true);
    setFormData({ fullName: "", email: "", message: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white to-gray-100 px-4">
      <div className="bg-white shadow-2xl border rounded-2xl p-8 w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
            <p className="text-sm text-gray-500 mt-1">
              We'd love to hear from you!
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 w-full border-2 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border-2 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="mt-1 w-full border-2 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="Type your message..."
            ></textarea>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Send Message
          </button>

          {success && (
            <div className="flex items-center justify-center gap-2 text-green-700 bg-green-100 py-2 px-4 mt-4 rounded-md text-sm font-medium animate-fade-in-out">
              <CheckCircleIcon className="h-5 w-5 text-green-700" />
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
