// src/components/CarCare/CarCare.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import carCareData from "../../data/CarCareData";

const toSlug = (name) => name.toLowerCase().replace(/[\s/]+/g, "-");

const CarCare = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(carCareData[0]?.name);

  // Sidebar categories
  const categories = carCareData.map((c) => c.name);

  // Collect products based on selected category
  const gatherProducts = (categoryName) => {
    const category =
      carCareData.find((c) => c.name === categoryName) || carCareData[0];

    const topProducts = category.products || [];
    const childProducts = (category.children || []).flatMap(
      (c) => c.products || []
    );

    return [...topProducts, ...childProducts];
  };

  const allProducts = gatherProducts(selectedCategory);

  // Click handler
  const handleProductClick = (prod) => {
    navigate(`/carcare/${toSlug(prod.name)}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-6xl mx-auto my-8">
      <h2 className="text-xl font-bold mb-4 text-purple-700">Car Care</h2>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="flex flex-col gap-2 w-1/4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`text-left px-3 py-2 rounded-md font-medium cursor-pointer text-sm ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-black hover:bg-purple-100"
              }`}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-3/4">
          {allProducts.map((prod, idx) => (
            <div
              key={idx}
              onClick={() => handleProductClick(prod)}
              className="bg-gray-100 rounded-md p-3 flex flex-col items-center text-center shadow-md cursor-pointer hover:shadow-lg"
            >
              <div className="bg-white flex justify-center items-center h-32 w-full mb-2">
                <img
                  src={prod.img || "https://via.placeholder.com/150"}
                  alt={prod.name}
                  className="object-contain max-h-28"
                />
              </div>
              <h3 className="font-semibold text-sm mb-1">{prod.name}</h3>
              <p className="text-xs text-gray-600 mb-1 truncate">{prod.desc}</p>
              <p className="font-bold text-sm">{prod.price}</p>
              <button className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 mt-2 text-xs">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCare;
