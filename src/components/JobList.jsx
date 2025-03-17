import { useState } from "react";
import { fetchExternalJobs, saveJob } from "../Api"; // Corrigindo importação

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  
  const [sort] = useState("latest");

  const fetchJobs = async () => {
    console.log("🔍 Fetching jobs with filters..."); // Debugging log

    const queryParams = new URLSearchParams();

    if (searchTerm) queryParams.append("query", searchTerm);
    if (location) queryParams.append("location", location);
    if (jobType) queryParams.append("job_type", jobType);
   
    if (sort) queryParams.append("sort", sort);

    console.log("Query Params:", queryParams.toString()); // Debugging log

    try {
      const data = await fetchExternalJobs(queryParams.toString());
      console.log("🔄 API Response:", data); // Ver se a API está retornando algo

      setJobs(data);
    } catch (error) {
      console.error("❌ Error fetching jobs:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Available Jobs</h2>

      {/* 🔍 Filtros de Busca */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          className="border p-2 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location..."
          className="border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <select className="border p-2 rounded" value={jobType} onChange={(e) => setJobType(e.target.value)}>
          <option value="">Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>
      
      </div> {/* Closing div for search filters */}

      {/* 🔍 Botão de Busca */}
      <button
        onClick={fetchJobs}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full md:w-auto"
      >
        Search
      </button>

      {/* 🔹 Lista de Vagas */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {jobs.length === 0 ? (
          <p className="text-gray-500 mt-4">No jobs found. Try adjusting the filters.</p>
        ) : (
          jobs.map((job) => (
            <li key={job.slug} className="border p-4 shadow rounded-lg flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-gray-700">{job.company_name}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
                <a href={job.url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                  View Job
                </a>
              </div>

              <button
                onClick={() => saveJob(job)}
                className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
              >
                Save Job
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default JobList;
