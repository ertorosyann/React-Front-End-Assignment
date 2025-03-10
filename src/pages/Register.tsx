import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Registration: React.FC = () => {
  const { clear } = useAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setErrorMessage("Please fill out all fields");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const usersList = JSON.parse(localStorage.getItem("users") || "[]");
    const findUser = usersList.some(
      (user: { email: string }) => user.email == email
    );

    if (findUser) {
      setErrorMessage("User already exists");
      return;
    }

    const newUser = { email, password };
    usersList.push(newUser);

    localStorage.setItem("users", JSON.stringify(usersList));
    navigate("/login");
  };

  return (
    <section className="flex justify-center items-center h-screen p-4">
      <article className="w-full max-w-md p-8 bg-white rounded-lg flex flex-col gap-6 shadow">
        <header>
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Create an Account
          </h2>
        </header>

        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <fieldset>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </fieldset>

          <fieldset>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </fieldset>

          <fieldset>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
            />
          </fieldset>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Register
          </button>
        </form>

        <footer className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
          <p
            className="cursor-pointer text-red-500  hover:underline"
            onClick={clear}
          >
            Clear Local Storage
          </p>
        </footer>
      </article>
    </section>
  );
};

export default Registration;
