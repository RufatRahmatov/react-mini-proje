import React from "react";

const TrendingVideos = () => {
  return (
    <div className="bg-[#0e0b29] text-white p-8">
      <h2 className="text-2xl font-bold mb-4">Trending Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Video Card */}
        <div className="col-span-2">
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
              <h3 className="text-xl font-bold">
                Soundcore VR Gaming Earbuds Designed for Meta Quest 2 Launched
              </h3>
              <p className="text-sm mt-1">Shane Doe • Sep 20, 2020</p>
            </div>
          </div>
        </div>

        {/* Side Video List */}
        <div className="grid grid-cols-1 gap-4">
          <div className="relative">
            <img
              src="your-image-url-here.jpg"
              alt="Side Video"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full rounded-b-lg">
              <h3 className="text-sm font-bold">
                Photography: Save $800 on a Fujifilm Camera Before Black...
              </h3>
              <p className="text-xs mt-1">Shane Doe • Sep 12, 2020</p>
            </div>
          </div>
          {/* Repeat for other videos */}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {/* Small Video Cards */}
        <div className="relative">
          <img
            src="your-image-url-here.jpg"
            alt="Small Video"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full rounded-b-lg">
            <h3 className="text-sm font-bold">
              Leaf Headphones: Here are Some of The Best Devices...
            </h3>
            <p className="text-xs mt-1">Shane Doe • Sep 17, 2020</p>
          </div>
        </div>
        {/* Repeat for other small videos */}
      </div>
    </div>
  );
};

export default TrendingVideos;
