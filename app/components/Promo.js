export default function Promo() {
    return (
        <div className="bg-gray-100 dark:bg-zinc-800 flex flex-col md:flex-row justify-center items-start py-12 px-6 md:px-20 mt-[200px]">
      <div className=" relative w-full md:w-1/2 flex justify-center mt-[100px]">
       <iframe width="652" height="506" src="https://www.youtube.com/embed/F3zw1Gvn4Mk" title="Mr Fox Restaurant Promo Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
   
      
<div className="w-full md:w-1/2 md:h-[550px] dark:bg-zinc-900 bg-white  p-10 ">
        <h2 className="text-3xl font-semibold mb-4 mt-[80px]">Opening Hours</h2>
        <p className="text-gray mb-8">
        A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..
        </p>
        <div className = "space-y-3">
          <div className="flex justify-between pb-2">
            <span>Sunday to Tuesday:</span>
            <span>-----------------------------------------</span>
            <span>10:00 - 09:00</span>
          </div>
         <div className="flex justify-between pb-2">
             <span>Wednesday to Thursday:</span>
              <span>------------------------------------</span>
            <span>11:30 - 10:30</span>
          </div>
          <div className="flex justify-between pb-2">
           <span>Friday & Saturday</span>
            <span>-----------------------------------------</span>
            <span>10:30 - 12:00</span>
          </div>
        </div>

        <div className="flex items-center mt-8 gap-4">
          <div className="bg-red-700 p-4 rounded-full">
            📞
          </div>
          <div>
            <p className="text-gray-400">Call Anytime</p>
            <p className="text-xl font-semibold">+964733-378901</p>
          </div>
        </div>
      </div>
      </div>
    )
}