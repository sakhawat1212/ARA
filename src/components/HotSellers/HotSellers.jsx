// src/components/HotSellers/HotSellers.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import hotSellers from "../../data/hotSellers";

const HotSellers = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-6xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6">Hot Sellers</h2>

      <div className="flex flex-wrap gap-4 justify-between">
        {hotSellers.slice(0, 5).map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-md p-3 w-52 flex flex-col items-center text-center cursor-pointer"
          >
            {/* Make image and name clickable */}
            <div
              onClick={() => navigate(`/hot-seller/${product.id}`)}
              className="flex flex-col items-center"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-24 h-24 object-cover mb-2"
              />
              <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
            </div>

            <p className="text-xs text-gray-600 mb-1 truncate">{product.desc}</p>
            <p className="font-bold text-sm mb-1">{product.price}</p>

            <button
              onClick={() => navigate(`/hot-seller/${product.id}`)}
              className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 text-xs"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotSellers;
