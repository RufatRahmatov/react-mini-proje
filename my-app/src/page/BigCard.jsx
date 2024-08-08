import React from "react";

const BigCard = () => {
  return (
    <div className="mt-10 rounded-lg relative overflow-hidden shadow-lg w-[650px] mx-auto">
      <div className="group w-[700]">
        <img
          className="w-[720px] h-[460px] object-cover rounded-lg relative group-hover:scale-105 transition-transform duration-300 ease-in-out"
          src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-768x512.jpg"
          alt="Headphones"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex items-end">
          <div>
            <span className="mt-2 p-3 bg-pink-600 text-white text-sm font-bold px-2 py-1 rounded">
              GADGETS
            </span>
            <h2 className="p-2 text-white text-2xl bg-black font-bold mt-4">
              Save $25 on Philips Wired Headphone For A Great <br />
              Sounding Over-Ear Headphone
            </h2>
            <div className="flex items-center mt-4">
              <img
                className="w-5 h-5 rounded-full mr-2"
                src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
                alt="Author"
              />
              <div className="flex text-white text-xs">
                <p>Shane Doe</p> <p> Jan 12, 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
