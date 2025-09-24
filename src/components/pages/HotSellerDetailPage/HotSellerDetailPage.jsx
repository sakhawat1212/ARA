// src/components/pages/HotSellerDetailPage/HotSellerDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import hotSellers from "../../../data/hotSellers";
import { useCart } from "../../../context/CartContext";
import CartSidebar from "../../CartSidebar/CartSidebar";

const HotSellerDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationProduct, setConfirmationProduct] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Update current product whenever id changes
  useEffect(() => {
    const found = hotSellers.find((p) => p.id === parseInt(id));
    setCurrentProduct(found || null);
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!currentProduct) {
    return <p className="text-center text-red-500 mt-10">Product not found</p>;
  }

  // Related products (same category, exclude current)
  const relatedProducts = hotSellers
    .filter(
      (p) => p.category === currentProduct.category && p.id !== currentProduct.id
    )
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

      {/* Main Product Section */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6 mb-10">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={currentProduct.img || "https://placehold.co/400x400"}
            alt={currentProduct.name}
            className="w-full h-80 object-cover rounded"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{currentProduct.name}</h2>
            <p className="text-gray-600 mb-3">{currentProduct.desc}</p>
            {/* RS with space */}
            <p className="text-xl font-semibold mb-4">
              {currentProduct.price.includes("RS") 
                ? currentProduct.price.replace(/^RS/, "RS ") 
                : currentProduct.price}
            </p>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="bg-gray-300 px-3 py-1 rounded"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increase")}
              className="bg-gray-300 px-3 py-1 rounded"
            >
              +
            </button>
            <button
              onClick={() => handleAddToCart(currentProduct, quantity, true)}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-yellow-500 font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-4">Related Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((rp) => (
              <div
                key={rp.id}
                className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center cursor-pointer hover:shadow-md"
                onClick={() => navigate(`/hot-seller/${rp.id}`)}
              >
                <img
                  src={rp.img || "https://placehold.co/150x150"}
                  alt={rp.name}
                  className="w-36 h-36 object-cover rounded mb-2"
                />
                <h4 className="font-semibold text-sm mb-1">{rp.name}</h4>
                <p className="text-gray-600 text-xs mb-1">{rp.desc}</p>
                {/* RS with space */}
                <p className="font-bold text-sm mb-2">
                  {rp.price.includes("RS") 
                    ? rp.price.replace(/^RS/, "RS ") 
                    : rp.price}
                </p>
                <button
                  className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(rp, 1, true);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Sidebar */}
      <CartSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
};

export default HotSellerDetailPage;
