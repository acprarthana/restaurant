export default function eservation (){
    return(
    <div>
        <div className=" md:w-[550px] md:ml-0 ml-[-45px] w-[310px] mt-5 rounded-2xl shadow-lg shadow-black text-white bg-zinc-800 ">
        <div className="text-4xl font-bold mb-8 md:mt-[50px] ml-[60px]">Book A Table</div>
        <div className="space-y-6 ml-[60px] h-[500px]">

 
  <div className="text-sm font-light ">Phone</div>

  <input
    type="text"
    placeholder="Phone"
    className="border
     border-gray-400 rounded-lg px-4 py-2 mb-4 w-[80%] "
  />
  <div className="text-sm font-light ">Person</div>
  <input
    type="number"
    placeholder="3 person"
    className="border border-gray-400 rounded-lg px-4 py-2 mb-4 w-[80%] "
  />
<div className="text-sm font-light ">Date</div>
  <input type="date"
    className="border border-gray-400 rounded-lg px-4 py-2 mb-6 w-[80%] "
  />
  <div className="text-sm font-light ">Time</div>
  <input
    type="time"
    className="border border-gray-400 rounded-lg px-4 py-2 mb-6 w-[80%] "
  />

  <button className="bg-orange-900 text-white px-6 py-2 rounded-[10px] hover:bg-black transition">
    Book A Table
  </button>
</div>
</div>
</div>
    )
}