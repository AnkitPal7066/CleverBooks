// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-4">
              <span className="text-purple-500">Clever</span>Books
            </div>
            <p>
              CleverBooks is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="font-bold text-xl mb-4">Explore</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Product</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Pricing</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Customer Stories</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Career</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="font-bold text-xl mb-4">Learn</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">About us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="font-bold text-xl mb-4">Contact CleverBooks</h2>
            <p className="mb-2">sales@getcrest.ai</p>
            <p className="mb-2">Registered Office:<br />1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102</p>
            <p>Corporate Office:<br />291, All Time Space, 4th Floor, 15th A Cross, Sector - 6, HSR Layout, Bengaluru, India. 560102</p>
          </div>
          <div className="w-full md:w-1/2 flex items-end justify-end">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-800">
          <p>Copyright 2024 Crest</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          <p>Conifer Innovations Private Limited<br />CIN: U72900KA2022PTC163144</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;