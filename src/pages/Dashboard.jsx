import { useEffect, useState } from "react";
import { fetchSavedJobs, deleteJob, updateJobStatus } from "../Api";
import SavedJobs from "../components/SavedJobs";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const data = await fetchSavedJobs();
      setJobs(data);
    };
    getJobs();
  }, []);

  const handleDeleteJob = async (id) => {
    if (await deleteJob(id)) {
      setJobs(jobs.filter((job) => job.id !== id));
      alert("Job deleted successfully!");
    }
  };

  const handleStatusChange = async (id, status) => {
    if (await updateJobStatus(id, status)) {
      setJobs(jobs.map((job) => (job.id === id ? { ...job, status } : job)));
      alert("Job status updated!");
    }
  };

  const countStatus = (status) =>
    jobs.filter((job) => job.status === status).length;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Saved Jobs Dashboard</h1>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
        <div className="bg-blue-200 p-4 text-center">
          Saved: {countStatus("saved")}
        </div>
        <div className="bg-green-200 p-4 text-center">
          Applied: {countStatus("applied")}
        </div>
        <div className="bg-yellow-200 p-4 text-center">
          Interview: {countStatus("interview")}
        </div>
        <div className="bg-red-200 p-4 text-center">
          Rejected: {countStatus("rejected")}
        </div>
      </div>

      <SavedJobs
        jobs={jobs}
        onDeleteJob={handleDeleteJob}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default Dashboard;
