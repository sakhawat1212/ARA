import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const [showLogin, setShowLogin] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [receiveOffers, setReceiveOffers] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false); // ✅ New state

  const navigate = useNavigate();
  const location = useLocation(); 
  const fromSidebar = location.state?.fromSidebar || false;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const handlePopState = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const getPriceNumber = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string") return parseFloat(price.replace(/[^\d.-]/g, "")) || 0;
    return 0;
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
    0
  );

  const shipping = subtotal > 1000 ? 0 : 50;
  const delivery = 250;
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shipping + delivery - discount;

  const handleApplyCoupon = () => {
    if (couponCode.trim().toLowerCase() === "save10") {
      setCouponApplied(true);
      alert("Coupon applied successfully!");
    } else {
      alert("Invalid coupon code");
      setCouponApplied(false);
    }
  };

  // ✅ New handler for place order
  const handlePlaceOrder = () => {
    setOrderPlaced(true);

    // Optionally, scroll to top to show the message
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* ✅ Order Placed Message */}
      {orderPlaced && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 rounded text-green-800 font-medium text-center">
          🎉 Order Placed Successfully!
        </div>
      )}

      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-sm bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
      >
        ⬅ Back
      </button>

      {fromSidebar && (
        <div className="mb-4 p-4 bg-blue-100 border border-blue-400 rounded flex justify-between items-center">
          <span className="text-blue-800 font-medium">You can review your cart before checkout.</span>
          <button
            onClick={() => navigate("/cart")}
            className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm"
          >
            View Cart
          </button>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Returning customer / Coupon Section */}
      <div className="mb-4 space-y-3">
        <div
          className="p-3 border rounded cursor-pointer bg-gray-50"
          onClick={() => setShowLogin(!showLogin)}
        >
          Returning customer? <span className="text-blue-600">Click here to login</span>
        </div>
        {showLogin && (
          <div className="p-4 border rounded mb-3">
            <input type="text" placeholder="Email" className="border px-3 py-2 w-full mb-2" />
            <input type="password" placeholder="Password" className="border px-3 py-2 w-full mb-2" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
          </div>
        )}

        <div
          className="p-3 border rounded cursor-pointer bg-gray-50"
          onClick={() => setShowCoupon(!showCoupon)}
        >
          Have a coupon? <span className="text-blue-600">Click here to enter your code</span>
        </div>
        {showCoupon && (
          <div className="p-4 border rounded mb-3 flex gap-2">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border px-3 py-2 flex-1"
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Apply
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Billing & Shipping Details</h2>
          <form className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="First Name" className="border px-3 py-2 w-full" />
              <input type="text" placeholder="Last Name" className="border px-3 py-2 w-full" />
            </div>
            <input type="text" placeholder="Country" className="border px-3 py-2 w-full" />
            <input type="text" placeholder="Street Address Line 1" className="border px-3 py-2 w-full" />
            <input type="text" placeholder="Street Address Line 2 (optional)" className="border px-3 py-2 w-full" />
            <input type="text" placeholder="Town / City" className="border px-3 py-2 w-full" />
            <input type="text" placeholder="State / Country" className="border px-3 py-2 w-full" />
            <div className="grid grid-cols-2 gap-3">
              <input type="tel" placeholder="Phone" className="border px-3 py-2 w-full" />
              <input type="email" placeholder="Email Address" className="border px-3 py-2 w-full" />
            </div>
            <input type="text" placeholder="How did you find us?" className="border px-3 py-2 w-full" />

            <div className="flex items-center gap-2">
              <input type="checkbox" checked={createAccount} onChange={(e) => setCreateAccount(e.target.checked)} />
              <label>Create an account?</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" checked={receiveOffers} onChange={(e) => setReceiveOffers(e.target.checked)} />
              <label>Receive discounts & sale offers</label>
            </div>

            <h3 className="font-semibold mt-4">Additional Information</h3>
            <textarea placeholder="Order notes (optional)" className="border px-3 py-2 w-full"></textarea>
          </form>
        </div>

        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>

          <div className="border-b pb-2 mb-2">
            {cartItems.map((item, idx) => {
              const priceNum = getPriceNumber(item.price);
              return (
                <div key={idx} className="flex justify-between mb-1">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>RS {(priceNum * item.quantity).toFixed(2)}</span>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>RS {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `RS ${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Charges</span>
            <span>RS {delivery.toFixed(2)}</span>
          </div>
          {couponApplied && (
            <div className="flex justify-between mb-2 text-green-600">
              <span>Coupon Discount</span>
              <span>-RS {(subtotal * 0.1).toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total</span>
            <span>RS {total.toFixed(2)}</span>
          </div>

          <div className="mt-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
              <span>I agree to the Terms & Conditions</span>
            </label>
          </div>

          {/* ✅ Updated Place Order Button */}
          <button
            disabled={!agreeTerms}
            className={`mt-4 w-full py-2 rounded ${
              agreeTerms
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
