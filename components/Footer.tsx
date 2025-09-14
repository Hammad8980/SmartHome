"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-['Pacifico'] text-2xl text-blue-400 mb-4">
              SecureHome
            </h3>
            <p className="text-gray-300 mb-4">
              Professional smart home security automation solutions with 24/7
              monitoring and support.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:text-blue-400">
                <i className="ri-facebook-fill"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:text-blue-400">
                <i className="ri-twitter-fill"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:text-blue-400">
                <i className="ri-instagram-fill"></i>
              </div>
              <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:text-blue-400">
                <i className="ri-linkedin-fill"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Electric Fencing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  CCTV Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Solar Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Biometric Access Control
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  GSM Communication
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line"></i>
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-line"></i>
                </div>
                <span>info@securehome.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 flex items-center justify-center mt-1">
                  <i className="ri-map-pin-line"></i>
                </div>
                <span>
                  123 Security Street
                  <br />
                  Tech City, TC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              &copy; 2024 SecureHome. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
