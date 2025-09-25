import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import brands from "../../data/brands";
import accessories from "../../data/accessories";
import carCareData from "../../data/CarCareData";

const FilterBox = () => {
  const navigate = useNavigate();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  // saara data merge
  const allData = [...brands, ...accessories, ...carCareData];

  // flatten karke sab products nikaalna
  const allProducts = allData.flatMap((item) =>
    item.products ? item.products : item.children?.flatMap((c) => c.products || [])
  );

  // unique values filter ke liye
  const makes = [...new Set(allProducts.map((p) => p.make).filter(Boolean))];
  const models = [...new Set(allProducts.map((p) => p.model).filter(Boolean))];
  const years = [...new Set(allProducts.map((p) => p.year).filter(Boolean))];

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
          {makes.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>

        <select
          className="w-full p-3 rounded-md bg-white text-black"
          onChange={(e) => setModel(e.target.value)}
        >
          <option>Select Model</option>
          {models.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>

        <select
          className="w-full p-3 rounded-md bg-white text-black"
          onChange={(e) => setYear(e.target.value)}
        >
          <option>Select Year</option>
          {years.map((y) => (
            <option key={y}>{y}</option>
          ))}
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
