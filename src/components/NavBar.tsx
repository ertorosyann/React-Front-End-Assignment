import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx";
const Navbar = () => {
  const { logout } = useAuth();
  return (
    <nav className="bg-blue-500 p-4 w-full z-50 h-[10vh] flex justify-center items-center">
      <ul className="flex w-full space-x-6">
        <li>
          <Link to="/home" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile" className="text-white hover:underline">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/settings" className="text-white hover:underline">
            Settings
          </Link>
        </li>
        <li>
          <Link to="/todo" className="text-white hover:underline">
            ToDoList
          </Link>
        </li>
      </ul>

      <div className="flex space-x-2">
        <div className="hidden sm:block">
          <button
            onClick={logout}
            className="text-white bg-red-500 hover:bg-red-700 p-2 rounded"
          >
            Logout
          </button>
        </div>
        <div className="sm:hidden mt-4 w-full">
          <button
            onClick={logout}
            className="text-white bg-red-500 hover:bg-red-700 p-2 rounded w-full"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
