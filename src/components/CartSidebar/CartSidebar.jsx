// src/components/CartSidebar/CartSidebar.jsx
import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Helper to ensure price is always a number
  const getPriceNumber = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string")
      return parseFloat(price.replace(/[^\d.-]/g, "")) || 0;
    return 0;
  };

  // ✅ Subtotal calculation
  const subtotal = cartItems.reduce(
    (acc, item) => acc + getPriceNumber(item.price) * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">My Cart</h2>
          <button onClick={onClose} className="text-gray-600 text-2xl">
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[65%]">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="border-b pb-3 flex flex-col gap-2">
                {/* Name in Red */}
                <span className="text-red-600 font-semibold text-base">
                  {item.name}
                </span>

                {/* Price */}
                <span className="text-gray-700 font-medium">
                  PKR {getPriceNumber(item.price)}
                </span>

                {/* Description */}
                {item.desc && (
                  <p className="text-sm text-gray-500">{item.desc}</p>
                )}

                {/* Quantity Box */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => addToCart({ ...item, quantity: 1 })}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Subtotal & Buttons */}
        <div className="border-t p-4 bg-gray-50">
          <div className="flex justify-between font-semibold mb-4">
            <span>Subtotal:</span>
            <span>PKR {subtotal.toFixed(2)}</span>
          </div>
          <button
            onClick={() => {
              navigate("/cart");
              onClose();
            }}
            className="w-full bg-gray-800 text-white py-2 rounded mb-2 hover:bg-gray-900"
          >
            View My Cart
          </button>
          <button
            onClick={() => navigate("/checkout", { state: { fromSidebar: true } })}
             className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
             >
             Go to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
