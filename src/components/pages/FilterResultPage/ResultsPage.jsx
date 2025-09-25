// src/components/pages/ResultsPage/ResultsPage.jsx
import React, { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import CartSidebar from "../../CartSidebar/CartSidebar";

import brands from "../../../data/brands";
import accessories from "../../../data/accessories";
import carCareData from "../../../data/CarCareData";

// Merge all products
const allData = [...brands, ...accessories, ...carCareData];
const products = allData.flatMap((item) =>
  item.products
    ? item.products
    : item.children?.flatMap((c) => c.products || [])
);

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const { make, model, year } = location.state || {};
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Filter products
  const filteredProducts = products.filter(
    (p) =>
      (!make || p.make?.toLowerCase() === make.toLowerCase()) &&
      (!model || p.model?.toLowerCase() === model.toLowerCase()) &&
      (!year || p.year?.toString() === year.toString())
  );

  const mainProduct = filteredProducts[0];

  // ✅ Related products
  const relatedProducts = useMemo(() => {
    if (!mainProduct) return [];
    const others = products.filter((p) => p !== mainProduct);
    const shuffled = [...others].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [mainProduct]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [mainProduct]);

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
    if (type === "increase") setQuantity(quantity + 1);
  };

  const handleAddToCart = (product, qty = 1) => {
    addToCart({ ...product, quantity: qty });
    setIsSidebarOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* ✅ Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-sm bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
      >
        ⬅ Back
      </button>

      {/* ✅ Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        Results for {make || ""} {model || ""} {year || ""}{" "}
        {mainProduct ? `- ${mainProduct.name}` : ""}
      </h2>

      {/* ✅ Main Product */}
      {mainProduct ? (
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {/* Left: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={mainProduct.img || "https://via.placeholder.com/400"}
              alt={mainProduct.name}
              className="w-64 h-64 object-cover rounded-lg"
            />
          </div>

          {/* Right: Details */}
          <div className="md:w-1/2 flex flex-col justify-start gap-3">
            <h3 className="text-2xl font-bold">{mainProduct.name}</h3>
            <p className="text-gray-600 whitespace-pre-line">
              {mainProduct.desc || "No description available."}
            </p>
            <p className="font-bold text-xl text-red-600">{mainProduct.price}</p>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="px-3 py-1 text-lg font-bold bg-gray-200 hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="px-3 py-1 text-lg font-bold bg-gray-200 hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleAddToCart(mainProduct, quantity)}
                className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500 mt-10">
          No products found for your selection.
        </p>
      )}

      {/* ✅ Related Products */}
      {relatedProducts.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-4">Related Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((product, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center cursor-pointer hover:shadow-md"
              >
                <img
                  src={product.img || "https://via.placeholder.com/150"}
                  alt={product.name}
                  className="w-36 h-36 object-cover rounded mb-2"
                />
                <h4 className="font-semibold text-sm mb-1">{product.name}</h4>
                <p className="text-gray-600 text-xs mb-1">
                  {product.desc || "No description"}
                </p>
                <p className="font-bold text-sm mb-2 text-red-600">
                  {product.price}
                </p>
                <button
                  className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 text-xs"
                  onClick={() => handleAddToCart(product, 1)}
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ✅ Sidebar */}
      <CartSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default ResultsPage;
