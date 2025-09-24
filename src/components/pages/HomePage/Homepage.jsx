import React from "react";

export default function HomePage() {
  return (
    <main className="bg-gray-50 p-6 sm:p-10 mx-4 md:mx-12 lg:mx-20 py-8 rounded-xl shadow-xl mt-6">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 flex items-center justify-center text-center text-white rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
        <div className="px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to AutoStore
          </h1>
          <p className="text-lg md:text-xl md:max-w-xl mx-auto drop-shadow-sm">
            Your one-stop shop for car brands, accessories, and car care products
          </p>
          <button className="mt-6 bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:bg-purple-50 transition-all duration-300">
            Explore Now
          </button>
        </div>
      </section>
    </main>
  );
}
