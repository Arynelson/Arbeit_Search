import React from "react";

const SavedJobs = ({ jobs, onDeleteJob, onStatusChange }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Saved Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="border p-4 mb-4">
            <h3 className="font-semibold">{job.title}</h3>
            <p>{job.company_name}</p>
            <p>{job.location}</p>

            {/* Dropdown to update job status */}
            <select
              className="border p-2 mt-2"
              value={job.status}
              onChange={(e) => onStatusChange(job.id, e.target.value)}
            >
              <option value="saved">Saved</option>
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="rejected">Rejected</option>
            </select>

            <button
              onClick={() => onDeleteJob(job.id)}
              className="bg-red-500 text-white px-3 py-1 mt-2 ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedJobs;
