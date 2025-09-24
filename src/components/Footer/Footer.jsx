import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 text-white mt-12 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About / Brand */}
        <div>
          <h2 className="text-xl font-extrabold mb-4 tracking-wide">AutoParts Store</h2>
          <p className="text-sm leading-relaxed opacity-90">
            Your one-stop shop for all car accessories, care products, and parts.
            <br /> High quality and trusted brands.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-extrabold mb-4 tracking-wide">Quick Links</h2>
          <ul className="text-sm space-y-3">
            <li>
              <a href="/home" className="hover:text-yellow-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="/brands" className="hover:text-yellow-400 transition-colors">Brands</a>
            </li>
            <li>
              <a href="/accessories" className="hover:text-yellow-400 transition-colors">Accessories</a>
            </li>
            <li>
              <a href="/carcare" className="hover:text-yellow-400 transition-colors">Car Care</a>
            </li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h2 className="text-xl font-extrabold mb-4 tracking-wide">Contact Us</h2>
          <p className="text-sm mb-2 opacity-90">Email: support@autoparts.com</p>
          <p className="text-sm mb-4 opacity-90">Phone: +92 300 1234567</p>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-yellow-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Instagram</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm border-t border-purple-500/40 py-5 opacity-80">
        &copy; {new Date().getFullYear()} AutoParts Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
