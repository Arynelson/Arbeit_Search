import axios from "axios";

const API_URL = "http://localhost:5000/api/jobs"; // Backend URL

export const fetchExternalJobs = async (queryParams = "") => {
  const API_URL = import.meta.env.VITE_API_URL; // Garantindo que está pegando a URL correta
  console.log(`🔍 Fetching jobs from: ${API_URL}/api/jobs/external?${queryParams}`);

  try {
    const response = await fetch(`${API_URL}/api/jobs/external?${queryParams}`);
    const data = await response.json();
    console.log("🔄 API Response from Backend:", data);
    return data;
  } catch (error) {
    console.error("❌ Error fetching jobs:", error);
    return [];
  }
};



export const saveJob = async (job) => {
  try {
    const response = await axios.post(`${API_URL}/save`, job);
    return response.data;
  } catch (error) {
    console.error("Error saving job:", error);
  }
};

export const fetchSavedJobs = async () => {
  try {
    const response = await axios.get(`${API_URL}/saved`);
    return response.data;
  } catch (error) {
    console.error("Error fetching saved jobs:", error);
    return [];
  }
};

export const deleteJob = async (id) => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting job:", error);
    return false;
  }
};
export const updateJobStatus = async (id, status) => {
    try {
      await axios.put(`${API_URL}/update-status/${id}`, { status });
      return true;
    } catch (error) {
      console.error("Error updating job status:", error);
      return false;
    }
  };
  
  export const registerUser = async (userData) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", userData);
      return response.data;
    } catch (error) {
      console.error("Registration failed:", error);
      return null;
    }
  };
  
  export const loginUser = async (credentials) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", credentials);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      return null;
    }
  };

  
  