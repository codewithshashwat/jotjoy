import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] min-h-screen flex items-center justify-center">
      <div className="text-center p-8 bg-white shadow-2xl rounded-2xl max-w-lg">
        <h1 className="text-4xl font-bold text-[#1e3c72] mb-4 poppins-bold">Welcome to JotJoy!</h1>
        <p className="text-gray-600 text-lg mb-6 poppins-light">
          Jot down your thoughts, capture ideas, and feel the joy! <i class="fa-solid fa-star"></i>
        </p>
        <a
          href="/notes"
          className="bg-[#1e3c72] text-white px-6 py-3 rounded-full hover:bg-[#2a5298] transition duration-300 poppins-regular"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
