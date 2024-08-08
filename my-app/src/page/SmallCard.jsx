import React from "react";

const SmallCard = ({ category, title, author, date }) => {
  return (
    <div className="mt-10 rounded-lg overflow-hidden shadow-lg w-[300px] mx-auto">
      <div className="group w-[300px]">
        <img
          className="w-[720px] h-[460px] object-cover rounded-lg relative group-hover:scale-105 transition-transform duration-300 ease-in-out"
          src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-768x960.jpg"
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex items-end">
          <div>
            <span className="mt-2 p-3 bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">
              {category}
            </span>
            <h2 className="p-2 text-white text-2xl bg-black font-bold mt-4">
              {title}
            </h2>
            <div className="flex items-center mt-4">
              <img
                className="w-5 h-5 rounded-full mr-2"
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-768x567.jpg"
                alt={author.name}
              />
              <div className="flex text-white text-xs">
                <p>{author.name}</p> <p> {date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
