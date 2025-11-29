export default function Footer() {
  return (
    <div className="relative">
    <footer className="bg-black dark:bg-zinc-800 text-white py-12 px-8 md:px-20 w-full max-w-[1100px] md:h-[500px] mx-auto relative z-10 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-[60px]">
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-400 mb-6">
            Continued at zealously necessary is surrounded sir motionless she end literature. 
            Gay direction neglected.
          </p>
          <div className="flex space-x-4 w-[200px] h-[50px]">
             <div  className="bg-gray-700  p-2 rounded">
           <img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" className="w-[30px] h-[30px] object-contain"></img>
            </div>
            <div className="bg-gray-700  p-2 rounded">
              <img src="https://cdn-icons-png.flaticon.com/128/25/25347.png" className="w-[30px] h-[30px] object-contain"></img>
            </div>
            <div className="bg-gray-700  p-2 rounded">
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" className="w-[30px] h-[30px] object-contain"></img>
            </div>
            <div className="bg-gray-700  p-2 rounded">
             <img src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png" className="w-[30px] h-[30px] object-contain"></img>
         </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Explore</h2>
          <ul className="text-gray-400 space-y-2">
            <li>Company Profile</li>
            <li>About</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <ul className="text-gray-400 space-y-3">
            <li className="flex items-center">
                <div className="w-[50px] h-[45px] bg-amber-900 flex items-center justify-center rounded-xl">
                <img src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"  className="w-[20px] h-[20px] object-contain"></img>
              </div>
             <span className="ml-2"> 175 10th Street, Office 375 Berlin, DE 21562</span>
            </li>
            <li className="flex items-center">
                <div className="w-[50px] h-[45px] bg-amber-900 flex items-center justify-center rounded-xl">
                <img src="https://cdn-icons-png.flaticon.com/128/126/126341.png"  className="w-[20px] h-[20px] object-contain"></img>
              </div>
             <span className="ml-2"> +123 34598768, +554 34598734</span>
            </li>
            <li className="flex items-center">
                <div className="w-[50px] h-[45px] bg-amber-900 flex items-center justify-center rounded-xl">
                <img src="https://cdn-icons-png.flaticon.com/128/542/542689.png"  className="w-[20px] h-[20px] object-contain"></img>
              </div>
             <span className="ml-2">food@restan.com </span>
             </li>
               
            
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-400 mb-4">
            Join our subscribers list to get the latest news and special offers.
          </p>
          <div className="flex items-center  ">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-black text-white px-4 py-2  w-full"
            />
            <button className="bg-amber-600 px-4 py-2 text-white hover:bg-amber-700">
              ➡
            </button>
          </div>
          <div className="mt-3 text-gray-400 text-sm">
            <input type="checkbox" id="privacy" className="mr-2" />
              I agree to the Privacy Policy
          </div>
        </div>
        </div>
    </footer>
    <div className="bg-gray-900 border-t border-gray-800 py-6 mt-[-150px] relative z-0 h-[350px]">
 <div className="flex items-center gap-2">
  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=750&q=75"
  //  className="w-[150px] mt-[200px] ml-[100px]"/> 
  className="w-[150px] mt-[200px]" />
  
 <p className="text-white text-center mt-[200px]">
© Copyright 2025. Restan. All Rights Reserved</p>
</div>
</div>
</div>
  );
} 