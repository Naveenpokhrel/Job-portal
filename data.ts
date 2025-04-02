export interface Job {
  id: number;
  title: string;
  image: string;
  salary: string;
  location: string;
  jobtype: string;
}

const JobData: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    image: "https://cdn-icons-png.flaticon.com/128/1823/1823837.png",
    salary: "35k - 40k",
    location: "London, UK",
    jobtype: "Full time",
  },
  {
    id: 2,
    title: "Data Analyst",
    image: "https://cdn-icons-png.flaticon.com/128/9073/9073468.png",
    salary: "30k - 38k",
    location: "New York, USA",
    jobtype: "Part time",
  },
  {
    id: 3,
    title: "Product Manager",
    image: "https://cdn-icons-png.flaticon.com/128/1157/1157076.png",
    salary: "50k - 60k",
    location: "Berlin, Germany",
    jobtype: "Full time",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    image: "https://cdn-icons-png.flaticon.com/128/1256/1256650.png",
    salary: "28k - 35k",
    location: "Paris, France",
    jobtype: "Remote",
  },
  {
    id: 5,
    title: "Marketing Specialist",
    image: "https://cdn-icons-png.flaticon.com/128/2920/2920294.png",
    salary: "32k - 42k",
    location: "Toronto, Canada",
    jobtype: "Full time",
  },
  {
    id: 6,
    title: "Cyber Security Analyst",
    image: "https://cdn-icons-png.flaticon.com/128/2885/2885400.png",
    salary: "40k - 55k",
    location: "Sydney, Australia",
    jobtype: "Contract",
  },
  {
    id: 7,
    title: "HR Manager",
    image: "https://cdn-icons-png.flaticon.com/128/3050/3050525.png",
    salary: "38k - 48k",
    location: "Dubai, UAE",
    jobtype: "Full time",
  },
  {
    id: 8,
    title: "Cloud Engineer",
    image: "https://cdn-icons-png.flaticon.com/128/270/270832.png",
    salary: "45k - 55k",
    location: "San Francisco, USA",
    jobtype: "Remote",
  },
  {
    id: 9,
    title: "Business Analyst",
    image: "https://cdn-icons-png.flaticon.com/128/921/921491.png",
    salary: "35k - 45k",
    location: "Singapore",
    jobtype: "Full time",
  },
  {
    id: 10,
    title: "IT Support Specialist",
    image: "https://cdn-icons-png.flaticon.com/128/1260/1260940.png",
    salary: "25k - 30k",
    location: "Mumbai, India",
    jobtype: "Part time",
  },
  {
    id: 11,
    title: "DevOps Engineer",
    image: "https://cdn-icons-png.flaticon.com/128/9753/9753217.png",
    salary: "50k - 65k",
    location: "Amsterdam, Netherlands",
    jobtype: "Full time",
  },
  {
    id: 12,
    title: "AI Researcher",
    image: "/Image/icon5.png",
    salary: "60k - 80k",
    location: "Boston, USA",
    jobtype: "Remote",
  },
  {
    id: 13,
    title: "Frontend Developer",
    image: "https://cdn-icons-png.flaticon.com/128/1705/1705721.png",
    salary: "40k - 50k",
    location: "Tokyo, Japan",
    jobtype: "Full time",
  },
  {
    id: 14,
    title: "Backend Developer",
    image: "https://cdn-icons-png.flaticon.com/128/3159/3159053.png",
    salary: "45k - 55k",
    location: "Seoul, South Korea",
    jobtype: "Full time",
  },
];


export default JobData;
