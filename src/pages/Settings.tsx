import React, { useState } from "react";

const Settings: React.FC = () => {
  const [language, setLanguage] = useState<string>("English");

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <section className="flex flex-col items-center justify-center  bg-gray-100 p-8 ">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Language Settings</h1>
      </header>

      <article className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <form>
          <div className="mb-4">
            <label htmlFor="language" className="block text-lg mb-2">
              Select Language
            </label>
            <select
              id="language"
              value={language}
              onChange={handleLanguageChange}
              className="p-2 w-full border rounded-lg"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg w-full"
          >
            Save Language
          </button>
        </form>
      </article>
    </section>
  );
};

export default Settings;
