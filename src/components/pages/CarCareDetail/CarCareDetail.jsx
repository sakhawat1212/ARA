// src/components/pages/CarCareDetail/CarCareDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import carCareData from "../../../data/CarCareData";
import { useCart } from "../../../context/CartContext";
import CartSidebar from "../../CartSidebar/CartSidebar"; 

// Slug helper
const toSlug = (name) => name.toLowerCase().replace(/[\s/]+/g, "-");

const CarCareDetail = () => {
  const { productName } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationProduct, setConfirmationProduct] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Flatten all products
  const allProducts = [];
  carCareData.forEach((category) => {
    const topProducts = category.products || [];
    const childProducts = (category.children || []).flatMap(
      (child) => child.products || []
    );
    allProducts.push(...topProducts, ...childProducts);
  });

  // Find main product
  const mainProduct =
    allProducts.find((p) => toSlug(p.name) === productName) || allProducts[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [productName]);

  if (!mainProduct)
    return <p className="text-center text-red-500 mt-10">Product not found</p>;

  // Related products
  const relatedProducts = allProducts
    .filter((p) => toSlug(p.name) !== toSlug(mainProduct.name))
    .slice(0, 4);

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

  const handleProductClick = (prod) =>
    navigate(`/carcare/${toSlug(prod.name)}`);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* ✅ Confirmation Banner */}
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

      {/* ✅ Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-sm bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
      >
        ⬅ Back
      </button>

      {/* ✅ Main Product Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Left: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={mainProduct.img || "https://via.placeholder.com/150"}
            alt={mainProduct.name}
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 flex flex-col justify-start gap-3">
          <h2 className="text-2xl font-bold">{mainProduct.name}</h2>
          <p className="text-gray-600">{mainProduct.desc}</p>
          <p className="font-bold text-xl">
            {mainProduct.price.includes("RS") 
              ? mainProduct.price.replace(/^RS/, "RS ") 
              : mainProduct.price}
          </p>

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
              onClick={() => handleAddToCart(mainProduct, quantity, true)}
              className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Related Products */}
      {relatedProducts.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-4">Related Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((prod, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center cursor-pointer hover:shadow-md"
                onClick={() => handleProductClick(prod)}
              >
                <img
                  src={prod.img || "https://via.placeholder.com/150"}
                  alt={prod.name}
                  className="w-36 h-36 object-cover rounded mb-2"
                />
                <h4 className="font-semibold text-sm mb-1">{prod.name}</h4>
                <p className="text-gray-600 text-xs mb-1">{prod.desc}</p>
                <p className="font-bold text-sm mb-2">
                  {prod.price.includes("RS") 
                    ? prod.price.replace(/^RS/, "RS ") 
                    : prod.price}
                </p>
                <button
                  className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 text-xs"
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

export default CarCareDetail;
