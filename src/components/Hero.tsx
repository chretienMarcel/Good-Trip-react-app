import React from "react";
export default function Hero() {
  return (

    <div className="max-w-6xl mx-auto px-6 mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-between gap-12">
        
       
        <div className="md:w-1/2">
            <h4 className="text-lg font-extrabold text-red-400 mb-4 tracking-widest uppercase">
              Best Destinations around the World
            </h4>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              Travel, enjoy and live a new and full life
            </h1>
            
            <h6 className="text-sm md:text-base text-gray-500 max-w-lg mb-8 leading-relaxed">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate
              sell they west hard for the.
            </h6>
            
            <button className="bg-amber-500 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:bg-amber-600 hover:shadow-lg transition-all duration-200 cursor-pointer">
              Find out more
            </button>
        </div>

        
        <div className="md:w-1/2 flex justify-center ">
    
            <img 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuu46MyoXyxHYSkm3xYYTg6FmiLCEJ2uRMwC8EyG04F2NdNZ8Dp6UkfZx&s=10"
  alt="Voyageur Jadoo" 
  className="w-full max-w-md md:max-w-xl object-contain relative z-10 mix-blend-multiply"
/>

        </div>

    </div>
  );
}
