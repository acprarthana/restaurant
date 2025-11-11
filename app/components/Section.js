import Navbar from "./Navbar";
export default function Section({title,title1}) {
  return (
   
    <div className="md:h-[500px] mb-[150px] ">
               <Navbar />
      <img
        src="https://media.istockphoto.com/photos/japanese-seafood-sushi-on-black-background-picture-id531304830?k=6&m=531304830&s=170667a&w=0&h=emI90ojh2I0uVucwNeRP7ZZVR7vcegBzTBW-JuXkGpI="
        className="md:w-full  w-[300px] h-[300px] md:ml-[0px] ml-[10px] md:h-full   object-cover"
      />
      <div className="md:text-5xl text-2xl font-bold md:mt-[-300px] mt-[-180px] text-white text-center">{title}
      </div>
      <div className="md:text-lg text-center md:mt-[30px]">
        <span className="text-white ">🏠Home</span>
        <span className="text-white ml-[30px]">{title1}</span>
      </div>
    </div>
  );
}