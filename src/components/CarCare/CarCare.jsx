// src/components/CarCare/CarCare.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import carCareData from "../../data/CarCareData";

// Helper function for slug
const toSlug = (name) => name.toLowerCase().replace(/[\s/]+/g, "-");

const CarCare = () => {
  const navigate = useNavigate();

  // Flatten all products
  const allProducts = [];
  carCareData.forEach((cat) => {
    const topProducts = cat.products || [];
    const childProducts = (cat.children || []).flatMap((c) => c.products || []);
    allProducts.push(...topProducts, ...childProducts);
  });

  // Sidebar - first 10 products
  const sidebarProducts = allProducts.slice(0, 10);

  // Random 6 products for main area
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
  const randomProducts = shuffled.slice(0, 6);

  const handleProductClick = (prod) => {
    navigate(`/carcare/${toSlug(prod.name)}`);
  };

  return (
    <div className="max-w-6xl mx-auto my-8">
      {/* White container box */}
      <div className="bg-white rounded-lg shadow-xl p-6 flex gap-6">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-50 p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-bold mb-4 text-purple-700">CarCare</h2>
          <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto">
            {sidebarProducts.map((prod) => (
              <div
                key={prod.name}
                onClick={() => handleProductClick(prod)}
                className="text-left px-3 py-2 rounded-md font-medium cursor-pointer text-sm bg-gray-200 hover:bg-purple-100 transition"
              >
                {prod.name}
              </div>
            ))}
          </div>
        </div>

        {/* Random products */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {randomProducts.map((prod) => (
            <div
              key={prod.name}
              className="bg-gray-50 rounded-lg shadow-md flex flex-col cursor-pointer overflow-hidden transition hover:shadow-lg"
            >
              {/* Image Box */}
              <div
                className="bg-white flex justify-center items-center h-40 border-b"
                onClick={() => handleProductClick(prod)}
              >
                <img
                  src={prod.img || "https://via.placeholder.com/150"}
                  alt={prod.name}
                  className="max-h-32 object-contain"
                />
              </div>

              {/* Info Section */}
              <div className="p-3 flex flex-col text-center">
                <h3 className="font-semibold text-sm mb-1">{prod.name}</h3>
                <p className="font-bold text-sm mb-2">{prod.price}</p>
                <button
                  className="bg-yellow-400 px-3 py-1 rounded-md hover:bg-yellow-500 text-sm transition"
                  onClick={() => handleProductClick(prod)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCare;
