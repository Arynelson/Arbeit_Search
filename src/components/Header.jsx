import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import userIcon from "../assets/4.png";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/auth";
  };

  return (
    <nav className="p-4 bg-gray-200 flex justify-between items-center w-full">
      {/* Logo e navegação */}
      <div className="flex gap-4">
        <Link to="/" className="text-lg font-bold">Job Finder</Link>
        <Link to="/dashboard" className="hidden md:block">Dashboard</Link>
        {!user && <Link to="/auth" className="hidden md:block">Login</Link>}
      </div>

      {/* Usuário Logado */}
      {user ? (
        <div className="flex items-center">
          <img src={userIcon} alt="User" className="w-10 h-10 rounded-full mr-2" />
          <span className="font-semibold hidden md:block">{user.name}</span>
          <button onClick={handleLogout} className="ml-4 bg-red-500 text-white px-3 py-1">
            Logout
          </button>
        </div>
      ) : (
        <Link to="/auth" className="md:hidden text-blue-500">Login</Link>
      )}
    </nav>
  );
};

export default Header;
