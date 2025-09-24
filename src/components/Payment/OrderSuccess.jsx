// src/components/Payment/OrderSuccess.jsx
import React from "react";

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        🎉 Order Placed Successfully!
      </h1>
      <p className="text-gray-700 mb-6">
        Thank you for your purchase. Your payment has been received and your
        order is being processed.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Back to Home
      </button>
    </div>
  );
};

export default OrderSuccess;
