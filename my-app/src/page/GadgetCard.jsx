import React from "react";

const NewGadgets = () => {
  return (
    <div className="bg-white text-black p-8">
      {/* Başlık ve "See All" butonu */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">New Gadgets</h2>
        <button className="text-sm text-gray-600">See All</button>
      </div>

      {/* Ana kart ve yan liste */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="relative">
            <img
              src="your-image-url-here.jpg"
              alt="Main Video"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full rounded-b-lg">
              <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                GADGETS
              </span>
              <h3 className="text-xl font-bold mt-2">
                Oculus Founder Makes a VR Headset That Can Literally Kill You
              </h3>
              <p className="text-sm mt-1">Shane Doe • Jan 13, 2021</p>
              <p className="text-sm mt-2">
                To understand the new smart watches and other pro devices of
                recent focus, we should...
              </p>
              <button className="text-blue-600 mt-2">Read More</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <img
              src="your-image-url-here.jpg"
              alt="Side Video"
              className="w-24 h-16 rounded-lg"
            />
            <div>
              <h3 className="text-sm font-bold">
                Braun Series 7 Electric Shaver Review: Quality at a Good Price
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Shane Doe • Jan 13, 2021
              </p>
            </div>
          </div>
          {/* Diğer kartlar için tekrarlayın */}
        </div>
      </div>

      {/* Yeni eklenen küçük kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="relative flex items-center">
          <img
            src="your-image-url-here.jpg"
            alt="Card Image"
            className="w-24 h-16 rounded-lg"
          />
          <div className="ml-4">
            <h3 className="text-sm font-bold">
              The Pros of Buying a Used/Refurbished iPhone 11
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Shane Doe • Jan 14, 2021
            </p>
          </div>
        </div>
        <div className="relative flex items-center">
          <img
            src="your-image-url-here.jpg"
            alt="Card Image"
            className="w-24 h-16 rounded-lg"
          />
          <div className="ml-4">
            <h3 className="text-sm font-bold">
              OnePlus Will Focus on a Premium Build Over Camera Performance
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Shane Doe • Jan 14, 2021
            </p>
          </div>
        </div>
        <div className="relative flex items-center">
          <img
            src="your-image-url-here.jpg"
            alt="Card Image"
            className="w-24 h-16 rounded-lg"
          />
          <div className="ml-4">
            <h3 className="text-sm font-bold">
              These OnePlus Phones Are Getting Stable Android 13 Update
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Shane Doe • Jan 14, 2021
            </p>
          </div>
        </div>
        <div className="relative flex items-center">
          <img
            src="your-image-url-here.jpg"
            alt="Card Image"
            className="w-24 h-16 rounded-lg"
          />
          <div className="ml-4">
            <h3 className="text-sm font-bold">
              The Best Wireless Earbuds for the Samsung Galaxy S22 in 2022
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Shane Doe • Jan 14, 2021
            </p>
          </div>
        </div>
        <div className="relative flex items-center">
          <img
            src="your-image-url-here.jpg"
            alt="Card Image"
            className="w-24 h-16 rounded-lg"
          />
          <div className="ml-4">
            <h3 className="text-sm font-bold">
              Huawei Phones are Moving Forward Without Google Mobile Services
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Shane Doe • Jan 13, 2021
            </p>
          </div>
        </div>
        <div className="relative flex items-center">
          <img
            src="your-image-url-here.jpg"
            alt="Card Image"
            className="w-24 h-16 rounded-lg"
          />
          <div className="ml-4">
            <h3 className="text-sm font-bold">
              Redmi Series Launched With 200MP Camera and a Fast Charging
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Shane Doe • Jan 13, 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGadgets;
