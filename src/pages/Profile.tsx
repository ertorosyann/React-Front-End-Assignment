import React from "react";

const Profile: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("users") || "{}");

  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 p-4 ">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-semibold">Your Profile</h1>
      </header>
      <article className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex-grow">
        <p className="text-xl mb-2">Name: {user.name || "John Doe"}</p>
        <p className="text-xl mb-2">
          Email: {user.email || "example@example.com"}
        </p>
        <p className="text-xl">Joined: {user.joined || "2023-01-01"}</p>
      </article>
    </section>
  );
};

export default Profile;
