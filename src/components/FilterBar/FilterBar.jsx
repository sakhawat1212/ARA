import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FilterBox = () => {
  const navigate = useNavigate();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const handleFilter = () => {
    navigate("/results", { state: { make, model, year } });
  };

  return (
    <div className="bg-black text-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto my-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Search Parts for Your Car
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select
          className="w-full p-3 rounded-md bg-white text-black"
          onChange={(e) => setMake(e.target.value)}
        >
          <option>Select Make</option>
          <option>Toyota</option>
          <option>Honda</option>
          <option>Suzuki</option>
          <option>Kia</option>
        </select>

        <select
          className="w-full p-3 rounded-md bg-white text-black"
          onChange={(e) => setModel(e.target.value)}
        >
          <option>Select Model</option>
          <option>Corolla</option>
          <option>Civic</option>
          <option>Alto</option>
          <option>Sportage</option>
        </select>

        <select
          className="w-full p-3 rounded-md bg-white text-black"
          onChange={(e) => setYear(e.target.value)}
        >
          <option>Select Year</option>
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
        </select>

        <button
          className="w-full p-3 rounded-md bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
          onClick={handleFilter}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
