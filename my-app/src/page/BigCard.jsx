import React from "react";

const BigCard = () => {
  return (
    <div className="relative rounded overflow-hidden shadow-lg">
      <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          className="w-full"
          src="https://via.placeholder.com/800x400"
          alt="Headphones"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6">
          <div className="absolute bottom-0 left-0 p-6">
            <span className="bg-pink-600 text-white text-sm font-bold px-2 py-1 rounded">
              GADGETS
            </span>
            <h2 className="text-white text-2xl font-bold mt-2">
              Save $25 on Philips Wired Headphone For A Great Sounding Over-Ear
              Headphone
            </h2>
            <div className="flex items-center mt-2">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src="https://via.placeholder.com/50"
                alt="Author"
              />
              <div className="text-white text-sm">
                <p>Shane Doe</p>
                <p>Jan 12, 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
