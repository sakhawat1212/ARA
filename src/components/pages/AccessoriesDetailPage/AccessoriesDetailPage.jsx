// src/components/pages/AccessoriesDetailPage/AccessoriesDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import accessories from "../../../data/accessories";
import { useCart } from "../../../context/CartContext";
import CartSidebar from "../../CartSidebar/CartSidebar"; // ✅ Sidebar import

const toSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

const AccessoriesDetailPage = () => {
  const { productName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationProduct, setConfirmationProduct] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 🔹 Reset state + scroll top whenever product changes OR page changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [productName, location.key]);

  // 🔹 Flatten all products with category info
  const allProducts = accessories.flatMap((category) =>
    (category.children || []).map((item) => ({
      ...item,
      category: category.name,
    }))
  );

  // 🔹 Find main product
  const mainProduct =
    allProducts.find((p) => toSlug(p.name) === productName) || allProducts[0];

  if (!mainProduct) {
    return <h2 className="p-6 text-center text-red-500">Product not found</h2>;
  }

  // 🔹 Related products (same category, exclude main) → show ALL, not just 3–4
  const relatedProducts = allProducts.filter(
    (p) =>
      p.category === mainProduct.category &&
      toSlug(p.name) !== toSlug(mainProduct.name)
  );

  // 🔹 Quantity control
  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
    if (type === "increase") setQuantity(quantity + 1);
  };

  // 🔹 Add to cart
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

    if (openSidebar) {
      setIsSidebarOpen(true); // ✅ open sidebar
    }
  };

  // 🔹 Navigate to product details
  const handleProductClick = (prod) =>
    navigate(`/accessories/${toSlug(prod.name)}`);

  return (
    <div className="max-w-6xl mx-auto p-6">
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
        className="mb-6 flex items-center gap-2 text-sm bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
      >
        ⬅ Back
      </button>

      {/* ✅ Main Product Section (same style as HotSeller) */}
      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        {/* Left: Product Image */}
        <div className="flex justify-center">
          <img
            src={mainProduct.img || "https://placehold.co/400x400"}
            alt={mainProduct.name}
            className="w-[350px] h-[350px] object-cover rounded-lg shadow"
          />
        </div>

        {/* Right: Product Details */}
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

      {/* ✅ Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-4">Related Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((r, idx) => (
              <div
                key={idx}
                className="border rounded-lg shadow p-4 bg-white hover:shadow-md transition flex flex-col items-center text-center cursor-pointer"
                onClick={() => handleProductClick(r)}
              >
                <img
                  src={r.img || "https://placehold.co/150x150"}
                  alt={r.name}
                  className="w-28 h-28 object-cover mb-3 rounded"
                />
                <h4 className="font-semibold mb-1">{r.name}</h4>
                <p className="text-sm text-gray-600 mb-1 line-clamp-2">
                  {r.desc}
                </p>
                <p className="font-bold text-purple-600 mb-2">
                  {r.price.includes("RS") 
                    ? r.price.replace(/^RS/, "RS ") 
                    : r.price}
                </p>
                <button
                  className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(r, 1, true);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ✅ Sidebar */}
      <CartSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default AccessoriesDetailPage;
