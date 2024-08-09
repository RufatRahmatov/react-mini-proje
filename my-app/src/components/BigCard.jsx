import React from "react";

const BigCard = () => {
  return (
    <div className="mt-10 rounded-lg relative overflow-hidden shadow-lg w-[750px]">
      <div className="group w-[750px]">
        <img
          className="w-[800px] h-[500px] object-cover rounded-lg relative group-hover:scale-105 transition-transform duration-300 ease-in-out"
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

const CardSection = () => {
  const cardsData = [
    {
      image:
        "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-819x1024.jpg",
      category: "TECHNOLOGY",
      title:
        "Tablet PC Market to Witness Exponential Growth by 2028, Sources Say",
      author: "Shane Doe",
      date: "Jan 11, 2020",
    },
    {
      image:
        "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-1024x756.jpg",
      category: "TECHNOLOGY",
      title:
        "Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks",
      author: "Shane Doe",
      date: "Jan 11, 2020",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="absolute top-[40px] grid grid-cols-1 md:grid-cols-2 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-48 object-cover"
              src={card.image}
              alt="Card image cap"
            />
            <div className="px-6 py-4">
              <span className="bg-blue-500 text-white px-2 py-1 text-xs font-semibold rounded">
                {card.category}
              </span>
              <div className="font-bold text-xl mt-2 mb-2">{card.title}</div>
              <p className="text-gray-700 text-base">
                {card.author} • {card.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ArticleCard = ({ category, title, author, date, imgSrc }) => {
  return (
    <div className="flex items-center mb-4 border-b border-gray-300 pb-4">
      <div className="flex-1">
        <span
          className={`text-sm font-bold ${
            category === "TECHNOLOGY" ? "text-blue-600" : "text-pink-600"
          }`}
        >
          {category}
        </span>
        <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <div className="flex items-center text-gray-600 text-xs">
          <p>{author}</p>
          <p className="ml-2">• {date}</p>
        </div>
      </div>
      <img
        className="w-16 h-16 object-cover rounded-full ml-6"
        src={imgSrc}
        alt={title}
      />
    </div>
  );
};

const Layout = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center mr-0 ml-114 flex-col lg:flex-row lg:space-x-4">
        <div className="lg:w-2/2 relative -top-[180px]">
          <BigCard />
        </div>
        <div className="lg:w-1/3 mt-6  p-8 lg:mt-0 ">
          <h2 className="text-2xl w-[320px] p-1 relative -top-[2px] button-3 border-b-2 border-gren font-bold text-gray-800 mb-4">
            People's Favorite
          </h2>
          <div className="space-y-4 w-[320px] p-1">
            <ArticleCard
              category="TECHNOLOGY"
              title="Schools, Parents Disagree over Bans on Student Mobile Phones"
              author="Shane Doe"
              date="6 Mins Read"
              imgSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/youssef-sarhan-tze1kKj7Lgg-unsplash-1-768x489.jpg"
            />
            <ArticleCard
              category="GADGETS"
              title="PC Game Deals: Stealth Classic to Grab, Fresh VR Bundle & More"
              author="Shane Doe"
              date="6 Mins Read"
              imgSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-sound-on-3761262-1-768x455.jpg"
            />
            <ArticleCard
              category="TECHNOLOGY"
              title="Electric Car Owners to Pay Road Tax from 2025, Hunt Announces"
              author="Shane Doe"
              date="6 Mins Read"
              imgSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_273724454_xl-2015-768x512.jpg"
            />
            <ArticleCard
              category="PHONES"
              title="Tackling Smartphone Addiction: Village Bans Mobiles for Minors"
              author="Shane Doe"
              date="6 Mins Read"
              imgSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_378099058_xl-2015-1-768x461.jpg"
            />
            <ArticleCard
              category="TECHNOLOGY"
              title="Epic Games Store Gives Away One Of The Best VR Games"
              author="Shane Doe"
              date="6 Mins Read"
              imgSrc="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-1024x445.jpg"
            />
          </div>
        </div>
      </div>

      {/* CardSection buraya ekleniyor */}
      <CardSection />
    </div>
  );
};

export default Layout;
