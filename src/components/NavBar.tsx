import { Link, Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <>
      {/* // <div className=" flex flex-col"> */}
      {/* Navbar */}
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
              onClick={onLogout}
              className="text-white bg-red-500 hover:bg-red-700 p-2 rounded"
            >
              Logout
            </button>
          </div>
          <div className="sm:hidden mt-4 w-full">
            <button
              onClick={onLogout}
              className="text-white bg-red-500 hover:bg-red-700 p-2 rounded w-full"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="h-[90vh]">
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
