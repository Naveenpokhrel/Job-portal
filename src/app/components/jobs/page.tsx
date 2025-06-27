"use client";

import React, { useState } from "react";
import { Trash, Edit } from "lucide-react";
import Image from "next/image";

export default function AdminJobsPanel() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      type: "Full-time",
      location: "Remote",
      image: "/Image/a1.jpg",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Innovate Ltd",
      type: "Part-time",
      location: "New York",
      image: "/Image/a2.jpg",
    },
  ]);

  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    type: "",
    location: "",
    image: "",
  });

  const handleAddJob = () => {
    if (!newJob.title || !newJob.company || !newJob.type || !newJob.location || !newJob.image) return;
    setJobs([...jobs, { id: jobs.length + 1, ...newJob }]);
    setNewJob({ title: "", company: "", type: "", location: "", image: "" });
  };

  const handleDeleteJob = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Jobs Panel</h1>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Add New Job</h2>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Job Title" className="p-2 border rounded" value={newJob.title} onChange={(e) => setNewJob({ ...newJob, title: e.target.value })} />
          <input type="text" placeholder="Company" className="p-2 border rounded" value={newJob.company} onChange={(e) => setNewJob({ ...newJob, company: e.target.value })} />
          <input type="text" placeholder="Job Type" className="p-2 border rounded" value={newJob.type} onChange={(e) => setNewJob({ ...newJob, type: e.target.value })} />
          <input type="text" placeholder="Location" className="p-2 border rounded" value={newJob.location} onChange={(e) => setNewJob({ ...newJob, location: e.target.value })} />
          <input type="file" accept="image/*" className="p-2 border rounded" onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setNewJob({ ...newJob, image: URL.createObjectURL(e.target.files[0]) });
            }
          }} />
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddJob}>Add Job</button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Job Listings</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Title</th>
              <th className="border p-2">Company</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Location</th>
              <th className="border p-2">Image</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="text-center">
                <td className="border p-2">{job.title}</td>
                <td className="border p-2">{job.company}</td>
                <td className="border p-2">{job.type}</td>
                <td className="border p-2">
                  <Image src={job.image} alt={job.title} width={64} height={64} className="object-cover rounded" />
                </td>
                <td className="border p-2">
                  <Image src={job.image} alt={job.title} width={64} height={64} className="object-cover rounded" />
                </td>
                <td className="border p-2 flex justify-center gap-4">
                  <button className="text-red-500" onClick={() => handleDeleteJob(job.id)}><Trash size={20} /></button>
                  <button className="text-blue-500"><Edit size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}