// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to Cart
  const addToCart = (product, fromRelated = false) => {
    setCartItems((prev) => {
      if (!fromRelated) {
        // Main product → merge by ID
        const existing = prev.find(
          (item) => item.id === product.id && !item.fromRelated
        );
        if (existing) {
          return prev.map((item) =>
            item.id === product.id && !item.fromRelated
              ? { ...item, quantity: item.quantity + (product.quantity || 1) }
              : item
          );
        }
      }

      // Related product or force new → unique cartId
      return [
        ...prev,
        {
          ...product,
          cartId: Date.now() + Math.random(),
          fromRelated,
          quantity: product.quantity || 1,
        },
      ];
    });
  };

  // Remove item
  const removeFromCart = (cartId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Increase quantity
  const increaseQuantity = (cartId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartId === cartId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (cartId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
