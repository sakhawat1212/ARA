// src/components/pages/ResultsPage/ResultsPage.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import products from "../../../data/products";
import { useCart } from "../../../context/CartContext";
import CartSidebar from "../../CartSidebar/CartSidebar";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { make, model, year } = location.state || {};

  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationProduct, setConfirmationProduct] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Filtered products
  const filteredProducts = products.filter(
    (p) =>
      (!make || p.make.toLowerCase() === make.toLowerCase()) &&
      (!model || p.model.toLowerCase() === model.toLowerCase()) &&
      (!year || p.year.toString() === year.toString())
  );

  // Main product
  const mainProduct = filteredProducts[0] || null;

  // Related products
  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== mainProduct?.id &&
        (p.make.toLowerCase() === mainProduct?.make.toLowerCase() ||
          p.category.toLowerCase() === mainProduct?.category.toLowerCase())
    )
    .slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [make, model, year]);

  if (!mainProduct) {
    return (
      <p className="text-center text-red-500 mt-10">
        No products found for this selection.
      </p>
    );
  }

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
    if (type === "increase") setQuantity(quantity + 1);
  };

  const handleAddToCart = (prod, qty = 1, openSidebar = false) => {
    const numericPrice = Number(prod.price.toString().replace(/[^0-9.-]+/g, ""));
    const numericProduct = {
      ...prod,
      quantity: qty,
      price: isNaN(numericPrice) ? 0 : numericPrice,
    };
    addToCart(numericProduct);
    setConfirmationProduct(prod.name);
    setShowConfirmation(true);

    if (openSidebar) setIsSidebarOpen(true);
  };

  const handleProductClick = (prod) => {
    navigate(`/results`, {
      state: { make: prod.make, model: prod.model, year: prod.year },
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Confirmation Banner */}
      {showConfirmation && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 rounded flex justify-between items-center">
          <span className="text-green-800 font-medium">
            {confirmationProduct} has been added to your cart.
          </span>
          <button
            onClick={() => navigate("/cart")}
            className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm"
          >
            View Cart
          </button>
        </div>
      )}

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-sm bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
      >
        ⬅ Back
      </button>

      {/* Page Heading */}
      <h2 className="text-2xl font-bold mb-8 text-center">
        Results for {make || ""} {model || ""} {year || ""}
      </h2>

      {/* Main Product Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={mainProduct.img || "https://via.placeholder.com/400x400"}
            alt={mainProduct.name}
            className="w-[350px] h-[350px] object-cover rounded-lg shadow"
          />
        </div>

        {/* Right: Details */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{mainProduct.name}</h2>
          <p className="text-gray-600 mb-3">{mainProduct.desc}</p>
          <p className="text-xl font-bold text-purple-600 mb-4">
            {mainProduct.price.includes("RS")
              ? mainProduct.price.replace(/^RS/, "RS ")
              : mainProduct.price}
          </p>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-3 mb-4">
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
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-sm"
              onClick={() => handleAddToCart(mainProduct, quantity, true)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <h3 className="text-xl font-semibold mb-4">Related Products</h3>
      {relatedProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((prod) => (
            <div
              key={prod.id}
              className="border rounded-lg shadow p-4 bg-white hover:shadow-md transition flex flex-col items-center text-center cursor-pointer"
              onClick={() => handleProductClick(prod)}
            >
              <img
                src={prod.img || "https://via.placeholder.com/150"}
                alt={prod.name}
                className="w-28 h-28 object-cover mb-3 rounded"
              />
              <h4 className="font-semibold mb-1">{prod.name}</h4>
              <p className="text-sm text-gray-600 mb-1 line-clamp-2">
                {prod.desc}
              </p>
              <p className="font-bold text-purple-600 mb-2">
                {prod.price.includes("RS")
                  ? prod.price.replace(/^RS/, "RS ")
                  : prod.price}
              </p>
              <button
                className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(prod, 1, true);
                }}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No related products found.</p>
      )}

      {/* Sidebar */}
      <CartSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default ResultsPage;
