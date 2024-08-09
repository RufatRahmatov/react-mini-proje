import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Most Popular Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Most Popular</h3>
          <ul>
            <li className="mb-3">
              <a href="#" className="flex items-center">
                <img
                  src="image1.jpg"
                  alt="Popular 1"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <p>
                    Popular New Xbox Game Pass Game Being Review Bombed With
                    “Os”
                  </p>
                  <small>Jan 14, 2021 • 7,792 Views</small>
                </div>
              </a>
            </li>
            {/* Add more items as needed */}
          </ul>
        </div>

        {/* Our Picks Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Picks</h3>
          <ul>
            <li className="mb-3">
              <a href="#" className="flex items-center">
                <img src="image2.jpg" alt="Pick 1" className="w-12 h-12 mr-4" />
                <div>
                  <p>
                    Game Development This Week: Save On Essential Tools and More
                  </p>
                  <small>Nov 19, 2022</small>
                </div>
              </a>
            </li>
            {/* Add more items as needed */}
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to Updates</h3>
          <p className="mb-4">
            Get the latest creative news from FooBar about art, design and
            business.
          </p>
          <input
            type="email"
            placeholder="Your email address.."
            className="w-full p-2 mb-4 text-black"
          />
          <button className="bg-blue-600 text-white py-2 px-4 w-full">
            Subscribe
          </button>
          <p className="text-xs mt-2">
            By signing up, you agree to the terms and our Privacy Policy
            agreement.
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-10 flex justify-between items-center border-t border-gray-700 pt-4">
        <div className="flex space-x-4">
          <a href="#" className="text-white">
            Facebook
          </a>
          <a href="#" className="text-white">
            Twitter
          </a>
          <a href="#" className="text-white">
            Instagram
          </a>
        </div>
        <div>
          <p className="text-xs">
            &copy; 2024 ThemeSphere. Designed by ThemeSphere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
