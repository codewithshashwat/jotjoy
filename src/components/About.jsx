import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4facfe] to-[#00f2fe] flex justify-center items-center p-6">
      <div className="max-w-3xl bg-white p-8 shadow-xl rounded-2xl">
        <h1 className="text-4xl font-bold text-[#1e3c72] mb-4 poppins-bold">About JotJoy</h1>
        <p className="text-gray-700 text-lg leading-relaxed poppins-regular">
          Welcome to <strong>JotJoy</strong> – your personal space to jot down thoughts, tasks,  
          and ideas quickly and effortlessly! 🎉 Whether it's a reminder, a to-do list,  
          or just a random thought – JotJoy makes it easy to save and manage your notes.
        </p>

        <h2 className="text-2xl font-semibold text-[#1e3c72] mt-6 poppins-bold">Why Choose JotJoy?</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 poppins-regular">
          <li><i class="fa-solid fa-circle-check text-green-500"></i> <b>Super Easy to Use</b> – Just type and save. That's it!</li>
          <li><i class="fa-solid fa-floppy-disk text-blue-500"></i> <b>Your Notes are Safe</b> – Even if you close the browser, your notes stay with you.</li>
          <li><i class="fa-solid fa-palette text-purple-500"></i> <b>Clean & Modern Design</b> – Enjoy a beautiful and simple interface.</li>
          <li><i class="fa-solid fa-rocket text-amber-500"></i> <b>Add or Delete Notes Quickly</b> – Manage your ideas with one click.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#1e3c72] mt-6 poppins-bold">How It Works?</h2>
        <p className="text-gray-700 mt-2 poppins-regular">
          1️⃣ **Write Your Note:** Type in the box provided. <br/>
          2️⃣ **Click 'Add Note':** Instantly save and see your note.  <br/>
          3️⃣ **Remove with One Click:** Click <i className="fa-solid fa-trash text-red-500"></i> to delete when done.  <br/>
        </p>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-gray-800">
            <span className="text-[#1e3c72] poppins-light">Jot it down, feel the joy! 🎉</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
