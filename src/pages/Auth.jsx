import { useState } from "react";
import { registerUser, loginUser } from "../Api";

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const response = isRegistering ? await registerUser(form) : await loginUser(form);

    if (response && response.token) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      window.location.href = "/";
    } else {
      setErrorMessage(response?.error || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isRegistering ? "Register" : "Login"}
        </h2>

        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <form className="flex flex-col gap-3 mt-4" onSubmit={handleSubmit}>
          {isRegistering && (
            <input
              type="text"
              placeholder="Name"
              className="border p-3 rounded"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition">
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>

        <button
          className="mt-4 text-blue-500 w-full text-center"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
