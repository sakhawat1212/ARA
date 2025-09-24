import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    accountNumber: "",
  });

  useEffect(() => {
    // ✅ Page load pe scroll top
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment successful! ✅ Order placed.");
    navigate("/order-success");
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-sm bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
      >
        ⬅ Back
      </button>

      <h1 className="text-2xl font-bold mb-4">Payment Details</h1>

      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="border px-3 py-2 w-full rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            required
            className="border px-3 py-2 w-full rounded"
            placeholder="1234 5678 9012 3456"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1">Expiry Date</label>
            <input
              type="text"
              name="expiry"
              value={form.expiry}
              onChange={handleChange}
              required
              className="border px-3 py-2 w-full rounded"
              placeholder="MM/YY"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1">CVV</label>
            <input
              type="password"
              name="cvv"
              value={form.cvv}
              onChange={handleChange}
              required
              className="border px-3 py-2 w-full rounded"
              placeholder="123"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1">Bank Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={form.accountNumber}
            onChange={handleChange}
            required
            className="border px-3 py-2 w-full rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Pay & Place Order
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
