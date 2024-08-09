import React from "react";

const articles = [
  {
    title: "Game Development This Week: Save On Essential Tools and More",
    author: "Shane Doe",
    date: "Nov 19, 2022",
    category: "Gaming",
    image: "/path/to/image1.png",
  },
  {
    title:
      "Is the Hyperloop Doomed? What Elon Musk's Latest Setback Really Means",
    author: "Shane Doe",
    date: "Mar 10, 2022",
    category: "Technology",
    image: "/path/to/image2.png",
  },
  {
    title:
      "The Best Early Black Friday Deals on Gaming Laptops and Accessories",
    author: "Shane Doe",
    date: "Mar 10, 2022",
    category: "Technology",
    image: "/path/to/image3.png",
  },
  {
    title:
      "Riot Games Acquires a Wargaming Studio to Help With Live Game Development",
    author: "Shane Doe",
    date: "Mar 10, 2022",
    category: "Gaming",
    image: "/path/to/image4.png",
  },
];

const socialLinks = [
  { name: "Facebook", count: "1.3K", icon: "/path/to/facebook.png" },
  { name: "Twitter", count: "68.9K", icon: "/path/to/twitter.png" },
  { name: "Pinterest", count: "10.7K", icon: "/path/to/pinterest.png" },
  { name: "Instagram", count: "46.4K", icon: "/path/to/instagram.png" },
  { name: "Telegram", icon: "/path/to/telegram.png" },
  { name: "WhatsApp", icon: "/path/to/whatsapp.png" },
];

const gamingZone = [
  {
    title: "PS5 vs Xbox Series XS vs Switch Launch Sales Comparison",
    date: "Sep 8, 2020",
    image: "/path/to/gaming1.png",
  },
  {
    title: "New Oculus VR Kills IRL If Your Game Character Dies",
    date: "Apr 18, 2020",
    image: "/path/to/gaming2.png",
  },
  {
    title: "Hologate VR Serves Its Five Millionth Customer",
    date: "Mar 16, 2020",
    image: "/path/to/gaming3.png",
  },
  {
    title: "The Nintendo Switch Can't Seem To Handle Pokémon",
    date: "Mar 15, 2020",
    image: "/path/to/gaming4.png",
  },
  {
    title: "The Fujifilm X-T30 Is The Perfect Camera for Gaming",
    date: "Apr 18, 2020",
    image: "/path/to/gaming5.png",
  },
];

const ArticleCard = ({ title, author, date, category, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <span
        className={`bg-${category.toLowerCase()} text-white text-xs font-semibold rounded-full px-2 py-1`}
      >
        {category}
      </span>
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <div className="text-gray-600 text-sm flex items-center mt-2">
        <span>{author}</span>
        <span className="mx-2">•</span>
        <span>{date}</span>
      </div>
      <p className="text-gray-700 mt-2">
        To understand the new smart watched and other pro devices of recent
        focus, we should look to Silicon Valley and the quantified...
      </p>
    </div>
  </div>
);

const SidebarCard = ({ title, date, image }) => (
  <div className="flex space-x-4 mb-4">
    <img
      src={image}
      alt={title}
      className="w-16 h-16 rounded-full object-cover"
    />
    <div className="flex-1">
      <h3 className="text-sm font-bold">{title}</h3>
      <span className="text-xs text-gray-500">{date}</span>
    </div>
  </div>
);

const LateArticle = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4 p-4">
      <main className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Latest Articles</h1>
        <div className="space-y-4">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              author={article.author}
              date={article.date}
              category={article.category}
              image={article.image}
            />
          ))}
        </div>
      </main>
      <aside className="w-full lg:w-64 bg-white p-4 rounded-lg shadow-md space-y-4">
        <div>
          <h2 className="text-xl font-bold mb-4">We're Social</h2>
          <div className="space-y-2">
            {socialLinks.map((link, index) => (
              <div key={index} className="flex items-center space-x-2">
                <img src={link.icon} alt={link.name} className="w-6 h-6" />
                <span className="text-sm font-semibold">{link.name}</span>
                {link.count && (
                  <span className="text-xs text-gray-500">{link.count}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Gaming Zone</h2>
          {gamingZone.map((game, index) => (
            <SidebarCard
              key={index}
              title={game.title}
              date={game.date}
              image={game.image}
            />
          ))}
        </div>
      </aside>
    </div>
  );
};

export default LateArticle;
