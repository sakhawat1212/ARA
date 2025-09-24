// src/components/DetailPageLayout/DetailPageLayout.jsx
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const DetailPageLayout = ({ children }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationProduct, setConfirmationProduct] = useState("");

  const handleAddToCart = (product) => {
    addToCart(product);
    setConfirmationProduct(product.name);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  return (
    <div>
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
      {/* Pass children = the actual page content */}
      {children(handleAddToCart)}
    </div>
  );
};

export default DetailPageLayout;
