import React, { useState, useRef, useEffect } from "react";
import techImage1 from "../assets/tech1.jpg";
import techImage2 from "../assets/tech2.jpg";
import techImage3 from "../assets/tech3.jpg";
import techImage4 from "../assets/tech4.jpg";
import techImage5 from "../assets/tech5.jpg";

import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { TfiPinterest } from "react-icons/tfi";
import { FaVimeoV } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import { IoSearch, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import "../style/style.scss";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuRef]);

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-80 bg-black text-white h-full z-50 p-4 transition-transform transform-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transition: "transform 0.5s ease" }}
      >
        <div className="flex justify-between items-center pl-10">
          <img
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark@2x.png"
            alt="Tech Blog Logo"
            className="h-8"
          />
          <button onClick={() => setSidebarOpen(false)} className="text-white">
            <IoClose size={24} />
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Subscribe to Updates</h2>
          <p className="text-sm mt-2">
            Get the latest creative news from FooBar about art, design and
            business.
          </p>
          <input
            type="email"
            placeholder="Your email address..."
            className="w-full p-2 mt-4 bg-gray-800 border border-gray-700 rounded"
          />
          <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded">
            SUBSCRIBE
          </button>
          <div className="text-xs mt-2">
            By signing up, you agree to our terms and our Privacy Policy
            agreement.
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-md font-semibold">WHAT'S HOT</h3>
          <div className="mt-4 	cursor:auto;">
            <div className="flex items-center space-x-4 mb-4 hover:bg-gray-700 transition-colors duration-300">
              <img
                src={techImage1}
                alt="Tech 1"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h4 className="text-sm font-medium text-gray-300">
                  Game Development This Week: Save On Essential Tools and More
                </h4>
                <p className="text-xs text-gray-500">Nov 19, 2022</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4 hover:bg-gray-700 transition-colors duration-300">
              <img
                src={techImage2}
                alt="Tech 2"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h4 className="text-sm font-medium text-gray-300">
                  Is the Hyperloop Doomed? What Elon Musk's Latest Setback
                  Really Means
                </h4>
                <p className="text-xs text-gray-500">Mar 10, 2022</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4 hover:bg-gray-700 transition-colors duration-300">
              <img
                src={techImage3}
                alt="Tech 3"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h4 className="text-sm font-medium text-gray-300">
                  The Best Early Black Friday Deals on Gaming Laptops and
                  Accessories
                </h4>
                <p className="text-xs text-gray-500">Mar 10, 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-3 mt-auto justify-center  p-36 rounded-full">
          <a href="#" className="text-white hover:text-blue-600">
            <RiFacebookFill size={24} />
          </a>
          <a
            href="#"
            className="text-white  bg-color-white-900 hover:text-blue-600 "
          >
            <FaXTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-600">
            <IoLogoInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Upper section */}
      <div className="bg-black text-white flex justify-center p-2">
        <div className="container flex justify-between items-center max-w-7xl mx-auto px-4">
          <div className="flex space-x-4">
            <a href="#" className="text-sm">
              Start Here
            </a>
            <a href="#" className="text-sm">
              Demos
            </a>
            <a href="#" className="text-sm">
              Contact
            </a>
            <a href="#" className="text-sm">
              Buy Now
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-sm hover:text-blue-600 transition-colors duration-300"
            >
              <RiFacebookFill size={16} />
            </a>
            <a
              href="#"
              className="text-sm hover:text-blue-600 transition-colors duration-300"
            >
              <FaXTwitter size={16} />
            </a>
            <a
              href="#"
              className="text-sm hover:text-blue-600 transition-colors duration-300"
            >
              <IoLogoInstagram size={16} />
            </a>
            <a
              href="#"
              className="text-sm hover:text-blue-600 transition-colors duration-300"
            >
              <TfiPinterest size={16} />
            </a>
            <a
              href="#"
              className="text-sm hover:text-blue-600 transition-colors duration-300"
            >
              <FaVimeoV size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Header section */}
      <div className="bg-white shadow-md flex justify-center p-4">
        <div className="container flex justify-between items-center max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(true)} className="text-2xl">
              <GiHamburgerMenu color="#3C3FDE" />
            </button>
            <img
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png"
              alt="Tech Blog Logo"
            />
          </div>
          <div className="flex space-x-8 justify-center">
            <a href="#" className="text-lg relative font-medium">
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <div className="group relative">
              <button className="text-lg flex items-center font-medium">
                Features <MdKeyboardArrowDown />
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-white shadow-lg transition-transform duration-300">
                <a href="#" className="block p-2">
                  Feature 1
                </a>
                <a href="#" className="block p-2">
                  Feature 2
                </a>
              </div>
            </div>
            <div className="group relative" ref={menuRef}>
              <button
                className="text-lg flex items-center font-medium"
                onMouseEnter={() => setMenuOpen(true)}
              >
                Technology <MdKeyboardArrowDown />
              </button>
              <div
                className={` z-30 absolute left-1/2 transform -translate-x-1/2 mt-4 ${
                  menuOpen ? "block" : "hidden"
                } bg-white shadow-lg transition-transform duration-300 p-4 grid grid-cols-5 gap-0 w-[1200px] h-72`}
              >
                <a
                  href="#"
                  className="block p-2 w-48 gap-5 hover:bg-gray-100 transition-colors duration-300"
                >
                  <img
                    src={techImage1}
                    alt="Tech 1"
                    className="w-full h-28 object-cover rounded-md"
                  />
                  <p className="mt-2 text-sm font-medium hover:text-blue-600 transition-colors duration-300">
                    Is the Hyperloop Doomed? What Elon Musk's Latest Setback
                    Really Means
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Mar 10, 2022</p>
                </a>
                <a
                  href="#"
                  className="block p-2 w-48 hover:bg-gray-100 transition-colors duration-300"
                >
                  <img
                    src={techImage2}
                    alt="Tech 2"
                    className="w-full h-28 object-cover rounded-md"
                  />
                  <p className="mt-2 text-sm font-medium hover:text-blue-600 transition-colors duration-300">
                    The Best Early Black Friday Deals on Gaming Laptops and
                    Accessories
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Mar 10, 2022</p>
                </a>
                <a
                  href="#"
                  className="block p-2 w-48 hover:bg-gray-100 transition-colors duration-300"
                >
                  <img
                    src={techImage3}
                    alt="Tech 3"
                    className="w-full h-28 object-cover rounded-md"
                  />
                  <p className="mt-2 text-sm font-medium hover:text-blue-600 transition-colors duration-300">
                    Apple Watch’s ECG Can Help Diagnose Heart Problem: Research
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Jan 19, 2021</p>
                </a>
                <a
                  href="#"
                  className="block p-2 w-48 hover:bg-gray-100 transition-colors duration-300"
                >
                  <img
                    src={techImage4}
                    alt="Tech 4"
                    className="w-full h-28 object-cover rounded-md"
                  />
                  <p className="mt-2 text-sm font-medium hover:text-blue-600 transition-colors duration-300">
                    Simple Tips and Tricks to Take Care of Your Expensive DSLR
                    Camera
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Jan 16, 2021</p>
                </a>
                <a
                  href="#"
                  className="block p-2 w-48 hover:bg-gray-100 transition-colors duration-300"
                >
                  <img
                    src={techImage5}
                    alt="Tech 5"
                    className="w-full h-28 object-cover rounded-md"
                  />
                  <p className="mt-2 text-sm font-medium hover:text-blue-600 transition-colors duration-300">
                    Tech Study Reveals Effects of Mobile Technology on
                    Professionals
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Jan 15, 2021</p>
                </a>
              </div>
            </div>
            <a href="#" className="text-lg relative font-medium">
              Gadgets
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <div className="group relative">
              <button className="text-lg flex items-center font-medium">
                Phones <MdKeyboardArrowDown />
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-white shadow-lg transition-transform duration-300">
                <a href="#" className="block p-2">
                  Phone 1
                </a>
                <a href="#" className="block p-2">
                  Phone 2
                </a>
              </div>
            </div>
            <a href="#" className="text-lg relative font-medium">
              Buy Theme
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-white py-1.5 px-4 pr-3.5  rounded-md bg-[#3C3FDE] hover:bg-black transition-colors duration-300 ">
              SUBSCRIBE
            </button>
            <button className="text-1xl hover:text-blue-600 transition-colors duration-300 pl-4">
              <BsMoon />
            </button>
            <button className="text-1xl hover:text-blue-600 transition-colors duration-300">
              <IoSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
