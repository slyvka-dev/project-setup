import React from "react";

function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 via-purple-200 to-pink-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Welcome to the Home Page
        </h1>
        <h2 className="text-2xl text-gray-600 mt-4">Initial Project Setup</h2>
      </div>
    </div>
  );
}

export default HomePage;
