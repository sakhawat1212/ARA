// src/components/pages/BrandDetailPage/BrandDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import brands from "../../../data/brands";
import { useCart } from "../../../context/CartContext";
import CartSidebar from "../../CartSidebar/CartSidebar";

const BrandDetailPage = () => {
  const { brandName, productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationProduct, setConfirmationProduct] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ✅ Helper: safe price number
  const getPriceNumber = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string") {
      const num = parseFloat(price.replace(/[^\d.-]/g, ""));
      return isNaN(num) ? 0 : num;
    }
    return 0;
  };

  // Find brand
  const brand = brands.find(
    (b) => b.name.toLowerCase().replace(/\s+/g, "-") === brandName
  );

  if (!brand) {
    return <p className="text-center text-red-500 mt-10">Brand not found</p>;
  }

  // Main product
  let mainProduct = brand.products[0];
  if (productId) {
    const found = brand.products.find(
      (p) => Number(p.id) === Number(productId)
    );
    if (found) mainProduct = found;
  }

  // Related products: show ALL other products
  const relatedProducts = brand.products.filter(
    (p) => Number(p.id) !== Number(mainProduct.id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [brandName, mainProduct.id]);

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
    if (type === "increase") setQuantity(quantity + 1);
  };

  const handleAddToCart = (prod, qty = 1, openSidebar = false, fromRelated = false) => {
    const numericPrice = getPriceNumber(prod.price);
    const numericProduct = {
      ...prod,
      quantity: qty,
      price: numericPrice,
    };
    addToCart(numericProduct, fromRelated);
    setConfirmationProduct(prod.name);
    setShowConfirmation(true);

    if (openSidebar) {
      setIsSidebarOpen(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
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
        className="mb-4 flex items-center gap-2 text-sm bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
      >
        ⬅ Back
      </button>

      {/* Main Product */}
      <div className="flex flex-col md:flex-row gap-10 mb-10 items-start">
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white border rounded-lg flex items-center justify-center h-80 w-80 shadow-md">
            <img
              src={mainProduct.img}
              alt={mainProduct.name}
              className="max-h-72 object-contain"
              onError={(e) => (e.target.src = "https://placehold.co/300x300")}
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{mainProduct.name}</h2>
          <p className="text-gray-600">{mainProduct.desc}</p>
          <p className="font-bold text-2xl text-red-600">
            PKR {getPriceNumber(mainProduct.price)}
          </p>

          <div className="flex items-center gap-4 mt-2">
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
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-4">Related Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((rp) => (
              <div
                key={rp.id}
                className="bg-white rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg overflow-hidden"
                onClick={() => navigate(`/brand/${brandName}/${rp.id}`)}
              >
                <div className="bg-white flex justify-center items-center h-40 border-b w-full">
                  <img
                    src={rp.img}
                    alt={rp.name}
                    className="max-h-32 object-contain"
                    onError={(e) =>
                      (e.target.src = "https://placehold.co/150x150")
                    }
                  />
                </div>
                <div className="p-3 flex flex-col text-center">
                  <h4 className="font-semibold text-sm mb-1">{rp.name}</h4>
                  <p className="text-gray-600 text-xs mb-1 truncate">
                    {rp.desc}
                  </p>
                  <p className="font-bold text-sm mb-2">
                    PKR {getPriceNumber(rp.price)}
                  </p>
                  <button
                    className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-500 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(rp, 1, true, true); // 👈 fromRelated = true
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <CartSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default BrandDetailPage;
