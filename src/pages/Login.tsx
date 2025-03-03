import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please fill out all fields");
    } else {
      const userList = JSON.parse(localStorage.getItem("users") || "[]");
      const findUser = userList.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === password
      );

      if (!findUser) {
        setEmail("");
        setPassword("");
        setErrorMessage("The password or email you’ve entered is incorrect.");
        return;
      }
      const fakeToken = "faceToken1234";
      localStorage.setItem("authToken", fakeToken);
      window.location.href = "/home";
    }
  };

  return (
    <section className="flex justify-center items-center h-screen p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg flex flex-col gap-6 shadow">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-700">
          Login
        </h2>
  
        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}
  
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-600"
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
          </div>
  
          <div>
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-medium text-gray-600"
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
          </div>
  
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
  
        <div className="text-center">
          <p className="text-sm sm:text-base text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
  
};

export default Login;
