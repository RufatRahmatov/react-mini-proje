// import React from "react";

// const SmallCard = () => {
//   const cardsData = [
//     {
//       image:
//         "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-819x1024.jpg",
//       category: "TECHNOLOGY",
//       title:
//         "Tablet PC Market to Witness Exponential Growth by 2028, Sources Say",
//       author: "Shane Doe",
//       date: "Jan 11, 2020",
//     },
//     {
//       image:
//         "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-1024x756.jpg",
//       category: "TECHNOLOGY",
//       title:
//         "Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks",
//       author: "Shane Doe",
//       date: "Jan 11, 2020",
//     },
//   ];

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className=" absalute top-[40px] grid grid-cols-1 md:grid-cols-2 gap-4">
//         {cardsData.map((card, index) => (
//           <div
//             key={index}
//             className="max-w-sm rounded-xl overflow-hidden shadow-lg"
//           >
//             <img
//               className="w-full h-48 object-cover"
//               src={card.image}
//               alt="Card image cap"
//             />
//             <div className="px-6 py-4">
//               <span className="bg-blue-500 text-white px-2 py-1 text-xs font-semibold rounded">
//                 {card.category}
//               </span>
//               <div className="font-bold text-xl mt-2 mb-2">{card.title}</div>
//               <p className="text-gray-700 text-base">
//                 {card.author} • {card.date}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SmallCard;
