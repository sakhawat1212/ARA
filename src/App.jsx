// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/pages/HomePage/HomePage";
import FilterBar from "./components/FilterBar/FilterBar";
import HotSellers from "./components/HotSellers/HotSellers";
import CarCare from "./components/CarCare/CarCare";
import CarCareDetail from "./components/pages/CarCareDetail/CarCareDetail"; 
import AccessoriesDetailPage from "./components/pages/AccessoriesDetailPage/AccessoriesDetailPage";
import AccessoriesSection from "./components/Accessories/AccessoriesSection";
import accessories from "./data/accessories";
import Footer from "./components/footer/Footer";
import ResultsPage from "./components/pages/FilterResultPage/ResultsPage";
import HotSellerDetailPage from "./components/pages/HotSellerDetailPage/HotSellerDetailPage";
import BrandDetailPage from "./components/pages/BrandDetailPage/BrandDetailPage";
import CartPage from "./components/Cart/CartPage"; 
import CheckoutPage from "./components/Checkout/CheckoutPage"; 
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import PaymentPage from "./components/Payment/PaymentPage";
import OrderSuccess from "./components/Payment/OrderSuccess";
import BrandsSection from "./components/BrandsSection/BrandsSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="bg-gray-100 min-h-screen flex flex-col">
          <Router>
            <TopBar />       {/* ✅ TopBar contains CartSidebar */}
            <Navbar />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />

                <Route
                  path="/home"
                  element={
                    <div className="space-y-6">
                      <HomePage />
                      <FilterBar />
                      <HotSellers />
                      <CarCare />
                      {accessories.map((category) => (
                        <AccessoriesSection key={category.name} category={category} />
                      ))}
                      <BrandsSection /> 
                      <FeaturesSection />
                    </div>
                  }
                />

                <Route path="/carcare" element={<CarCare />} />
                <Route path="/carcare/:productName" element={<CarCareDetail />} />
                <Route path="/accessories/:productName" element={<AccessoriesDetailPage />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/hot-seller/:id" element={<HotSellerDetailPage />} />
                <Route path="/brands/:brandName" element={<BrandDetailPage />} />

                {/* Cart & Checkout */}
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} /> 
                <Route path="/payment" element={<PaymentPage />} /> 
                <Route path="/order-success" element={<OrderSuccess />} /> 
              </Routes>
            </main>
            
            <Footer />
            {/* ❌ Removed duplicate <CartSidebar /> */}
          </Router>
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
