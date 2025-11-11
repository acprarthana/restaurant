export default function BlogSection() {
  return (
    <div className="text-center py-12 bg-white dark:bg-zinc-800">
      <h2 className="text-red-600 text-xl mb-2 tracking-wide">
        --------- NEWS & BLOG ---------
      </h2>
      <h2 className="text-5xl font-bold mb-10">Our Latest News & Blog</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 px-6 justify-items-center ">
        <div className="bg-white dark:bg-zinc-700  md:w-[550px] md:h-[500px] text-left">
          <div className="relative">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=828&q=75"
              className="w-full h-[350px] object-cover"
            />
            <div className=" relative bg-red-600 text-white md:w-[50px] h-[50px] px-3 py-1 font-bold text-sm mt-[-50px] md:ml-[500px] ml-[250px]">
              24 DEC
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 dark:text-white  mb-1">
              BY MD SOHAG • BURGER, FOOD
            </p>
            <h1 className="font-bold text-3xl hover:text-red-700">
              Picked up a Brussels burger Sprouts with ham
            </h1>
            <p className ="text-xm text-red-700 ">READ MORE</p>
          </div>
        </div>
     <div className="bg-white dark:bg-zinc-700  md:w-[550px] md:h-[500px] text-left">
          <div className="relative">
            <img
              src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=828&q=75"
              className="w-full h-[350px] object-cover"
            />
            <div className=" relative bg-red-600 text-white md:w-[50px] h-[50px] px-3 py-1 font-bold text-sm mt-[-50px] md:ml-[500px] ml-[250px]">
              18 NOV
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 dark:text-white  mb-1">
              BY MD SOHAG • BURGER, FOOD
            </p>
            <h1 className="font-bold text-3xl hover:text-red-700">
             This prefabricated passive house is highly sustainable
            </h1>
            <p className ="text-xm text-red-700 mt-[10px] ">READ MORE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
