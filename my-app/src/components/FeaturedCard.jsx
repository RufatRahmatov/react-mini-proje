import React from "react";

const FeaturedReviews = () => {
  return (
    <div className="bg-white text-black p-8">
      <h2 className="text-center text-2xl font-bold mb-6">Featured Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main Large Card */}
        <div className="relative">
          <img
            src="your-image-url-here.jpg"
            alt="Main Review"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-0 right-0 m-4 bg-blue-800 text-white text-xs px-2 py-1 rounded-full">
            85%
          </div>
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full rounded-b-lg">
            <span className="bg-pink-600 text-white text-xs px-2 py-1 rounded">
              GAMING
            </span>
            <h3 className="text-xl font-bold mt-2">
              Pico 4 Review: Should You Actually Buy One Instead Of Quest 2?
            </h3>
            <p className="text-sm mt-1">Shane Doe • Jan 15, 2021</p>
            <p className="text-sm mt-2">
              To understand the new smart watched and other pro devices of
              recent focus, we should look to...
            </p>
          </div>
        </div>

        {/* Small Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <img
              src="your-image-url-here.jpg"
              alt="Review Image"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-0 right-0 m-4 bg-blue-800 text-white text-xs px-2 py-1 rounded-full">
              8.1
            </div>
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full rounded-b-lg">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                TECHNOLOGY
              </span>
              <h3 className="text-sm font-bold mt-2">
                A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens
              </h3>
              <p className="text-xs mt-1">Shane Doe • Jan 15, 2021</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="your-image-url-here.jpg"
              alt="Review Image"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-0 right-0 m-4 bg-blue-800 text-white text-xs px-2 py-1 rounded-full">
              8.9
            </div>
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full rounded-b-lg">
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                GADGETS
              </span>
              <h3 className="text-sm font-bold mt-2">
                DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts
              </h3>
              <p className="text-xs mt-1">Shane Doe • Jan 15, 2021</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="your-image-url-here.jpg"
              alt="Review Image"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-0 right-0 m-4 bg-blue-800 text-white text-xs px-2 py-1 rounded-full">
              8.9
            </div>
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full rounded-b-lg">
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                GADGETS
              </span>
              <h3 className="text-sm font-bold mt-2">
                Bose QuietComfort Earbuds II: Noise-Cancellation Kings Reviewed
              </h3>
              <p className="text-xs mt-1">Shane Doe • Jan 15, 2021</p>
            </div>
          </div>
          <div className="relative">
            <img
              src="your-image-url-here.jpg"
              alt="Review Image"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-0 right-0 m-4 bg-blue-800 text-white text-xs px-2 py-1 rounded-full">
              81%
            </div>
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full rounded-b-lg">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                TECHNOLOGY
              </span>
              <h3 className="text-sm font-bold mt-2">
                AMD Ryzen 9 7900X Review: Zen 4 Has a Pricing Problem
              </h3>
              <p className="text-xs mt-1">Shane Doe • Jan 15, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedReviews;
