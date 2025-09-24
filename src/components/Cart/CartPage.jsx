// src/components/Cart/CartPage.jsx
import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [includeDelivery, setIncludeDelivery] = useState(true);
  const navigate = useNavigate();

  // Address State
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [address, setAddress] = useState({
    country: "Pakistan",
    state: "Sindh",
    city: "Karachi",
    zip: "74000",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper to ensure price is a number
  const getPriceNumber = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string")
      return parseFloat(price.replace(/[^\d.-]/g, "")) || 0;
    return 0;
  };

  // Subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
    0
  );

  const shipping = subtotal > 1000 ? 0 : 50;
  const deliveryCharges = includeDelivery ? 250 : 0;
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const total = subtotal - discount + shipping + deliveryCharges;

  const handleApplyCoupon = () => {
    if (couponCode.trim().toLowerCase() === "save10") {
      alert("Coupon applied! 10% discount added.");
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code");
      setCouponApplied(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-sm bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
      >
        ⬅ Back
      </button>

      <h1 className="text-2xl font-bold mb-6">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items Table */}
          <table className="w-full border border-gray-300 mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Name</th>
                <th className="border px-3 py-2">Price</th>
                <th className="border px-3 py-2">Quantity</th>
                <th className="border px-3 py-2">Subtotal</th>
                <th className="border px-3 py-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => {
                const priceNum = getPriceNumber(item.price);
                return (
                  <tr key={idx} className="text-center">
                    <td className="border px-3 py-2">{item.name}</td>
                    <td className="border px-3 py-2">RS {priceNum}</td>
                    <td className="border px-3 py-2">{item.quantity}</td>
                    <td className="border px-3 py-2">
                      RS {priceNum * item.quantity}
                    </td>
                    <td className="border px-3 py-2">
                      <button
                        onClick={() => {
                          if (!item.id) return; // safety check
                          removeFromCart(item.id);
                        }}
                        className="text-red-500 text-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Coupon & Delivery */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex gap-2 flex-1">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="border px-3 py-2 flex-1"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Apply Coupon
              </button>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={includeDelivery}
                onChange={(e) => setIncludeDelivery(e.target.checked)}
              />
              <label>Include Delivery Charges (RS 250)</label>
            </div>
          </div>

          {/* Address Section */}
          <div className="border p-4 rounded mb-6">
            <h2 className="font-semibold text-lg mb-2">Delivery Address</h2>

            {isEditingAddress ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Country / Region
                  </label>
                  <input
                    type="text"
                    value={address.country}
                    onChange={(e) =>
                      setAddress({ ...address, country: e.target.value })
                    }
                    className="border px-3 py-2 w-full rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    State / County
                  </label>
                  <input
                    type="text"
                    value={address.state}
                    onChange={(e) =>
                      setAddress({ ...address, state: e.target.value })
                    }
                    className="border px-3 py-2 w-full rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    value={address.city}
                    onChange={(e) =>
                      setAddress({ ...address, city: e.target.value })
                    }
                    className="border px-3 py-2 w-full rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Postcode / ZIP
                  </label>
                  <input
                    type="text"
                    value={address.zip}
                    onChange={(e) =>
                      setAddress({ ...address, zip: e.target.value })
                    }
                    className="border px-3 py-2 w-full rounded"
                  />
                </div>

                <button
                  onClick={() => setIsEditingAddress(false)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm"
                >
                  Save Address
                </button>
              </div>
            ) : (
              <>
                <p>
                  {address.country}, {address.state}, {address.city},{" "}
                  {address.zip}
                </p>
                <button
                  onClick={() => setIsEditingAddress(true)}
                  className="mt-2 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-sm"
                >
                  Change Address
                </button>
              </>
            )}
          </div>

          {/* Totals Section */}
          <div className="border p-4 rounded w-full md:w-1/2">
            <h2 className="font-semibold text-lg mb-3">Cart Totals</h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>RS {subtotal.toFixed(2)}</span>
            </div>
            {couponApplied && (
              <div className="flex justify-between mb-2 text-green-600">
                <span>Coupon Discount (10%):</span>
                <span>-RS {discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>
                {shipping === 0 ? "Free" : `RS ${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Charges:</span>
              <span>RS {deliveryCharges.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-bold text-lg mt-2">
              <span>Total:</span>
              <span>RS {total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
