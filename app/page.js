"use client";

import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import FoodCard from "./components/FoodCard";
import Button from "./components/Button";
import Footer from "./components/Footer";

export default function Home() {
  const food = [
    {
      name: "Hamburger",
      desc: "The hamburger is the original and the best-known burger to date",
      foodImg:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F9.png&w=640&q=75",
      Foodratings:
        "https://static.vecteezy.com/system/resources/previews/013/743/771/non_2x/five-stars-rating-icon-png.png",
    },
    {
      name: "Chicken Burger",
      desc: "Crispy, juicy chicken patty with special sauce and lettuce.",
      foodImg:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F10.png&w=640&q=75",
      Foodratings:
        "https://static.vecteezy.com/system/resources/previews/013/743/771/non_2x/five-stars-rating-icon-png.png",
    },
    {
      name: "Cheese Burger",
      desc: "Loaded with melted cheese and fresh ingredients.",
      foodImg:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F11.png&w=640&q=75",
      Foodratings:
        "https://static.vecteezy.com/system/resources/previews/013/743/771/non_2x/five-stars-rating-icon-png.png",
    },
    {
      name: "Bacon Burger",
      desc: "Savory bacon layered over juicy grilled beef.",
      foodImg:
        "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F12.png&w=640&q=75",
      Foodratings:
        "https://static.vecteezy.com/system/resources/previews/013/743/771/non_2x/five-stars-rating-icon-png.png",
    },
  ];

  return (
    <div className="w-full min-h-screen dark:bg-zinc-900 bg-zinc-50">
      <Hero />
      <div className=" md:ml-[75px] md:ml-[120px] ml-[20px] md:h-[600px] md:w-[1200px] w-[330px] bg-red-950 md:rounded-[80px] mx-[5px] mt-[40px] items-start pt-[5px] ">
          <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F19.png&w=750&q=75" className="h-auto object-cover mt-[140px]"></img>
          <div className="ml-[700px] flex flex-col mt-[-500px]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQViUCvopaH4eY-p43jLB80TGxBs7GcvSFHLA&s" className="h-[590px] w-[600px] object-cover rounded-br-[80px] rounded-tr-[80px]"></img>
        </div>
        </div>
      <AboutUs />
      <div className="w-full min-h-screen dark:bg-zinc-800 bg-zinc-100">
        <div className="flex flex-col justify-center items-center">
          <div className="text-red-700 mt-[55px]">~-------OUR SPECIAL-------~</div>
          <div className="text-black dark:text-white text-4xl font-bold">
            Popular Burgers
          </div>
          <div className="flex md:flex-row flex-col justify-around items-center mt-[30px] gap-7 p-4">
            {food.map((item, index) => (
              <FoodCard
                key={index}
                name={item.name}
                desc={item.desc}
                Foodratings={item.Foodratings}
                foodImg={item.foodImg}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full md:h-[500px] justify-around items-center bg-gray-900 py-10">
        <div className="relative w-[600px] h-[350px] overflow-hidden rounded-2xl">
          <img
            className="rounded-2xl object-cover w-full h-full"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fdeal%2F1.jpg&w=828&q=75"
            alt="Deal 1"
          />
          <div className="absolute inset-0 flex flex-col text-white justify-center bg-black/30">
            <div className="ml-[70px]">
              <p className="text-xl">Eat Sleep And</p>
              <p className="text-5xl font-bold mb-[30px]">DREAM BURGER</p>
              <Button />
            </div>
          </div>
        </div>
        <div className="relative w-[600px] h-[350px] overflow-hidden rounded-2xl">
          <img
            className="rounded-2xl object-cover w-full h-full"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fdeal%2F2.jpg&w=828&q=75"
            alt="Deal 2"
          />
          <div className="absolute inset-0 flex flex-col text-white justify-center bg-black/30">
            <div className="ml-[70px] md:ml-[340px]">
              <p className="text-xl">Best Deal Ever</p>
              <p className="text-5xl font-bold mb-[30px]">LUGAR BURGER</p>
              <Button />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
