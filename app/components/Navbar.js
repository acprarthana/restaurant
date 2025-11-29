// "use client";
// import {useState} from 'react';
// import { useRouter } from "next/navigation";
// export default function Navbar(){
//      const router = useRouter();
//      const[open,setOpen] = useState(false);
//     return(
//  <div className ="bg-white dark:bg-black">
//             <div className ="flex flex-row justify-around items-center  mb-[21px]">
//                 <div className ="bg-white dark:bg-zinc-900  w-full h-[70px] flex flex-row justify-around items-center md:gap-0.5"> 
//                     <img className="w-[100px] h-[70px] block dark:hidden" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-2.png&w=1920&q=75"/>
//                     <img className="w-[100px] h-[70px] hidden dark:block" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"></img>
//                     <div className ="flex flex-row justify-between items-center gap-10">
//                     <div onClick={() => router.push("/Home")} className="hidden md:block font-semibold text-md">Home</div>
//                     <div onClick={() => router.push("reservation")} className="hidden md:block font-semibold text-md dark:text-white">Reservation</div>
//                     <div onClick={() => router.push("/Menu")} className="hidden md:block font-semibold text-md">Menu</div>
//                     <div onClick={() => router.push("/Login")} className="hidden md:block font-semibold text-md">Login</div>
//                     <div onClick={() => router.push("/Register")}  className="hidden md:block font-semibold text-md">Register</div>
//                     <div className="hidden md:blockfont-semibold dark:text-white text-md">Shop</div>
//                     <div className="flex items-center"></div>
//                      <div className= 'md:ml-[120px] ml-[-150px]  mt-[12] rounded-full overflow-hidden bg-red-500 h-12 w-12 flex flex-row items-center justify-center'>
//                         <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" className="w-3/4 h-3/4 object-contain "></img>
//                     </div>
//                     <div className="hidden md:flex w-[150px] h-[45px] mx-[41px] rounded-3xl bg-red-500 text-black items-center justify-center ">Reservations</div>
//                     </div>
//                     </div>
//                     {/* HAMBURGER (mobile only) */}
// <div className="flex flex-col gap-[6px] md:hidden cursor-pointer"
//      onClick={() => setOpen(!open)}>
//   <span className="w-7 h-[3px] bg-black dark:bg-white rounded"></span>
//   <span className="w-7 h-[3px] bg-black dark:bg-white rounded"></span>
//   <span className="w-7 h-[3px] bg-black dark:bg-white rounded"></span>
// </div>

//                     </div>
//                     </div>
//                         )
// }

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar(){
    const router = useRouter();
    const [open, setOpen] = useState(false); 

    return(
 <div className="bg-white dark:bg-black">
    <div className="flex flex-row justify-around items-center mb-[21px]">
        <div className="bg-white dark:bg-zinc-900 w-full h-[70px] flex flex-row justify-around items-center md:gap-0.5"> 
            
            
            <img
                className="w-[100px] h-[70px] block dark:hidden"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-2.png&w=1920&q=75"
            />
            <img
                className="w-[100px] h-[70px] hidden dark:block"
                src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
            />

            <div className="flex flex-row justify-between items-center md:gap-10 gap-2">
                <div onClick={() => router.push("/Home")} className="hidden md:block font-semibold text-md">Home</div>
                <div onClick={() => router.push("reservation")} className="hidden md:block font-semibold text-md dark:text-white">Reservation</div>
                <div onClick={() => router.push("/Menu")} className="hidden md:block font-semibold text-md">Menu</div>
                <div onClick={() => router.push("/Login")} className="hidden md:block font-semibold text-md">Login</div>
                <div onClick={() => router.push("/Register")}  className="hidden md:block font-semibold text-md">Register</div>
                <div className="hidden md:block font-semibold dark:text-white text-md">Shop</div>

                <div className="flex items-center"></div>

            
                <div className='md:ml-[120px] ml-0 mt-[12] rounded-full overflow-hidden bg-red-500 h-12 w-12 flex flex-row items-center justify-center'>
                    <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" className="w-3/4 h-3/4 object-contain" />
                </div>

                
                <div className="hidden md:flex w-[150px] h-[45px] mx-[41px] rounded-3xl bg-red-500 text-black items-center justify-center ">
                    Reservations
                </div>
            </div>

            
            <button
                className="md:hidden block text-3xl ml-3"
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

        </div>
    </div>

    {open && (
        <div className="md:hidden bg-white dark:bg-zinc-900 px-6 py-4 space-y-3">
            <div onClick={() => router.push("/Home")} className="font-semibold text-md">Home</div>
            <div onClick={() => router.push("reservation")} className="font-semibold text-md">Reservation</div>
            <div onClick={() => router.push("/Menu")} className="font-semibold text-md">Menu</div>
            <div onClick={() => router.push("/Login")} className="font-semibold text-md">Login</div>
            <div onClick={() => router.push("/Register")} className="font-semibold text-md">Register</div>
            <div className="font-semibold text-md">Shop</div>

        
        </div>
    )}

 </div>
    )
}
