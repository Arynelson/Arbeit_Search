# 🚀 Job Finder - Web Job Search & Management in Germany  

**Job Finder** is a web application designed to help users search for job opportunities in Germany, save jobs, track applications, and manage their hiring process efficiently. The platform integrates with the **Arbeitnow API** for real-time job listings and provides secure user authentication for personalized job tracking.

---

## 🔹 Features  
✅ **Search for Jobs** – Filter jobs by title, location, type (Full-time, Internship, Remote, etc.), and tags (React, Backend, DevOps, etc.).  
✅ **Save & Manage Jobs** – Users can save jobs, add notes, and track application status.  
✅ **Advanced Filters** – Search by job category, location, experience level (Junior, Senior, etc.), and sort by latest postings.  
✅ **Authentication** – Secure login & registration system using JWT.  
✅ **User Dashboard** – Track saved jobs and application status with statistics.  
✅ **Responsive Design** – Works seamlessly on desktops and mobile devices.  

---

## 🛠 Tech Stack  

### **Frontend:**  
- **React.js** (with Vite)  
- **TailwindCSS**  
- **Axios** (for API requests)  

### **Backend:**  
- **Node.js + Express.js**  
- **PostgreSQL** (Database)  
- **JWT Authentication**  
- **Bcrypt** (Password encryption)  

---

## 🔧 Installation & Setup  

### **1️⃣ Clone the Repository**  

git clone https://github.com/your-username/job-finder.git
cd job-finder

### **2️⃣ Backend Setup**

cd job-search-api
npm install

-- Configure the .env file with your PostgreSQL database details:

DATABASE_URL=postgresql://username:password@localhost:5432/jobsearchdb
PORT=5000

--Start the backend server:

npm run dev

### **3️⃣ Frontend Setup**

cd ../job-search-app

npm install

npm run dev

API Endpoints

🔹 Authentication

POST /api/auth/register → Register a new user
POST /api/auth/login → Login and receive a JWT token

🔹 Job Management

GET /api/jobs/external → Fetch jobs from Arbeitnow API with filters
POST /api/jobs/save → Save a job to the database
GET /api/jobs/saved → Retrieve saved jobs
DELETE /api/jobs/delete/:id → Delete a saved job

🎨 UI Overview

The Job Finder application provides a clean and intuitive interface:

📌 Home Page – Browse and search job listings with filters
📌 Dashboard – Manage saved jobs and track application status
📌 Login/Register – Secure user authentication system
📌 Responsive Design – Optimized for mobile and desktop

🚀 Deployment
To deploy the project:

Frontend:  Vercel 
Backend: Railway
Database: Use a cloud PostgreSQL provider

🛠 Future Improvements

🔹 Email Notifications – Remind users about job application deadlines

🔹 Job Alerts – Allow users to subscribe to new job listings

🤝 Contributing

Contributions are welcome! Fork the project and submit a PR.
 Demo: https://vercel.com/arynelsons-projects/arbeit-search
📩 Contact: aryhauffe@gmail.com
🌐 Website: 
